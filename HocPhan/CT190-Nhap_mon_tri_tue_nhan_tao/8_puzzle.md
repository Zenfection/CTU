# <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-14-55-43-icons8_big_puzzle_512px_1.png" alt="icons8_big_puzzle_512px_1.png" width="50"> Trò chơi 8-puzzle

## 1. Mô tả bài toán

Cho một bảng `3x3` gồm `8` ô cho sẵn số và `1` ô trống, sử dụng ô trống để di chuyên các ô có số (*lên/xuống/trái/phải*) để trùng khớp với mục tiêu mong muốn : 

| Trạng thái đầu                                                                                                                                                                             | Trạng thái đích                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-15-06-36-Screenshot%202021-05-16%20150625.png" alt="Screenshot 2021-05-16 150625.png" width="161"> | <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-15-07-20-Screenshot%202021-05-16%20150711.png" alt="Screenshot 2021-05-16 150711.png" width="159"> |

- Sử dụng kiến thức xác xuất ta biết được trong bảng `3x3` có `9!` trường hợp có thể xảy ra ==> `362880` cách sắp xếp một bài toán

- Nhưng chỉ có `9!/2` bài toán có thể giải được ==> `181440` trường hợp có thể giải được
  
  > Chẳng hạn như, trường hợp sau đây chúng ta không thể giải được
  > 
  > ![Screenshot 2021-05-16 151221.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-15-12-30-Screenshot%202021-05-16%20151221.png)

---

## 2. Giải thuật giải quyết

Có rất nhiều giải thuật tìm kiếm nhưng tôi chỉ hướng tới 3 giải thuật này : 

1. `BFS` (*Tìm kiếm theo chiều rộng*) 

2. `DFS` (*Tìm kiếm theo chiều sâu*)

3. `A* Algorithrm` (*Giải thuật A*\*)

| Giải thuật  | <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-15-17-20-icons8_surface_512px.png" title="" alt="icons8_surface_512px.png" width="35"> BFS | <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-15-18-31-icons8_depth_512px_1.png" alt="icons8_depth_512px_1.png" width="35"> DFS |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cơ chế      | FIFO (*hàng đợi*)                                                                                                                                                         | LIFO (*ngắn xếp*)                                                                                                                                                         |
| Thực hiện   | Mở rộng các nút lần lượt từ nút `gốc`                                                                                                                                     | Phát triển sâu các trường hợp của một nhánh                                                                                                                               |
| Hạn chế     | Làm cạn bộ nhớ<br>Tốn nhiều chi phí                                                                                                                                       | Có thể rơi vào vòng lặp vĩnh cữu<br>                                                                                                                                      |
| Độ phức tạp | `O(aᵇ)` <br><br>`a` là độ sâu<br>`b` là số phân nhánh                                                                                                                     | `O(aᵇ)` <br><br>`a` là độ sâu<br>`b` là số phân nhánh                                                                                                                     |
| Mô hình     | ![bfs_gif.gif](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-15-47-42-bfs_gif.gif)                                                                 | ![dfs_gif.gif](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-15-49-17-dfs_gif.gif)                                                                 |

Trước khi biết  về giải thuật `A*` bạn phải nắm hiểu thế nào là tìm kiếm `Heuristic`

Về cơ bản, có 2 loại kỹ thuật tìm kiếm : 

- `Uninformed Search` (*Tìm kiếm không có thông tin*)

- `Informed Search` (*Tìm kiếm có thông tin*)

Như bạn đã biết thì các loại tìm kiếm như `Linear Search`, `Binary Search`, `BFS`, `DFS`... đó là những kỹ thuật `tìm kiếm không có thông tin` 

==> Với kỹ thuật này chúng ta không hề biết `những gì chúng tìm kiếm` và `nơi chúng tìm kiếm`, vậy nên nó được gọi là `không có thông tin`

==> Tìm kiếm không có thông tin rất mất thời gian vì chúng không biết phải đi đâu và đâu là cơ hội tốt nhất để tìm thấy phần tử.

Ngược lại, kỹ thuật `tìm kiếm có thông tin` nhận thức được cơ hội tốt nhất để tìm thấy phần tử và thuật toán sẽ đi theo hướng đó và kỹ thuật đó tên là `Heuristic`

==> Vậy nên tìm kiếm `Heuristic` là một kỹ thuật tìm kiếm **tối ưu**

### <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-15-19-51-icons8_flow_512px.png" title="" alt="icons8_flow_512px.png" width="35"> Giải thuật A*

Hai phương pháp `BFS` và `DFS`, mặc dù có thể cho ra kết quả bài toán, tuy nhiên nó là dạng `Uninformed Search` nên sẽ rất mất nhiều **thời gian** và **chi phí**, để tối ưu nó ta sử dụng `giải thuật A*` xét đoạn đường đã đi qua, và bằng công thức sau sẽ chọn lối đi tối ưu nhất 

```textile
f(n) = g(n) + h(n)
```

> - `g(n)` là chiều cao từ `trạng thái đang xét` tới `trạng thái đầu`
> 
> - `h(n)` là hàm `heuristic` ước lượng chi phí `trạng thái đang xét` tới `trạng thái đích` (*hiểu đơn giản là số ô không đúng với `trạng thái đích`*)
> 
> - `f(n)` càng thấp thì ưu tiên hướng đi đó

#### Mô hình A*

<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-17-05-03-a_star.gif" title="" alt="a_star.gif" width="275">

---

## 3. Cài đặt giải thuật

Cho bảng `3x3` như sau, và từ `trạng thái đầu` hãy trình bày giải thuật di chuyển các bước sau cho thành `trạng thái đích `

| Trạng thái đầu                                                                                                                                                                             | Trạng thái đích                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-15-06-36-Screenshot%202021-05-16%20150625.png" alt="Screenshot 2021-05-16 150625.png" width="161"> | <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-15-07-20-Screenshot%202021-05-16%20150711.png" alt="Screenshot 2021-05-16 150711.png" width="159"> |

### <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-15-17-20-icons8_surface_512px.png" title="" alt="icons8_surface_512px.png" width="35"> Giải thuật `BFS`

![Screenshot 2021-05-16 170812.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-17-12-15-Screenshot%202021-05-16%20170812.png)

### <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-15-19-51-icons8_flow_512px.png" title="" alt="icons8_flow_512px.png" width="35"> Giải thuật `A*`

![Screenshot 2021-05-16 170747.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-17-12-20-Screenshot%202021-05-16%20170747.png)

> ==> Tham khảo tại [8-Puzzle Solver](https://deniz.co/8-puzzle-solver/)

---

## 4. Kết luận

| Mẫu                     | Giải thuật       | Thời gian                        | Độ sâu            | Các nút xử lý         | Các nút lưu trữ      |
| ----------------------- | ---------------- | -------------------------------- | ----------------- | --------------------- | -------------------- |
| 1 7 2<br>0 5 3<br>4 8 6 | BFS<br>DFS<br>A* | 0,033048<br>1,838068<br>0,009068 | 11<br>62391<br>11 | 1694<br>108647<br>54  | 663<br>43919<br>25   |
| 0 1 2<br>4 6 5<br>7 8 3 | BFS<br>DFS<br>A* | 0,008418<br>0,847719<br>0,009151 | 12<br>35134<br>12 | 55<br>61731<br>85     | 26<br>25637<br>36    |
| 2 1 5<br>0 3 6<br>4 7 8 | BFS<br>DFS<br>A* | 0,073225<br>2,290027<br>0,009567 | 13<br>81119<br>13 | 5234<br>140716<br>75  | 1992<br>55453<br>36  |
| 1 7 2<br>4 5 3<br>8 6 0 | BFS<br>DFS<br>A* | 0,083424<br>2,493681<br>0,011888 | 14<br>88982<br>14 | 5789<br>154404<br>148 | 2322<br>60065<br>64  |
| 2 5 8<br>4 0 3<br>7 1 6 | BFS<br>DFS<br>A* | 0,342634<br>0,450451<br>0,014885 | 16<br>19522<br>16 | 24641<br>34426<br>243 | 8834<br>14441<br>102 |

==> Lập bảng so sánh : 

|          | Thời gian                                                                                                                                                                        | Độ sâu                                                                                                                                                                           | Các nút xử lý                                                                                                                                                                    | Các nút lưu trữ                                                                                                                                                                  |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| So sánh  | <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-18-02-36-2021-05-16-18-01-07-image.png" title="" alt="2021-05-16-18-01-07-image.png" width="397"> | <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-18-02-45-2021-05-16-18-01-18-image.png" title="" alt="2021-05-16-18-01-18-image.png" width="421"> | <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-18-02-49-2021-05-16-18-01-25-image.png" title="" alt="2021-05-16-18-01-25-image.png" width="366"> | <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-18-02-54-2021-05-16-18-01-31-image.png" title="" alt="2021-05-16-18-01-31-image.png" width="421"> |
| Kết luận | A* tối ưu                                                                                                                                                                        | BFS và A* tối ưu                                                                                                                                                                 | A* tối ưu                                                                                                                                                                        | A* tối ưu                                                                                                                                                                        |

==> Giải thuật `A*` tối ưu nhất trong việc giải `8-puzzle`

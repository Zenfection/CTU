# <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-14-55-43-icons8_big_puzzle_512px_1.png" alt="icons8_big_puzzle_512px_1.png" width="50"> Trò chơi 8-puzzle

## 1. Mô tả bài toán

Cho một bảng `3x3` gồm `8` ô cho sẵn số và `1` ô trống, sử dụng ô trống để di chuyên các ô có số (*lên/xuống/trái/phải*) để trùng khớp với mục tiêu mong muốn : 

| Trạng thái đầu                                                                                                                                                                             | Trạng thái đích                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-15-06-36-Screenshot%202021-05-16%20150625.png" title="" alt="Screenshot 2021-05-16 150625.png" width="183"> | <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-15-07-20-Screenshot%202021-05-16%20150711.png" title="" alt="Screenshot 2021-05-16 150711.png" width="185"> |

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
| Độ phức tạp | `O(a*b)` <br><br>`a` là độ sâu<br>`b` là số phân nhánh                                                                                                                    | `O(a*b)` <br><br>`a` là độ sâu<br>`b` là số phân nhánh                                                                                                                    |
| Mô hình     |                                                                                                                                                                           |                                                                                                                                                                           |

### <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/16-15-19-51-icons8_flow_512px.png" title="" alt="icons8_flow_512px.png" width="35"> Giải thuật A*



---

## 3. Kết luận

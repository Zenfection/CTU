# ![AMBIENT USER EXPERIENCE.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-13-29-20-AMBIENT%20USER%20EXPERIENCE.png) Sử dụng `Shell Scripting`, quản lí tiến trình, tập tin nhật ký hệ thống ![MULTI AGENT SYSTEM.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-13-28-49-MULTI%20AGENT%20SYSTEM.png)

## <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-13-29-34-icons8-centos.png" alt="icons8-centos.png" width="40"> 1.Cài đặt CentOS

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.** Thực hiện cài đặt `CentOS 6` (*hoặc `CentOS 7`, `8`*) vào máy tính cá nhân (*hoặc máy ảo*) của bạn (*KHÔNG cần chụp màn hình minh hoạ*)

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Link file ISO [CentOS 8](https://www.centos.org/download/)

</details>

---

## <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-13-32-09-icons8-source_code.png" title="" alt="icons8-source_code.png" width="40"> 2. Quản trị với `shell scripting`

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.1**. Thực hiện các lệnh bên dưới và cho biết kết quả của chúng (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))
> 
> ```shell
> $ hostname
> $ hostname -I
> $ whoami
> $ df -H
> $ ps -eo pid,%mem,%cpu,comm --sort -rss
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

- `hostname` : Kiểm tra host hiện tại
  
  ![db0997500f9efdc0a48f.jpeg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-19-51-06-db0997500f9efdc0a48f.jpeg)

- `hostname -I` : Hiển thị tất cả địa chỉ `IPv4` mạng của host ()
  
  ![91cff89660589206cb49.jpeg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-19-51-01-91cff89660589206cb49.jpeg)

- `whoami` (*Who Am I*): hiển thị ra người dùng đang thao tác 
  
  ![c9aa14fc8c327e6c2723.jpeg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-19-51-04-c9aa14fc8c327e6c2723.jpeg)

- `df -H` : Kiểm tra thông tin tất cả ổ cứng 
  
  ![57c59f93075df503ac4c.jpeg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-19-50-56-57c59f93075df503ac4c.jpeg)

- `ps -eo pid,%mem,%cpu,comm --sort -rss | head -n 3` : *Giải thích bên dưới*
  
  ![36faeaac7262803cd973.jpeg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-19-50-50-36faeaac7262803cd973.jpeg)
  
  > 💡 Giải thích chi tiết : 
  > 
  > - `ps` (*Process Status*) : công cụ quản lí tiến trình
  > 
  > - `-eo` : Hiển thị tất cả tiến trình có chọn lọc 
  > 
  > - `pid` (*Process ID*) : Mã tiến trình
  > 
  > - `%mem,%cpu` : Sử dụng bộ nhớ và vi xử lý tiến trình (*`%`*) 
  > 
  > - `comm` : đường dẫn của tiến trình 
  > 
  > - `--sort` : sắp xếp tiến trình 
  > 
  > - `-rss` (*resident set size*) : đi chung với `vsz`, hiển thị **dung lượng bộ nhớ** được **phân bổ** cho tiến trình trong `RAM`
  > 
  > - `| head -n 3` : sử dụng **ống dẫn** (`pipe`) để hiển thị 3 dòng đầu tiên  

</details>

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.2**. Viết `shell script` có tên `info.sh` thực hiện tất cả lệnh ở `2.1` (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

- Sử dụng `gedit + <file>` để tạo file như sau : 
  
  ![e0a0ab1c42d2b08ce9c3.jpeg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-21-00-51-e0a0ab1c42d2b08ce9c3.jpeg)

- Sử dụng lệnh `bash + <file>` để thực thi file :  

  ![7113cbae2260d03e8971.jpeg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-21-00-56-7113cbae2260d03e8971.jpeg)

</details>

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.3**. Viết `shell script` có tên `backup.sh` thực hiện :
> 
> - In ra ngày giờ hiện tại
> 
> - Nén toàn bộ thư mục `/home` thành tập tin `/tmp/<YYYY-MM-DD>.tar` (*YYYY-MM-DD* là ngày hiện tại, ví dụ : 2020-04-22.tar)
> 
> - In thông tin đầy đủ của tập tin `/tpmn/<YYYY-MM-DD>.tar`
> 
> - In ra thông tin thông báo `"Sao lưu thành công!!!!"`
> 
> - Thực thi `backup.sh` để kiểm tra (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

- Sử dụng `gedit + <file>` để tạo file như sau :
  
  ![63a7056934a0c6fe9fb1.jpeg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-01-15-63a7056934a0c6fe9fb1.jpeg)

- Sử dụng lệnh `bash + <file>` để thực thi file :
  
  ![56752abb1b72e92cb063.jpeg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-01-08-56752abb1b72e92cb063.jpeg)

</details>

---

## <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-13-33-09-crontab.png" title="" alt="crontab.png" width="98">3. Lên lịch công việc định kỳ với `cron`

`Cron` là một tiện ích trong `Linux` cho phép máy tính thiết lập thời gian biểu để thực hiện công việc một cách định kỳ. Một **file**  `crontab` chứa danh sách các lệnh sẽ được thực thi, kèm theo thông tin về thời điểm lặp lại việc thực thi. Để hiệu chỉnh **file** `crontab` với trình soạn thảo `nano`, ta dùng lệnh sau : 

```shell
$ export EDITOR=nano
$ crontab -e
```

 Cho biết cú pháp để thực hiện các yêu cầu từ **file** `crontab` : 

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 3.1**. Chạy lệnh `date` mỗi phút một lần, sau đó khi kết quả vào cuối tập tin `/tmp/date.txt` (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Dùng lệnh `export EDITOR=<tên editor>`, để thay đổi trình chỉnh sửa mặc định 

![8245ae92bd5b4f05164a.jpeg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-24-20-8245ae92bd5b4f05164a.jpeg)

> 💡 Giải thích : 
> 
> `crontab -e` : chỉnh sửa file `crontab` 
> 
> `crontab -l` : xem file `crontab` 
> 
>     ![68981e4e0d87ffd9a696.jpeg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-15-23-68981e4e0d87ffd9a696.jpeg)
> 
> `crontab -r` : xoá file `crontab`

==> Sau một phút tự động sẽ cập nhật giờ trong file `/tmp/data.txt` : 

![c7ef2b2638efcab193fe.jpeg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-15-25-c7ef2b2638efcab193fe.jpeg)

![121d92d4811d73432a0c.jpeg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-15-16-121d92d4811d73432a0c.jpeg)

</details>

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 3.2**. Thực thi `backup.sh` ở `2.3` vào `23:00 giờ ngày 10,20 và 30` **hằng tháng** (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![c93589fd9a34686a3125.jpeg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-15-26-c93589fd9a34686a3125.jpeg)

==> Cứ mỗi `23h ngày 10,20,30` hằng tháng tự động sẽ thực thi file `backup.sh`

</details>

---

## <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-13-34-27-icons8-processor.png" title="" alt="icons8-processor.png" width="40"> 4. Thao tác với tiến trình

Tìm hiểu và thực hiện các yêu cầu sau : 

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 4.1**. Mở trình duyệt `Firefox`. Sau đó dùng lệnh `ps -aux` *hoặc* `pgrep` tìm **PID** của `Firefox`. 
> 
> Tiếp theo, dùng lệnh `kill` để tạm dừng tiến trình `Firefox` (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png)). Điều gì xảy ra khi bạn dịch chuyển cửa sổ `Firefox` *hoặc* nhấn chọn **menu** của nó ngay lúc này ?

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

- Sử dụng lệnh `pgrep` để tìm ID tiến trình : 
  
  ![69041d6b7ba289fcd0b3.jpeg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-47-43-69041d6b7ba289fcd0b3.jpeg)

- Sử dụng lệnh `kill -s STOP <PID>` sẽ tạm dừng tiến trình : 
  
  ![30a757c83101c35f9a10.jpeg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-47-40-30a757c83101c35f9a10.jpeg)
  
  > 💡 Ngay lập tức ta không thể thao tác được gì từ `Firefox`

</details>

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 4.2**. Dùng lệnh `kill` để phục hồi trạng thái trước đó của `Firefox` và quan sát kết quả (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sử dụng lệnh sau đây để khôi phục tiến trình vừa dùng : 

```shell
$ kill -s CONT <PID>
```

![Ảnh chụp Màn hình 2021-04-12 lúc 12.50.48.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-50-54-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202021-04-12%20lu%CC%81c%2012.50.48.png) 

> 💡 Ngay lập tức ta có thể thao tác `Firefox` lại bình thường 

</details>

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 4.3**. Dùng lệnh `kill` để huỷ tiến trình `Firefox` (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sử dụng lênh sau đây để thoát tiến trình ngay lập tức : 

```shell
$ kill -s KILL <PID>
```

![Ảnh chụp Màn hình 2021-04-12 lúc 12.52.22.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-52-30-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202021-04-12%20lu%CC%81c%2012.52.22.png)

![ef8c72e3142ae674bf3b.jpeg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-51-38-ef8c72e3142ae674bf3b.jpeg)

> 💡 Tiến trình `Firefox` ngay lập tức sẽ bị tắt đi.

</details>

---

## <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-13-35-02-icons8-file.png" alt="icons8-file.png" width="40"> 5. Tập tin log

Tìm hiểu và thực hiện yê cầu sau : 

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 5.1**. Tìm thông tin về người dùng, thời gian của lần **đăng nhập** sau cùng vào **hệ thống** (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sử dụng lệnh `last` để hiển thị thông tin nhật ký đăng nhập trên máy:

![aa6a590e2cc7de9987d6.jpeg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-59-26-aa6a590e2cc7de9987d6.jpeg)

> 💡 Nhưng ta có thể sử dụng lệnh `last` kèm theo **ống dẫn** `head -n -1` để hiển thị thời gian đăng nhập cuối cùng như sau : 
> 
> ![6c47c620b3e941b718f8.jpeg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-12-53-40-6c47c620b3e941b718f8.jpeg)

</details>

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 5.2**. Tạo một người dùng mới

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sử dụng lệnh `adduser` hoặc `useradd` để tạo người dùng mới (*dùng tài khoản root*) (*Mình tạo tên `newUser`*) 

</details>

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 5.3**. Tìm **thời gian** người dùng ở `5.2` được tạo ra (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Thông tin tạo người dùng nằm trong file `/var/log/secure`, sử dụng lệnh `cat` để in ra (*dùng tài khoản `root`*)

> 💡 Ta nên kèm theo **ống dẫn** để tìm kiếm nhanh hơn như sau : 
> 
> ![b2ad08ca7d038f5dd612.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/12-13-00-09-b2ad08ca7d038f5dd612.png)

</details>
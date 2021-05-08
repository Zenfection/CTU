# ![Group Class.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-13-07-13-Group%20Class.png)Bài Nhóm_Quản trị hệ thống ![Data Science System.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-13-07-28-Data%20Science%20System.png)

Công ty `Tam Quốc` chuyên kinh doanh Lẩu cay `Tứ Xuyên` có nhu cầu cài đặt các dịch vụ mạng phục vụ cho công việc của công ty như sau:

<img title="" src="https://lh3.googleusercontent.com/cXx6M7P8cVnjPgZolbGXkmmSGZhKSdiXc8SgdL1hF4FZYjqziVv1WFyB53CNb_ZfE9S9MrSioDZYoZLNuXKe3F4kI88uhZuuV-JNYfXfBA_ixk4_ahd6BrMbg2y329X_ctkojijV" alt="" width="548">

## 1. Cài đặt và cấu hình `server/desktop` (*80%*)

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png)**Câu 1.1**: (*10%*) Sử dụng phần mềm `VituralBox` hoặc `VMWare`
> 
> - Tạo 1 `NAT Network` tên `"QTHT"` có địa chỉ mạng là  `10.0.2.0/24`. Tắt dịch vụ `DHCP` có sẵn trên `NAT Network` `"QTHT"`
> 
> - Tạo 2 máy ảo với thông tin như sau: 
>   
>   | HostName | Hệ điều hành | CPU/Ram/Disk                                                | Network                            | IP       | Subnet mask   | Gateway  | DNS      |
>   | -------- | ------------ | ----------------------------------------------------------- | ---------------------------------- | -------- | ------------- | -------- | -------- |
>   | server   | centOS8      | 1core/2GB/10GB<br>Hoặc tuỳ chỉnh theo cấu hình máy của mình | NAT Network<br>**Name** : `"QTHT"` | 10.0.2.2 | 255.255.255.0 | 10.0.2.1 | 10.0.2.1 |
>   
>   | HostName | Hệ điều hành  | CPU/Ram/Disk                                                | Network                            | IP/Subnet mask/Gateway/DNS                         |
>   | -------- | ------------- | ----------------------------------------------------------- | ---------------------------------- | -------------------------------------------------- |
>   | desktop  | Lubuntu 20.04 | 1core/2GB/10GB<br>Hoặc tuỳ chỉnh theo cấu hình máy của mình | NAT Network<br>**Name** : `"QTHT"` | Cấu hình động sử dụng dịch vụ `DHCP` trên `server` |
>   
>   ⚠️ **Lưu ý**: Khi cài đặt hệ điều hành `Lubuntu 20.04` nên tắt `card mạng` trước khi cài. 

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.2** (*10%*) Để quản lý các bộ phận và người dùng trong công ty, hãy tạo các nhóm  người dùng (`group`) và người dùng (`user`) trên `server` như sau 
> 
> ⚠️ **Lưu ý**: chỉ có các thành viên trong ban giám đốc mới có quyền `sudo` trên `server`
> 
> | STT | Họ tên        | Nhóm       | Username     | Password    | Mô tả        |
> | --- | ------------- | ---------- | ------------ | ----------- | ------------ |
> | 1   | Lưu bị        | bangiamdoc | bi.luu       | luubi       | Giám đốc     |
> | 2   | Gia Cát Lượng | bangiamdoc | luong.giacat | giacatluong | Phó giám đốc |
> | 3   | Quan Vũ       | hanhchanh  | vu.quan      | quanvu      | Trưởng phòng |
> | 4   | Trương Phi    | hanhchanh  | phi.truong   | truongphi   | Nhân viên    |
> | 5   | Triệu Vân     | banhang    | van.trieu    | trieuvan    | Trưởng phòng |
> | 6   | Mã Siêu       | banhang    | sieu.ma      | masieu      | Nhân viên    |
> | 7   | Hoàng Trung   | banhang    | trung.hoang  | hoangtrung  | Nhân viên    |

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.3**: (*10%*) Tạo thư mục `/data` trên `server` và phân quyền sao cho thành viên của `ban giám độc` có toàn quyền (*read,write,exceute*), các trưởng phòng có quyền `read` và `excute`, các nhân viên khác không có quyền gì. Ngoài ra chỉ chủ sở hữu tập tin có quyền xoá hoặc đổi tên tập tin trong thư mục.

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.4** (*10%*) Cài đặt và cấu hình dịch vụ `DHCP` trên `server` để cấu hình mạng tự động cho các máy `desktop`
> 
> - Địa chỉ `IP` của `desktop` : trong dãy `10.0.2.50/24` đến `10.0.2.100/24`
> 
> - Địa chỉ `gateway` : `10.0.2.1`
> 
> - `DNS server` : `10.0.2.2` và `8.8.8.8`

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.5** (*10%*) Cài đặt và cấu hình tường lửa trên `server` để cho phép `desktop` : 
> 
> - Có thể trờiuy cập các dịch vụ `DNS`, `DHCP`, `SSH`, `Web`,`FTP` trên `server`. Các dịch vụ khác **KHÔNG** truy cập được
> 
> - Chỉ `desktop` có thể `ping` tới `server`, các máy khác **KHÔNG** `ping` được.

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.6**: (*10%*) Cài đặt và cấu hình dịch vụ `SSH` để cho phép điều khiển từ xa `server`
> 
> ⚠️ **Lưu ý**: chỉ có thành viên `ban giám độc` và các trưởng phòng mới có quyền điều khiển từ xa `server`

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.7** (*5%*) Cài đặt và cấu hình dịch vụ `DNS` trên `server` để phân giải tên miền `lautamquoc.com`
> 
> - Tên miền : `www.lautamquoc.com` <---> IP : `10.0.2.2` (*Server IP*)
> 
> - Tên miền : `ftp.lautamquoc.com` <---> IP : `10.0.2.2` (*Server IP*)

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.8** (*5%*) Cài đặt và cấu hình dịch vụ máy chủ `Web` trên `server`. Tạo một trang `web` có tên miền là `www.lautamquoc.com` với nội dung trang chủ giới thiệu về các thành viên trong công ty.

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.9** (*5%*) Cài đặt và cấu hình dịch vụ máy chủ `FTP` trên `server`. Cấu hình chỉ cho phép người dùng **download** dữ liệu từ thư mục `/data` trên `server`

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.10** (*5%*) Sử dụng dịch vụ `cron` và `shell script` thực hiện công việc sao lưu dữ liệu *mỗi ngày,mỗi tuần,mỗi tháng* như sau : 
> 
> +> Dữ liệu cần sao lưu : `/home`, `/data`, `/etc`
> 
> +> Nơi lưu dữ liệu cần sao lưu : `/mnt/backup`
> 
> - Sao lưu *mỗi ngày*: thực hiện vào lúc `23:59` từ thứ `2` tới thứ `7`, dữ liệu sẽ được nén với tên như sau: `backup_<thứ>` (*ví dụ: `backup_monday`*)
> 
> - Sao lưu *mỗi tuần*: thực hiện vào lúc `23:59` ngày **chủ nhật hàng tuần**, dữ liệu sẽ được nén lưu với tên như sau : `backup_week<thứ tự tuần>` (*Ví dụ: `backup_week1`*)
> 
> - Sao lưu *mỗi tháng*: thực hiện vào lúc `23:59` ngày `1` **hằng tháng**, dữ liệu sẽ được nén lưu với tên `backup_month1` nếu là tháng `lẻ`, `backup_month2` nếu là tháng `chẵn`

Giải

---

## 2. Hình thức bài báo cáo bài tập nhóm (*20%*)

Viết báo cáo trình bày các bước thực hiện công việc `1.1` đến `1.10` 

- Trình bày rõ ràng cụ thể đầy đủ **từng** bước thực hiện và có cả hình ảnh minh hoạ. Báo cáo ít lỗi chính tả, trình bày đẹp, có hình ảnh minh hoạ rõ, chi tiết, có mục lục...

- Có sự phối hợp, thảo luận, hợp tác giữa các thành viên trong nhóm để thực hiện bài tập nhóm. Có sự phân chia công việc cụ thể giữa các thành viên trong nhóm.



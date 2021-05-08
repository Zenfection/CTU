# ![NETWORK.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-06-18-NETWORK.png) Cấu hình mạng và cài đặt `SSH`,`FTP`,`Web Server` ![Legacy System.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-07-38-Legacy%20System.png)

## <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-13-29-34-icons8-centos.png" title="" alt="icons8-centos.png" width="40"> 1. Cài đặt CentOS

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.** Thực hiện cài đặt `CentOS 6` (*hoặc `CentOS 7`, `8`*) vào máy tính cá nhân (*hoặc máy ảo*) của bạn và thực hiện lệnh `ifconfig -a` để xem cấu hình mạng hiện tại của máy (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Link file ISO [CentOS 8](https://www.centos.org/download/)

![Screenshot from 2021-05-03 17-24-28.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-22-26-45-Screenshot%20from%202021-05-03%2017-24-28.png)

![Screenshot from 2021-05-03 17-24-37.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-22-27-08-Screenshot%20from%202021-05-03%2017-24-37.png)

</details>

---

## <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-12-58-icons8-wired_network.png" title="" alt="icons8-wired_network.png" width="40">2.Cấu hình mạng

Một máy tính được kết nối tới mạng cần phải được thiết lập các thông số cho phù hợp. Các thông số này được lưu lại trong file cấu hình trong `Linux`. Thực hiện các công việc sau (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.1**: Đổi cấu hình `card mạng` của máy ảo sang `Bridged Adapter`
> 
> - Khắc phục lỗi `card mạng` chỉ hiển thị `"not selected"` + `"no bridged network adapter is current selected"`. 
>   
>   Click chuột phải vào `card mạng` của máy `Window 10` ⇨ chọn `"Open NetWork and Internet Settings"`  ⇨`"Change adapter options"` ⇨ Click chuột phải vào `card mạng` ⇨ `Properties` ⇨ Click chọn `Vitural NDIS6 Bridged Networking` ⇨ Chọn `"OK"`
>   
>   <img src="https://lh5.googleusercontent.com/fG-BULssU2BjjHpdtCNQ2CJMxp2LKr556uvdybQ7FK-XwSSLjfjuRakjMgRXNCsc3_L2fbgsxC7ZSsN3fQXu0m2GG1nWxKSSAxU89mUyLqHIbPdQzv5PdoJ0jdYN_Af9jSJ7T8i8" title="" alt="" width="332">

==> Sử dụng máy thật nên không làm câu này.

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.2**: Cầu hình kết nối `Ethernet` (*IP,net mask...*)
> 
> `nano /etc/sysconfig/network-scripts/ifcfg-XXX`
> 
> (*XXX là tên giao tiếp mạng, ví dụ: `eth0`*)
> 
> ```shell
> DEVICE=<tên card mạng>
> IPADDR=<địa chỉ IP>
> NETMASK=<mặt nạ mạng>
> GATEWAY=<địa chỉ của GATEWAY>
> DNS1=<địa chỉ DNS server 1>
> DNS2=<địa chỉ DNS server 2>
> ONBOOT=yes
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

`Ethernet` đang sử dụng có device là `eno1` gõ lệnh : 

```bash
$ nano /etc/sysconfig/network-scripts/ifcfg-eno1
```

![Screenshot from 2021-05-03 17-36-52.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-22-30-54-Screenshot%20from%202021-05-03%2017-36-52.png)

> 💡 Kiến thức thêm : 
> 
> - Tìm `IP` đang sử dụng ==> Sử dụng lệnh `curl ifconfig.me`
>   
>   <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-22-32-57-Screenshot%20from%202021-05-03%2017-40-18.png" title="" alt="Screenshot from 2021-05-03 17-40-18.png" width="297">
> 
> - Tìm `Default Gateway` đang sử dụng ==> Gõ lệnh `route -n`
>   
>   ![Screenshot from 2021-05-03 17-40-39.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-22-43-12-Screenshot%20from%202021-05-03%2017-40-39.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) Câu **2.3**: Để khởi động lại dịch vụ mạng, thực hiện lệnh:
> 
> ```shell
> $ service network restart
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![Screenshot from 2021-05-03 17-42-36.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-22-27-43-Screenshot%20from%202021-05-03%2017-42-36.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.4**: Để kiểm tra kết nối mạng, sử dụng lệnh:
> 
> ```shell
> ping <IP của máy vật lý>
> ping google.com
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-03-34-Screenshot%20from%202021-05-03%2017-44-33.png" title="" alt="Screenshot from 2021-05-03 17-44-33.png" width="525">

![Screenshot from 2021-05-03 17-48-46.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-03-37-Screenshot%20from%202021-05-03%2017-48-46.png)

</details>

---

## <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-25-51-icons8-network.png" title="" alt="icons8-network.png" width="40">3.Thông tin kết nối mạng

Thực hiện lệnh `ifconfig -a` (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png)), quan sát và tìm hiểu ý nghĩa các thông tin có trong kết quả trả về. Trả lời các câu hỏi 

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 3.1**: Địa chỉ `MAC`, địa chỉ `IP`, địa chỉ mạng, địa chỉ `boardcast` của kết nối `eth0`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![Screenshot from 2021-05-03 18-37-12.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-04-09-Screenshot%20from%202021-05-03%2018-37-12.png)

<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-04-37-Screenshot%20from%202021-05-03%2018-37-32.png" title="" alt="Screenshot from 2021-05-03 18-37-32.png" width="632">

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 3.2**: Nối kết `eth0` đã gửi và nhận bao nhiêu gói tin ? 

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Do máy cá nhân sử dụng `card wifi`  nên device là `wlp1s0`

- `TX` (Transmit) : đã gửi đi `11.4MB` dữ liệu `packets`

- `RX` (Receiver) : đã nhận `367.5MB` dữ liệu `packets`

</details>

---

## <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-27-59-icons8-ssh.png" title="" alt="icons8-ssh.png" width="40">4.Điều khiển từ xa với SSH

`SSH` (*Secure Shell*) là một giao thức mạng có **mã hoá** được dùng để thực hiện các giao dịch **an toàn** giữa `client` và `server` trên nền tảng **không an toàn**. Trong thực tế, người quản trị hệ thống thường điều khiển các `server Linux` từ xa thông qua kết nối `SSH`.

Có thể chọn một thiếp lập `SSH` trong hai lựa chọn sau:

- `Vitrual Machine` (*Máy ảo*) : là máy bị điều khiển. Máy này cần được cài `SSH Server` như `OpenSSH`, và chạy dịch vụ tương ứng ở cổng nào đó (*Thông thường là cổng `22`*) để **lắng nghe** các **yêu cầu kết nối**.

- `Physical Machine` (*Máy thật*) : Là máy ra lệnh điều khiển. Đối với `Linux` hệ thống có sẵn một lệnh `ssh` để thực hiện kết nối. Đối với `Windows`, ta cần cài thêm `SSH Client` như `PuTTY` hay `Mobaxterm`.

==> Thực hiện các yêu cầu sau : 

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 4.1** Cài đặt `SSH Server` 
> 
> Thiết lập mạng và ghi lại các địa chỉ `IP`. Đảm bảo rằng bạn có thể truy cập Internet từ máy ảo : 
> 
> ```shell
> $ yum install openssh-server # cài đặt openssh
> $ service sshd start         # chạy ssh server 
> $ service sshd status        # kiểm tra ssh server chạy chưa
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-10-08-Screenshot%20from%202021-05-03%2018-44-45.png" title="" alt="Screenshot from 2021-05-03 18-44-45.png" width="442">

![Screenshot from 2021-05-03 18-45-06.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-11-40-Screenshot%20from%202021-05-03%2018-45-06.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 4.2** Cài đặt `SSH Server` trên **máy vật lý**
> 
> - Nếu sử dụng ![icons8-windows8.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-36-59-icons8-windows8.png) `Window 10` : Cài đặt [**PuTTY**](https://putty.org/), nhập các thông số và thực hiện **kết nối**
> 
> - Nếu sử dụng ![icons8-linux.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-37-07-icons8-linux.png) `Linux` : 
>   
>   ```shell
>   $ ssh <username>@<serveraddress> # kết nối ssh server
>   ```
>   
>   ==> Sử dụng lệnh `ifconfig -a` để kiểm tra và quản sát.

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Tài khoản đang sử dụng là `b19909935` và địa chỉ `server`

> 💡 Lấy địa chỉ `server` ở lệnh `ifconfig -a`
> 
> ![Screen Shot 2021-05-03 at 23.16.23.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-17-35-Screen%20Shot%202021-05-03%20at%2023.16.23.png)

![Screenshot from 2021-05-03 18-47-49.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-17-51-Screenshot%20from%202021-05-03%2018-47-49.png)

</details>

---

## <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-41-19-icons8-ftp.png" title="" alt="icons8-ftp.png" width="40"> 5. Cài đặt và cấu hình dịch vụ FTP

Thực hiện các yêu cầu sau kèm (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 5.1**: Cài đặt dịch vụ `FTP` trên máy `CentOS` bằng lệnh 
> 
> ```shell
> $ yum install vsftpd
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![Screenshot from 2021-05-03 19-14-23.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-28-30-Screenshot%20from%202021-05-03%2019-14-23.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 5.2**: Thực hiện lệnh sau cho phép người dùng kết nối vào dịch vụ `FTP`
> 
> ```bash
> $ setsebool -P ftp_home_dir on
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Nếu xảy ra lỗi `Boolean ftp_home_dir is not defined`

==> Hãy sử dụng lệnh sau đây : 

```bash
$ setsebool -P tftp_home_dir on
```

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 5.3**: Cấu hình dịch vụ `FTP` như sau : 
> 
> ```bash
> $ nano /etc/vsftpd/vsftpd.conf 
> $ anonymous_enable=NO
> $ local_enable=YES # đã được bật sẵn trong file cấu hình
> $ chroot_local_user=YES
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![Screenshot from 2021-05-03 19-18-50.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-29-46-Screenshot%20from%202021-05-03%2019-18-50.png)

![Screenshot from 2021-05-03 19-19-25.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-29-49-Screenshot%20from%202021-05-03%2019-19-25.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 5.4**: Khởi động lại dịch vụ `FTP` bằng lệnh sau : 
> 
> ```bash
> $ service vsftpd start
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sau khi chạy `vsftpd` sử dụng lệnh `service vsftpd status` để kiểm tra 

![Screenshot from 2021-05-03 19-30-50.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-32-42-Screenshot%20from%202021-05-03%2019-30-50.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 5.5**: Tắt tường lửa bằng lệnh như sau : 
> 
> ```bash
> $ service iptables stop
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Cài `iptables` bằng lệnh `yum install iptables-services`

![Screenshot from 2021-05-03 19-32-04.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-32-08-Screenshot%20from%202021-05-03%2019-32-04.png)

![Screenshot from 2021-05-03 19-32-18.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-33-43-Screenshot%20from%202021-05-03%2019-32-18.png)

> 💡 Sử dụng lệnh `service iptables status` để kiểm tra: 
> 
> ![Screenshot from 2021-05-03 20-35-25.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-35-43-Screenshot%20from%202021-05-03%2020-35-25.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 5.6**: Trên máy vật lý thực hiện tạo file `index.html` với nội dung sau : 
> 
> ```html
> <!doctype html>
> <html>
> <head>
>     <meta charset="utf-8">
>     <title>Tổng công ty bánh kẹo Lương Sơn Bạc</title>
> </head>
> 
> <body>
>     <H1>Welcome!<H1> 
>     <marquee>Designed by B1234567</marquee>
> </body>
> </html>
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sử dụng lênh `gedit` để tạo file (*thực thi ở tài khoản root*)

![Screenshot from 2021-05-03 20-34-32.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-34-46-Screenshot%20from%202021-05-03%2020-34-32.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 5.7**: Tải và thực thi một phần mềm `FTP client` (*Ví dụ:* <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-49-19-icons8-filezilla.png" title="" alt="icons8-filezilla.png" width="30"> [FileZilla](https://filezilla-project.org/) hoặc <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-49-39-WinSCP_Logo.png" title="" alt="WinSCP_Logo.png" width="30"> [WinSCP](https://winscp.net/eng/download.php) ) để kết nối đến dịch vụ `FTP` trên máy `CentOS`. Sau đó **upload file** `index.html` lên máy `CentOS`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Cài `FileZilla` bằng lệnh `yum install filezilla` 

![Screenshot from 2021-05-03 20-36-44.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-40-11-Screenshot%20from%202021-05-03%2020-36-44.png)

![Screenshot from 2021-05-03 20-38-49.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-40-47-Screenshot%20from%202021-05-03%2020-38-49.png)

![Screenshot from 2021-05-03 20-39-01.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-41-45-Screenshot%20from%202021-05-03%2020-39-01.png)

</details>

---

## <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-52-31-icons8-server.png" title="" alt="icons8-server.png" width="40"> 6. Cài đặt Apache web server

Một máy chủ `web` (*web server*) là một chương trình chờ đợi các yêu cầu truy cập tài nguyên từ một `web client` (*trình duyệt web*). Thông thường. nó sẽ lắng nghe ở cổng `80`, nhưng cũng có thể cổng **khác** (đó là lý do tại sao một số `URL` bao gồm số hiệu cổng). Để có thể sinh ra được các trang web với nội dung động, bạn cần có các chương trình hoặc các dịch vụ khác cài đặt vào máy chủ `web`. `Apache` là một trong những công nghệ máy chủ `web` phổ biến nhất, các tập tin cấu hình của `Apache` nằm trong thư mục `/etc/httpd/conf`.

Thực hiện các yêu cầu sau kèm (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 6.1**: Cài đặt `Apache web server`
> 
> ```bash
> $ yum install httpd     # cài đặt Apache
> $ service httpd start   # chạy Apache
> $ service iptables stop # tắt tường lửa
> ```
> 
> Trên **máy vật lý**, mở trình duyệt web và truy cập vào địa chỉ `http://<Địa chỉ IP CentOS>` để kiểm chứng trang web vừa tạo.

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sau khi cài đặt và chạy `httpd`, sử dụng lệnh `service httpd status` để kiểm tra : 

![Screenshot from 2021-05-03 20-41-55.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-43-12-Screenshot%20from%202021-05-03%2020-41-55.png)

> Hãy bảo đảm rằng bạn đã `tắt tường lửa` bằng lệnh sau : 
> 
> ```bash
> $ service iptables stop   #để tắt tường lửa
> $ service iptables status #kiểm tra trạng thài 
> ```

Truy cập vào `Firefox` với đường link `http://192.168.2.176`

![Screenshot from 2021-05-03 20-43-13.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-49-28-Screenshot%20from%202021-05-03%2020-43-13.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 6.2**: Nếu bạn muốn tạo một trang `web` của riêng mình, đầu tiên bạn cần phải đặt chúng vào thư mục `/var/www/html`, đây là nơi chứa các tài nguyên máy do máy chủ `web` quản lý và cho phép `web client` truy cập vào. Tạo thư mục `/var/www/html/myweb`, sao chép file `index.html` ở câu `5.7` vào thư mục `/var/www/html/myweb`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sử dụng lệnh sau để tạo thư mục `myweb` ở `/var/www/html/`

```bash
$ mkdir /var/www/html/myweb
```

Sử dủng lênh `cp` để copy file `index.html` qua `/var/www/html/myweb/`

![Screenshot from 2021-05-03 20-49-56.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-50-45-Screenshot%20from%202021-05-03%2020-49-56.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 6.3**: **Trên máy vật lý**, mở trình duyệt `web` và truy cập vào địa chỉ `http://<Địa chỉ IP máy CentOS>/myweb` để kiểm chứng trang web vừa tạo.

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Dùng `Firefox` truy cập vào đường link `http://192.168.2.176/myweb`, file `index.html` sẽ load

![Screenshot from 2021-05-03 20-50-42.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-55-04-Screenshot%20from%202021-05-03%2020-50-42.png)

</details>

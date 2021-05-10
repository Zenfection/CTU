# ![icons8-dns.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-12-46-11-icons8-dns.png)`SAMBA`, `DNS` và `Firewall` ![icons8-firewall.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-12-45-59-icons8-firewall.png)

## <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-13-29-34-icons8-centos.png" alt="icons8-centos.png" width="40"> 1. Cài đặt CentOS

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.1** Thực hiện cài đặt `CentOS 6` (*hoặc `CentOS 7`, `8`*) vào máy tính cá nhân (*hoặc máy ảo*)

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Link file ISO [CentOS 8](https://www.centos.org/download/)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.2** Cài đặt dịch vụ `Web Server` trên máy ảo. Tạo một trang web đơn giản `index.html` lưu vào thư mục `/var/www/html/myweb`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Đã làm trong bài thực hành [Buổi 4](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT179-Quan_tri_he_thong/Thuchanh/buoi4.md)

</details>

---

## <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-12-49-34-linux_windows.png" alt="linux_windows.png" width="40"> 2. Cài đặt và cấu hình `SAMBA`

`Samba` là dịch vụ chia sẻ `file` giữa các nền tảng khác nhau như `Windows` và `Linux` bằng cách sử dụng giao thức `SMB/CIFS`. 

Thực hiện các yêu cầu sau và Chụp màn hình minh hoạ![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png)

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.1**. Cài đặt dịch vụ `Samba`  bằng lệnh : 
> 
> ```bash
> $ yum install samba
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![Screenshot from 2021-05-09 11-04-12.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-18-16-Screenshot%20from%202021-05-09%2011-04-12.png)

==> Bạn có thể gõ `samba --version` để kiểm tra đã cài đặt chưa.

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.2**. Tạo người dùng và nhóm người dùng chia sẻ dữ liệu:
> 
> ```bash
> $ adduser tuanthai
> $ passwd tuanthai
> $ groupadd lecturers
> $ usermod -aG lecturers tuanthai
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![Screenshot from 2021-05-09 11-06-34.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-04-43-Screenshot%20from%202021-05-09%2011-06-34.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.3**. Tạo thư mục cần chia sẻ và phân quyền : 
> 
> ```bash
> $ mkdir /data
> $ chgrp lecturers /data
> $ chmod -R 775 /data
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![Screenshot from 2021-05-09 11-12-45.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-06-02-Screenshot%20from%202021-05-09%2011-12-45.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.4**. Cấu hình dịch vụ `SAMBA`
> 
> ```bash
> $ cp /etc/samba/smb.conf /etc/samba/smb.conf.orig
> $ nano /etc/samba/smb.conf
> ```
> 
> ```textile
> ...
> [data]
>     comment = Shared folder for lecturers
>     path = /data
>     browsable = yes
>     writable = yes
>     read only = no
>     valid users = @lecturers
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![Screenshot from 2021-05-09 11-16-49.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-06-49-Screenshot%20from%202021-05-09%2011-16-49.png)

> 💡 Giải thích chi tiết : 
> 
> - `comment` : chú thích 
> 
> - `path` : đường dẫn đến thư mục cần kết nối `Samba`
> 
> - `browsafe` : kiểm soát việc chia sẻ file có được nhìn thấy trong chế độ thực
> 
> - `writable` : Cho phép ghi file (*đảo ngược với `read only`*)
> 
> - `read only`  : Chỉ cho phép đọc (*đảo ngược với `read only`*) 
> 
> - `valid users` : người dùng có hiệu lực

==> Tham khảo cách `config` [tại đây](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.5**. Thêm người dùng cho dịch vụ `SAMBA` bằng lệnh : 
> 
> ```bash
> $ smbpasswd -a tuanthai
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![Screenshot from 2021-05-09 11-17-34.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-07-42-Screenshot%20from%202021-05-09%2011-17-34.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.6**. Cấu hình `SELINUX` cho phép `Samba`
> 
> ```bash
> $ setsebool -P samba_export_all_rw on
> $ setsebool -P samba_enable_home_dirs on
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

- `samba_export_all_rw` : cho phép xuất bất kỳ `files` hay `diretories` nào, cho phép quyền **đọc** và **ghi**

- `samba_enable_home_dirs on` : cho phép chia sẻ thư mục chính của người dùng

==> Tham khảo [tại đây](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/managing_confined_services/sect-managing_confined_services-samba-booleans)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.7**. Tắt tường lửa
> 
> ```bash
> $ service iptables stop
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![Screenshot from 2021-05-09 11-19-36.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-10-12-Screenshot%20from%202021-05-09%2011-19-36.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.8**. Khởi động lại dịch vụ `Samba` : 
> 
> ```bash
> $ service smb start
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![Screenshot from 2021-05-09 11-20-05.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-10-55-Screenshot%20from%202021-05-09%2011-20-05.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.9**. Trên máy `Windows`, bật tính năng hỗ trợ `SMB1` : 
> 
> Mở `Control Panel` ➞ `Programs` ➞ `Turn Windows feature on or off` ➞ `SMB 1.0/CIFS FIle Sharing Support` ➞ Chọn `SMB 1.0/CIFS Client`
> 
> ![Screen Shot 2021-05-07 at 13.07.25.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-13-07-32-Screen%20Shot%202021-05-07%20at%2013.07.25.png)

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Cài `CentOS` trên ổ cứng, không sử dụng máy ảo, nên không làm bước này

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.10**. Trên `File Exployer`, chọn tính năng `Add a network location` để kết nối tới `Samba server` sử dụng địa chỉ `\\<IP máy CentOS>\data`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Thực hiện các bước sau để kết nối giao thức `Samba` trên `CentOS` : 

- **B1**: Vào `Nautilus` (*hay còn gọi là Finder*) ⇨ Chọn `Other Locations` ⇨ Điền `IP` của máy chạy `Samba` ⇨ Chọn `Connect`
  
  ![Screenshot from 2021-05-09 12-03-12.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-12-52-Screenshot%20from%202021-05-09%2012-03-12.png)

- **B2**: Chọn `Registerd User` và điền *tài khoản* và *mật khẩu* đăng ký `Samba` ở trên ⇨ Chọn `Connect`
  
  <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-14-31-Screenshot%20from%202021-05-09%2012-24-39.png" title="" alt="Screenshot from 2021-05-09 12-24-39.png" width="344">

- **B3**: Bạn có thể tạo `file` (*ví dụ tạo `file1` như sau*)
  
  ![Screenshot from 2021-05-09 12-19-10.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-16-48-Screenshot%20from%202021-05-09%2012-19-10.png)
  
  > 💡 Vào máy kết nối `Samba` kiểm tra như sau : 
  > 
  > ![Screenshot from 2021-05-09 12-19-36.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-17-11-Screenshot%20from%202021-05-09%2012-19-36.png)
  > 
  > ==> Như đã thấy `file1` đã xuất hiện

</details>

---

## <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-12-49-54-icons8-dns.png" alt="icons8-dns.png" width="40"> 3. Cài đặt và cấu hình dịch vụ `DNS`

`DNS` (*Domain Name System*) là giải pháp dùng tên miền thay cho địa chỉ `IP` khó nhớ khi sử dụng các dịch vụ mạng. Truy cập đến `website` của `Khoa CNTT-ĐH Cần Thơ` bằng địa chỉ nào dễ hơn ?

| http://203.162.36.146 | http://cit.ctu.edu.vn |
| --------------------- | --------------------- |

Bạn cần phải cài đặt phần mềm `BIND` trên `CentOS` để phân giải tên miền `qtht.com.vn`

Thực hiện các yêu cầu sau và Chụp màn hình minh hoạ![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png)

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 3.1**. Cài đặt `BIND` và các công cụ cần thiết :
> 
> ```bash
> $ yum install bind bind-utils
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![Screenshot from 2021-05-09 12-33-54.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-04-46-Screenshot%20from%202021-05-09%2012-33-54.png)

==> Bạn có thể gõ `named -v` để kiểm tra `bind-utils` đã cài chưa.

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 3.2**. Cài hình `DNS server` : 
> 
> ```bash
> $ nano /etc/named.conf 
> ```
> 
> > ```textile
> > ...
> > option {
> >     listen-on port 53 { 127.0.0.1; any;};
> >     ...
> >     allow-query    { localhost; any;};
> >     recursion yes;
> >     ...
> > };
> > 
> > loggin {
> >     ...
> >     };
> > };
> > 
> > zone "." IN {
> >     ...
> > };
> > 
> > zone "<tên miền>" IN {
> >     type master;
> >     file "forward.qtht";
> >     allow-update { none; };
> > };
> > 
> > zone "<24bit mạng đảo chiều>.in-addr.arpa" IN {
> >     type master;
> >     file "reverse.qtht";
> >     allow-update { none; };
> > };
> > ...
> > ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![Screenshot from 2021-05-09 12-36-20.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-10-02-Screenshot%20from%202021-05-09%2012-36-20.png)

![Screenshot from 2021-05-09 13-17-02.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-28-17-Screenshot%20from%202021-05-09%2013-17-02.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 3.3**. Tạo tập tin cấu hình phân giải xuôi:
> 
> ```bash
> $ cp /var/named/named.localhost /var/named/forward.qtht
> $ chgrp named /var/named/forward.qtht
> $ nano /var/named/forward.qtht
> ```
> 
> > ```textile
> > $TTL 1D
> > @   IN  SOA @ <tên miền>. (
> > 0     ;Serial
> > 1D    ;Refresh
> > 1H    ;Retry
> > 1W    ;Expire
> > 3H    ;Minimum TTL
> > )
> > @    IN    NS    dns.qtht.com.vn.
> > dns  IN    A    <IP máy>
> > www  IN    A    <IP máy>
> > htql IN    A    8.8.8.8
> > ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![Screenshot from 2021-05-09 08-35-44.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-26-57-Screenshot%20from%202021-05-09%2008-35-44.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 3.4**. Tạo tập tin cấu hình phân giải ngược :
> 
> ```bash
> $ cp /var/named/forward.qtht /var/named/reverse.qtht
> $ chgrp named /var/named/reverse.qtht
> $ nano /var/named/reverse.qtht
> ```
> 
> > ```textile
> > $TTL 1D
> > @   IN  SOA @ qtht.com.vn. (
> > 0    ;Serial
> > 1D    ;Refresh
> > 1H    ;Retry
> > 1W    ;Expire
> > 3H    ;Minimum TTL
> > )
> > @    IN   NS   dns.qtht.com.vn.
> > dns  IN   A    <IP máy>
> > 245  IN   PTR  www.qtht.com.vn.
> > ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![Screenshot from 2021-05-09 08-36-00.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-38-46-Screenshot%20from%202021-05-09%2008-36-00.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 3.5**. Tắt tường lửa 
> 
> ```bash
> $ service iptables stop
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![Screenshot from 2021-05-09 11-19-36.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-10-12-Screenshot%20from%202021-05-09%2011-19-36.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 3.6**. Khởi động dịch vụ `DNS`
> 
> ```bash
> $ service named start
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![Screenshot from 2021-05-09 13-09-56.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-40-08-Screenshot%20from%202021-05-09%2013-09-56.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 3.7**. Kiểm tra kết quả 
> 
> ```bash
> $ nslookip www.qtht.com.vn <địa chỉ IP máy>
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

- Phân giải xuôi 
  
  ![Screenshot from 2021-05-09 08-38-46.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-40-53-Screenshot%20from%202021-05-09%2008-38-46.png)

- Phân giải ngược
  
  ![Screenshot from 2021-05-09 08-38-37.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-41-47-Screenshot%20from%202021-05-09%2008-38-37.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 3.8**. Trên máy vật lý, cấu hình `DNS Server` là `IP` của máy ảo `CentOS`. Sau đó mở trình duyệt `web` và truy cập vào địa chỉ `http://www.qtht.com.vn/myweb`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![Screenshot from 2021-05-09 08-33-53.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-42-52-Screenshot%20from%202021-05-09%2008-33-53.png)

> 💡 Cũng có thể dùng điện thoại để kết nối (*Yêu cầu xài chung `Wifi` và thiết lập `DNS custom`* )
> 
> <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-47-58-a4d2f03b003ff561ac2e.png" alt="a4d2f03b003ff561ac2e.png" width="293"><img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-48-19-8f08fed60ed2fb8ca2c3.png" alt="8f08fed60ed2fb8ca2c3.png" width="293">

</details>

---

## <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-12-50-15-icons8-firewall.png" alt="icons8-firewall.png" width="40"> 4. Cấu hình tường lửa `iptables`

`iptables` là một bộ công cụ được tích hợp trên hệ điều hành `Linux` để thực hiện chức năng tường lửa theo cơ chế lọc gói tin (`package filtering`). `Iptables` theo dõi lưu lượng mạng **đến** và **đi** của một máy tính và lọc nó dựa trên các luật (`rules`) do người dùng tự định nghĩa trước đó.

Thực hiện các yêu cầu sau và Chụp màn hình minh hoạ![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png)

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 4.1**. Thực thi tường lửa
> 
> ```bash
> $ service iptables start
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![Screenshot from 2021-05-09 09-13-04.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-55-08-Screenshot%20from%202021-05-09%2009-13-04.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 4.2**. Hiển thị các `rules` hiện có trên `iptables`
> 
> ```bash
> $ iptables -v -L --line-numbers
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![Screenshot from 2021-05-09 09-18-28.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-56-01-Screenshot%20from%202021-05-09%2009-18-28.png)

> 💡 Giải thích cụ thể : 
> 
> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-57-56-iptables_filter.png" title="" alt="iptables_filter.png" width="525">
> 
> | Giải thích | INPUT                                                 | FORWARD                                                              | OUTPUT                                                  |
> | ---------- | ----------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------- |
> | Trừu tượng | Kiểm soát các gói đến từ `route` đến `server` của bạn | Kiểm soát các gói bắt nguồn từ `server` của bạn đến `nhà mạng`       | Kiểm soát các gói được chuyển tiếp bởi `server` của bạn |
> | Dễ hiểu    | Lọc các gói dành cho `server` củ bạn                  | Lọc các gói đến `server` của bạn mà `card wifi` khác có thể truy cập | Lọc các gói có nguồn gốc từ `server` của bạn            |

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 4.3**. Tạo `rules` cho phép các máy khác truy cập tới dịch vụ `Web` trên `server`
> 
> ```bash
> $ iptables -A INPUT -p tcp --dport 80 -j ACCEPT
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Tham khảo cách dùng `iptables` căn bản [tại đây](https://hocvps.com/iptables/) 

- **Trước** khi cho máy khác truy cập với dịch vụ `Web Server` : 
  
  <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-22-49-33363b9e5d9fa8c1f18e.png" alt="33363b9e5d9fa8c1f18e.png" width="229">

- **Sau** khi cho máy khác truy cập tới dịch vụ `Web Server` bằng lệnh trên : 
  
  ![Screenshot from 2021-05-09 09-50-53.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-24-12-Screenshot%20from%202021-05-09%2009-50-53.png)
  
  <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-47-58-a4d2f03b003ff561ac2e.png" alt="a4d2f03b003ff561ac2e.png" width="227">

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 4.4**. Tạo `rules` để cho máy vật lý có thể `ping` tới `server`, các máy khác **KHÔNG** `ping` được
> 
> ```bash
> $ iptables -I INPUT 2 -p icmp -s <IP cho phép> -j ACCEPT
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sử dụng <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-26-32-1406098-200.png" title="" alt="1406098-200.png" width="35"> [Termux](https://termux.com/) của `Android` để thao tác các lệnh 

> 🤔 `Android` đang sử dụng chung mạng `Wifi` của máy dùng `iptables` và có IP như sau : `192.168.10.101` (*riêng máy này thôi !*)

- Trước khi thiết lập `rules` chặn `ping`  :
  
  - ![icons8-android.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-31-23-icons8-android.png)`Android` sử dụng `ping`
    
    ![bd39e9ee27ead2b48bfb.jpeg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-29-10-bd39e9ee27ead2b48bfb.jpeg)
  
  - ![icons8-centos.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-31-36-icons8-centos.png) `CentOS` sử dụng `ping` 
    
    ![Screenshot from 2021-05-09 09-54-50.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-30-42-Screenshot%20from%202021-05-09%2009-54-50.png)
  
  ==> Cả hai vẫn `ping` được

- **Sau** khi thiết lập `rules` chặn `ping` bằng lệnh trên : 
  
  ![Screenshot from 2021-05-09 09-58-15.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-35-55-Screenshot%20from%202021-05-09%2009-58-15.png)
  
  >  🤔 `qtht.com.vn` tương đương `192.168.10.135` vì đã cấu hình `DNS` bên trên
  
  - ![icons8androidpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-31-23-icons8-android.png)`Android` sử dụng `ping`
    
    ![3924f2fe3cfac9a490eb.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-34-38-3924f2fe3cfac9a490eb.png)
  
  - ![icons8centospng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-31-36-icons8-centos.png) `CentOS` sử dụng `ping`
    
    ![Screenshot from 2021-05-09 09-54-50.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-30-42-Screenshot%20from%202021-05-09%2009-54-50.png)

         ==> Sau khi thiết lập `rules` chỉ có máy có `IP:192.168.10.135` là `ping` được đến `server`. 

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 4.5**. Tạo `rules` để **KHÔNG** cho người dùng trên máy `CentOS` truy cập tới địa chỉ `facebook.com`
> 
> ```bash
> $ iptables -A OUTPUT -p tcp -m string --string facebook --algo kmp -j REJECT
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sử dụng lệnh trên để gửi gói truy cập đến `server` của `Facebook` : 

![Screenshot from 2021-05-09 10-13-39.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-10-32-04-Screenshot%20from%202021-05-09%2010-13-39.png)

==> Sau khi đã áp dụng `rules` thì chúng ta không thể truy cập `facebook` được nữa : 

![Screenshot from 2021-05-09 10-16-54.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-10-34-18-Screenshot%20from%202021-05-09%2010-16-54.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 4.6**. Lưu và phục hồi các `rules` của `iptables`
> 
> ```bash
> $ cp /etc/sysconfig/iptables /etc/sysconfig/iptables.orig
> $ iptables-save > /etc/sysconfig/iptables
> $ iptables-restore < /etc/sysconfig/iptables
> ```

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Trước khi tắt `iptables`, ta nên **sao lưu** (*backup*) lại `rules` bằng lệnh : 

```bash
$ iptables-save > /etc/sysconfig/iptables
```

> 🤔 Vì sau khi **tắt** `iptables` và **khởi động** lại, các `rules` thiết lập trước đó sẽ reset như sau : 
> 
> ![Screenshot from 2021-05-09 10-20-30.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-10-37-00-Screenshot%20from%202021-05-09%2010-20-30.png)

==> Khi đó ta có thể **khôi phục** (*restore*) lại `rules` đã **sao lưu** (*backup*) bằng lệnh sau:

```bash
$ iptables-restore < /etc/sysconfig/iptables
```

> 🧚 Kết quả như sau : 
> 
> ![Screenshot from 2021-05-09 10-20-59.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-10-39-11-Screenshot%20from%202021-05-09%2010-20-59.png)
> 
> (*Vì mình đã xoá `rules` chặn `facebook` trước đó nên không còn ở OUTPUT nữa*)

</details>
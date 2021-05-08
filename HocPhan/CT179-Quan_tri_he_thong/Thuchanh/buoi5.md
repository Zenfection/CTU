# ![icons8-dns.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-12-46-11-icons8-dns.png)`SAMBA`, `DNS` và `Firewall` ![icons8-firewall.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-12-45-59-icons8-firewall.png)

## <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/11-13-29-34-icons8-centos.png" alt="icons8-centos.png" width="40"> 1. Cài đặt CentOS

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.1** Thực hiện cài đặt `CentOS 6` (*hoặc `CentOS 7`, `8`*) vào máy tính cá nhân (*hoặc máy ảo*)

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.2** Cài đặt dịch vụ `Web Server` trên máy ảo. Tạo một trang web đơn giản `index.html` lưu vào thư mục `/var/www/html/myweb`

Giải

---

## <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-12-49-34-linux_windows.png" alt="linux_windows.png" width="40"> 2. Cài đặt và cấu hình `SAMBA`

`Samba` là dịch vụ chia sẻ `file` giữa các nền tảng khác nhau như `Windows` và `Linux` bằng cách sử dụng giao thức `SMB/CIFS`. 

Thực hiện các yêu cầu sau và Chụp màn hình minh hoạ![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png)

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.1**. Cài đặt dịch vụ `Samba`  bằng lệnh : 
> 
> ```bash
> $ yum install samba
> ```

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.2**. Tạo người dùng và nhóm người dùng chia sẻ dữ liệu:
> 
> ```bash
> $ adduser tuanthai
> $ passwd tuanthai
> $ groupadd lecturers
> $ usermod -aG lecturers tuanthai
> ```

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.3**. Tạo thư mục cần chia sẻ và phân quyền : 
> 
> ```bash
> $ mkdir /data
> $ chgrp lecturers
> $ chmod -R 775 /data
> ```

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.4**. Cấu hình dịch vụ `SAMBA`
> 
> ```bash
> $ cp /etc/samba/smb.conf /etc/samba/smb.conf.orig
> nano /etc/samba/smb.conf
> ```
> 
> ```textile
> ...
> [data]
>     comment = Shared folder for lecturers
> 	path = /data
>     browsable = yes
> 	writable = yes
> 	read only = no
> 	valid users = @lecturers
> ```

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.5**. Thêm người dùng cho dịch vụ `SAMBA` bằng lệnh : 
> 
> ```bash
> $ smbpasswd -a tuanthai
> ```

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.6**. Cấu hình `SELINUX` cho phép S`Samba`
> 
> ```bash
> $ setsebool -P samba_export_all_rw on
> $ setsebool -P samba_enable_home_dirs on
> ```

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.7**. Tắt tường lửa
> 
> ```bash
> $ service iptables stop
> ```

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.8**. Khởi động lại dịch vụ `Samba` : 
> 
> ```bash
> $ service smb start
> ```

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.9**. Trên máy `Windows`, bật tính năng hỗ trợ `SMB1` : 
> 
> Mở `Control Panel` ➞ `Programs` ➞ `Turn Windows feature on or off` ➞ `SMB 1.0/CIFS FIle Sharing Support` ➞ Chọn `SMB 1.0/CIFS Client`
> 
> ![Screen Shot 2021-05-07 at 13.07.25.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-13-07-32-Screen%20Shot%202021-05-07%20at%2013.07.25.png)

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 2.10**. Trên `File Exployer`, chọn tính năng `Add a network location` để kết nối tới `Samba server` sử dụng địa chỉ `\\<IP máy CentOS>\data`

Giải

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

Giải

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
> > zone "qtht.com.vn" IN {
> > 	type master;
> > 	file "forward.qtht";
> > 	allow-update { none; };
> > };
> > 
> > zone "33.30.172.in-addr.arpa" IN {
> > 	type master;
> > 	file "reverse.qtht";
> > 	allow-update { none; };
> > };
> > ...
> > ```

Giải

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
> > @   IN  SOA @ qtht.com.vn. (
> > 0	;Serial
> > 1D	;Refresh
> > 1H	;Retry
> > 1W	;Expire
> > 3H	;Minimum TTL
> > )
> > @	IN	NS	dns.qtht.com.vn.
> > dns	IN	A	172.30.33.245
> > www	IN  	A	172.30.33.245
> > htql	IN	A	8.8.8.8
> > ```

Giải

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
> > 0	;Serial
> > 1D	;Refresh
> > 1H	;Retry
> > 1W	;Expire
> > 3H	;Minimum TTL
> > )
> > @	IN	NS	dns.qtht.com.vn.
> > dns	IN	A	172.30.33.245
> > 245	IN  	PTR	www.qtht.com.vn.
> > ```

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 3.5**. Tắt tường lửa 
> 
> ```bash
> $ service iptables stop
> ```

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 3.6**. Khởi động dịch vụ `DNS`
> 
> ```bash
> $ service named start
> ```

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 3.7**. Kiểm tra kết quả 
> 
> ```bash
> $ nslookip www.qtht.com.vn <địa chỉ IP máy>
> ```

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 3.8**. Trên máy vật lý, cấu hình `DNS Server` là `IP` của máy ảo `CentOS`. Sau đó mở trình duyệt `web` và truy cập vào địa chỉ `http://www.qtht.com.vn/myweb`

Giải

---

## <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-12-50-15-icons8-firewall.png" alt="icons8-firewall.png" width="40"> 4. Cấu hình tường lửa `iptables`

`iptables` là một bộ công cụ được tích hợp trên hệ điều hành `Linux` để thực hiện chức năng tường lửa theo cơ chế lọc gói tin (`package filtering`). `Iptables` theo dõi lưu lượng mạng **đến** và **đi** của một máy tính và lọc nó dựa trên các luật (`rules`) do người dùng tự định nghĩa trước đó.

Thực hiện các yêu cầu sau và Chụp màn hình minh hoạ![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png)

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 4.1**. Thực thi tường lửa
> 
> ```bash
> $ service iptables start
> ```

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 4.2**. Hiển thị các `rules` hiện có trên `iptables`
> 
> ```bash
> $ iptables -v -L --line-numbers
> ```

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 4.3**. Tạo `rules` cho phép các máy khác truy cập tới dịch vụ `Web` trên `server`
> 
> ```bash
> $ iptables -A INPUT -p tcp --dport 80 -j ACCEPT
> $ iptables -D INPUT 6
> $ iptables -I INPUT 5 -p tcp --dport 80 -j ACCEPT
> ```

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 4.4**. Tạo `rules` để cho máy vật lý có thể `ping` tới `server`, các máy khác **KHÔNG** `ping` được
> 
> ```bash
> $ iptables -D INPUT 2
> $ iptables -I INPUT 2 -p icmp -s 172.30.33.96 -j ACCEPT
> ```

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 4.5**. Tạo `rules` để **KHÔNG** cho người dùng trên máy `CentOS` truy cập tới địa chỉ `facebook.com`
> 
> ```bash
> iptables -A OUTPUT -p tcp -m string --string facebook --algo kmp -j REJECT
> ```

Giải

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 4.6**. Lưu và phục hồi các `rules` của `iptables`
> 
> ```bash
> $ cp /etc/sysconfig/iptables /etc/sysconfig/iptables.orig
> $ iptables-save > /etc/sysconfig/iptables
> $ iptables-restore < /etc/sysconfig/iptables
> ```

Giải



# ![Group Class.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-13-07-13-Group%20Class.png)Bài Nhóm_Quản trị hệ thống ![Data Science System.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-13-07-28-Data%20Science%20System.png)

Công ty `Tam Quốc` chuyên kinh doanh Lẩu cay `Tứ Xuyên` có nhu cầu cài đặt các dịch vụ mạng phục vụ cho công việc của công ty như sau:

<img title="" src="https://lh3.googleusercontent.com/cXx6M7P8cVnjPgZolbGXkmmSGZhKSdiXc8SgdL1hF4FZYjqziVv1WFyB53CNb_ZfE9S9MrSioDZYoZLNuXKe3F4kI88uhZuuV-JNYfXfBA_ixk4_ahd6BrMbg2y329X_ctkojijV" alt="" width="548">

## I. Cài đặt và cấu hình `server/desktop` (*80%*)

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

| Phần mềm                                                                                                                                                                                                            | Nhà sản xuất  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/23-23-00-55-Virtualbox_logo.png" title="" alt="Virtualbox_logo.png" width="40"> [VituralBox](https://www.virtualbox.org/wiki/Downloads) | Oracle        |
| <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/23-23-01-54-icons8-centos.png" title="" alt="icons8-centos.png" width="40"> [CentOS](https://www.centos.org/download/)                  | RedHat        |
| <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/23-23-02-51-Lubuntu_logo_only.svg" title="" alt="Lubuntu_logo_only.svg" width="40"> [Lubuntu](https://lubuntu.net/downloads/)           | Mario Behling |

### Tắt dịch vụ `DHCP Server`

- **B1:** `File` -> `Host Network Manager`
  
  ![Screen Shot 2021-05-24 at 10.46.15.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-10-46-46-Screen%20Shot%202021-05-24%20at%2010.46.15.png)

- **B2:** Tắt `DHCP Server` như sau (*1 trong 2 cách*)
  
  ![Screen Shot 2021-05-24 at 10.40.57.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-10-47-34-Screen%20Shot%202021-05-24%20at%2010.40.57.png)

### Cài và cấu hình cho CentOS 8 <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/23-23-01-54-icons8-centos.png" title="" alt="icons8-centos.png" width="35">

#### 1. Thực hiện cài `CentOS 8` lên `VituralBox` (Cài bản không `GUI`) :

> 💡 Cài đặt `VituralBox` và tiến hành cài `CentOS 8` (*chọn bản không `GUI`*)
> 
> ![Screen Shot 2021-05-24 at 20.52.30.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-21-18-10-Screen%20Shot%202021-05-24%20at%2020.52.30.png)

#### 2. Cài đặt `NAT Network`

> - **B1**: Chọn `VituralBox` -> `Preferences`
>   
>   ![Screen Shot 2021-05-24 at 10.41.17.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-10-48-37-Screen%20Shot%202021-05-24%20at%2010.41.17.png)
> 
> - **B2**: Qua cửa sổ `Network` và nhấn nút tạo `NAT Network`
>   
>   ![Screen Shot 2021-05-24 at 10.41.32.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-10-49-36-Screen%20Shot%202021-05-24%20at%2010.41.32.png)
> 
> - **B3**: Cấu hình `NAT Network` như sau và nhấn `OK`
>   
>   ![Screen Shot 2021-05-24 at 10.41.50.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-10-51-29-Screen%20Shot%202021-05-24%20at%2010.41.50.png)

#### 3. Chuyển đổi `network` của máy ảo `CentOS 8` qua `NAT Network`

> - **B1**: Chọn `setting` máy ảo `CentOS 8` trong `VituralBox` 
> 
> - **B2:** Chọn `Network`, đổi sang `NAT Network` và chọn `QTHT` như đã cấu hình trước đó 
>   
>   ![Screen Shot 2021-05-24 at 10.42.02.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-10-52-13-Screen%20Shot%202021-05-24%20at%2010.42.02.png)

#### 4. Kiểm tra cấu hình mạng trong `CentOS 8`

> - **B1:** Kiểm tra đã cài đặt `network-scripts` chưa, nếu chưa gõ lệnh : 
>   
>   ```bash
>   $ yum install network-scripts
>   ```
>   
>   ![Screenshot 2021-05-22 223917.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/23-23-18-35-Screenshot%202021-05-22%20223917.png)
> 
> - **B2**: Gõ `ipconfig -a` kiểm tra : 
>   
>   ![Screenshot 2021-05-22 222747.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/23-23-19-25-Screenshot%202021-05-22%20222747.png)
>   
>   Xác định `device network` đang sử dụng là `enp0s3`, gõ lệnh dưới đây để cấu hình `network` (*dùng tài khoản `root`*) : 
>   
>   ```bash
>   $ nano /etc/sysconfig/network-scripts/ifcfg-enp0s3
>   ```
>   
>   ![Screenshot 2021-05-22 223538.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/23-23-20-23-Screenshot%202021-05-22%20223538.png)
>   
>   Hoặc cũng có thể sử dụng lệnh `mntui` để cấu hình giao diện như sau : 
>   
>   ![Screenshot 2021-05-23 100531.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/23-23-21-20-Screenshot%202021-05-23%20100531.png)
> 
> - **B3**: Gõ lệnh `service network restart` để khởi động lại `network` : 
>   
>   ![Screenshot 2021-05-22 224123.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/23-23-22-47-Screenshot%202021-05-22%20224123.png)
> 
> - **B4**: Dùng lệnh `ifconfig -a` để kiểm tra sau khi cấu hình : 
>   
>   ![Screenshot 2021-05-23 100934.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/23-23-33-19-Screenshot%202021-05-23%20100934.png)
> 
> - **B5**: Thực hiện lệnh `ping google.com` để kiểm tra mạng có truy cập được không 
>   
>   ![Screen Shot 2021-05-24 at 11.17.38.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-11-17-44-Screen%20Shot%202021-05-24%20at%2011.17.38.png)
> 
> ==> Vậy là ta đã thoả yêu cầu cấu hình mạng cho máy ảo `CentOS 8`

### Cài và cấu hình Lubuntu <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/23-23-02-51-Lubuntu_logo_only.svg" title="" alt="Lubuntu_logo_only.svg" width="35">

#### 1. Thực hiện cài `Lubuntu 20.04` lên `VituralBox`

> 💡 Sau khi cài đặt `Lubuntu 20.04` tiến hành vào `Qterminal` 
> 
> ![Screen Shot 2021-05-24 at 11.01.43.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-11-02-12-Screen%20Shot%202021-05-24%20at%2011.01.43.png)

#### 2. Cấu hình network cho `Lubuntu`

> - **B1**: Chọn `setting` máy ảo `Lubuntu` trong `VituralBox`
> 
> - **B2:** Chọn `Network`, đổi sang `NAT Network` như sau : 
>   
>   ![Screen Shot 2021-05-24 at 20.28.45.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-20-31-34-Screen%20Shot%202021-05-24%20at%2020.28.45.png)

#### 3. Kiểm tra network trong `Lubuntu`

> - **B1**: Thực hiện lệnh `ifconfig -a` để kiểm tra cấu hình mạng : 
>   
>   ![Screen Shot 2021-05-24 at 11.07.57.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-11-09-00-Screen%20Shot%202021-05-24%20at%2011.07.57.png)
> 
> - **B2**: Thực hiện lệnh `ping google.com` để kiểm tra mạng có truy cập được không 
>   
>   ![Screen Shot 2021-05-24 at 11.11.41.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-11-12-55-Screen%20Shot%202021-05-24%20at%2011.11.41.png)
> 
> ==> Như vậy là thoả

---

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

### Thực hiện tạo `user` và `group` theo yêu cầu :

#### 1. Tạo Group

> - **B1**: Thực hiện các lệnh sau :
>   
>   ```bash
>   # Lệnh tạo 3 nhóm ban giám đốc, hành chánh, ban hang
>   $ groupadd bangiamdoc
>   $ groupadd hanhchanh
>   $ groupadd banhang
>   ```
> 
> - **B2**: Thực hiện lệnh `cat /etc/group` để kiểm tra :
>   
>   ![Screenshot 2021-05-22 233744.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-11-25-44-Screenshot%202021-05-22%20233744.png)

#### 2. Tạo các user

> - **B1**: Thực hiện các lệnh sau : 
>   
>   ```bash
>   # Tạo các người dùng và mật khẩu theo yêu cầu
>   $ useradd -m bi.luu -p luubi
>   $ useradd -m luong.giacat -p giacatluong
>   $ useradd -m vu.quan -p quanvu
>   $ useradd -m phi.truong -p truongphi
>   $ useradd -m van.trieu -p trieuvan
>   $ useradd -m sieu.ma -p masieu
>   $ useradd -m trung.hoang -p hoangtrung
>   ```
> 
> - **B2**: Gõ lệnh `cat /etc/passwd` để kiểm tra 
>   
>   ![Screenshot 2021-05-22 234121.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-11-29-56-Screenshot%202021-05-22%20234121.png)

#### 3. Nhập user vào group phù hợp

> - **B1**: Thực hiện các lệnh sau : 
> 
> - ```bash
>   # Nhập lưu bị và gia cát lượng vào ban giám độc
>   $ usermod -a -G bangiamdoc bi.luu
>   $ usermod -a -G bangiamdoc luong.giacat
>   # Nhập quan vũ và phi trường vào hành chánh
>   $ usermod -a -G hanhchanh vu.quan
>   $ usermod -a -G hanhchanh phi.truong
>   # Nhập trương phi, triệu vân, mã siêu vào bán hàng
>   $ usermod -a -G banhang phi.truong
>   $ usermod -a -G banhang sieu.ma 
>   ```
> 
> - Gõ lệnh `cat /etc/groups` để kiểm tra 
>   
>   ![Screen Shot 2021-05-24 at 11.33.59.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-11-34-22-Screen%20Shot%202021-05-24%20at%2011.33.59.png)

#### 4. Cấp quyền `root` cho nhóm `ban giám đốc`

> - **B1**: Thực hiện lệnh `nano /etc/sudoers` (*ở tài khoản `root`*), và cấu hình như sau : 
>   
>   ![Screenshot 2021-05-22 235237.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-11-38-00-Screenshot%202021-05-22%20235237.png)
> 
> - **B2**: Hãy thực hiện các lệnh sau để kiểm tra 
>   
>   ```bash
>   # Đổi qua tài khoản bi.luu vì nó nằm trong group bangiamdoc
>   $ su bi.luu
>   # gõ câu lệnh kiểm tra thử quyền tài khoản root
>   $ sudo nano /etc/shadow
>   ```
>   
>   ![Screen Shot 2021-05-24 at 11.46.56.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-11-47-16-Screen%20Shot%202021-05-24%20at%2011.46.56.png)

---

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.3**: (*10%*) Tạo thư mục `/data` trên `server` và phân quyền sao cho thành viên của `ban giám đốc` có toàn quyền (*read,write,exceute*), các trưởng phòng có quyền `read` và `excute`, các nhân viên khác không có quyền gì. Ngoài ra chỉ chủ sở hữu tập tin có quyền xoá hoặc đổi tên tập tin trong thư mục.

Giải

### Thực hiện tạo `/data` và phân quyền

#### 1. Tạo thư mục `/data` và đổi `group` sở hữu

> - **B1:** Tạo group `truongphong` và thêm `luubi` và `trieuvan` vào : 
>   
>   ```bash
>   $ groupadd truongphong
>   $ usermod -a -G truongphong bi.luu
>   $ usermod -a -G truongphong trieu.van
>   ```
> 
> - **B2**: Sử dụng lệnh lần lượt các lệnh dưới đây :
>   
>   ```bash
>   $ su                         # đổi qua tài khoản root
>   $ mkdir /data                # tạo thư mục /data
>   $ chgrp truongphong /data    # đổi chủ nhóm sở hữu
>   $ chmod 750 /data            # cấp quyền cho thư mục /data
>   ```
> 
> - **B3**: Sử dụng lệnh `ls -l /data` để kiểm tra : 
>   
>   ![Screen Shot 2021-05-24 at 12.39.57.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-12-45-44-Screen%20Shot%202021-05-24%20at%2012.39.57.png)

### 2. Kiểm tra phân quyền

- **B1:** Tạo file `123.txt` bằng lệnh `nano /data/123.txt` như sau : 

![Screen Shot 2021-05-24 at 12.47.18.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-12-53-16-Screen%20Shot%202021-05-24%20at%2012.47.18.png)

- **B2**:  Phân quyền như sau : 
  
  ```bash
  $ chgrp truongphong /data/123.txt
  $ chmod 750 /data/123.txt
  ```

- **B3**: Thực hiện lệnh `ls -l /data/` để kiểm tra 
  
  ![Screen Shot 2021-05-24 at 13.14.12.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-13-19-16-Screen%20Shot%202021-05-24%20at%2013.14.12.png)

#### Thực hiện kiểm tra

> - **B1:** Kiểm tra người trong nhóm `bangiamdoc` có quyền `read/write/execute`
>   
>   ```bash
>   $ su bi.luu                #vì lưu bị trong nhóm bangiamdoc
>   $ sudo nano /data/123.txt  #kiểm tra
>   ```
>   
>   ==> Thử ghi và `save` lại, nếu thành công là được : 
>   
>   ![Screen Shot 2021-05-24 at 12.50.48.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-12-55-32-Screen%20Shot%202021-05-24%20at%2012.50.48.png)
> 
> - **B2**: Kiểm tra người trong nhóm `truongphong` có quyền `read/execute`
>   
>   ```bash
>   $ su vu.quan              #vì quan vũ trong nhóm trưởng phòng
>   $ sudo nano /data/123.txt #kiểm tra
>   ```
>   
>   ![Screen Shot 2021-05-24 at 13.16.47.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-13-24-39-Screen%20Shot%202021-05-24%20at%2013.16.47.png)
>   
>   ==> Như vậy thành viên trong `truongphong` không thể **write**
> 
> - **B3**: Kiểm tra **nhân viên** không có quyền gì 
>   
>   ```bash
>   $ su sieu.ma # vì mã siêu là nhân viên
>   $ cat /data/123.txt
>   ```
>   
>   ![Screen Shot 2021-05-24 at 13.23.27.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-13-25-34-Screen%20Shot%202021-05-24%20at%2013.23.27.png)

---

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.4** (*10%*) Cài đặt và cấu hình dịch vụ `DHCP` trên `server` để cấu hình mạng tự động cho các máy `desktop`
> 
> - Địa chỉ `IP` của `desktop` : trong dãy `10.0.2.50/24` đến `10.0.2.100/24`
> 
> - Địa chỉ `gateway` : `10.0.2.1`
> 
> - `DNS server` : `10.0.2.2` và `8.8.8.8`

Giải

### Cài đặt và cấu hình `DHCP Server`

#### 1.  Cài đặt `DHCP Server` cho `CentOS 8`

> - **B1**: Dùng lệnh `yum install dhcp-server` để cài đặt :
>   
>   ![Screen Shot 2021-05-24 at 13.32.57.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-13-33-12-Screen%20Shot%202021-05-24%20at%2013.32.57.png)
> 
> - **B2**: Copy file mẫu và cấu hình bằng lệnh, và cấu hình như sau : 
>   
>   ```bash
>   $ cp /usr/share/doc/dhcp-server/dhcpd.conf.example /etc/dhcp/dhcp.conf
>   ```
>   
>   ![Screen Shot 2021-05-24 at 14.13.05.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-16-04-02-Screen%20Shot%202021-05-24%20at%2014.13.05.png)
> 
> - **B3**: Thực hiện lênh sau để chạy `DHCP Server` : 
>   
>   ```bash
>   $ systemctl dhcpd start  #chạy dhcp server
>   $ systemctl dhcpd enable #bật dhcp server
>   $ systemctl dhcpd status #kiểm tra dhcp server
>   $ firewall-cmd --permanent --add-service=dhcp
>   $ firewall-cmd --reload
>   ```
>   
>   ![Screen Shot 2021-05-24 at 14.21.18.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-16-07-22-Screen%20Shot%202021-05-24%20at%2014.21.18.png)

#### 2. Kiểm tra `Lubuntu` sau khi cấu hình `DHCP Server`

> - **B1**: Khởi động lại dịch vụ mạng trên `Lubuntu` bằng lệnh : 
>   
>   ```bash
>   $ systemctl restart NetworkManager
>   ```
> 
> - **B2**: Gõ `ifconfig -a` để kiểm tra cấu hình mạng : 
>   
>   ![Screen Shot 2021-05-24 at 16.10.10.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-16-10-35-Screen%20Shot%202021-05-24%20at%2016.10.10.png)
> 
> ==> Đã thành công, dạy `IP` từ `10.0.2.15` chuyển thành `10.0.2.50` vì đây là `IP` của `DHCP Server` do `CentOS 8` cấp 

---

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.5** (*10%*) Cài đặt và cấu hình tường lửa trên `server` để cho phép `desktop` : 
> 
> - Có thể truy cập các dịch vụ `DNS`, `DHCP`, `SSH`, `Web`,`FTP` trên `server`. Các dịch vụ khác **KHÔNG** truy cập được
> 
> - Chỉ `desktop` có thể `ping` tới `server`, các máy khác **KHÔNG** `ping` được.

Giải

### Cấu hình tường lửa trên `CentOS 8`

#### 1. Cài đặt và chạy tường lửa

> - **B1**: Gõ lệnh `yum install iptables` và `yum install iptables-services`
>   
>   ![Screen Shot 2021-05-24 at 16.12.58.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-17-03-46-Screen%20Shot%202021-05-24%20at%2016.12.58.png)
>   
>   <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-17-56-35-Screen%20Shot%202021-05-24%20at%2017.56.27.png" title="" alt="Screen Shot 2021-05-24 at 17.56.27.png" width="331">
> 
> - **B2**:  Thực hiện lệnh sau :
>   
>   ```bash
>   $ systemctl start iptables # chạy tường lửa
>   $ systemctl status iptables # kiểm tra tường lửa
>   ```
>   
>   ![Screen Shot 2021-05-24 at 17.50.56.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-17-55-17-Screen%20Shot%202021-05-24%20at%2017.50.56.png)

#### 2. Cấu hình `rule` cho tường lửa

> 💡 Có rất nhiều số port tượng trưng cho mỗi cổng kết nối, tuy nhiên chỉ đề cập những port thông dụng sau : 
> 
> | Cổng số | Sử dụng                                             |
> | ------- | --------------------------------------------------- |
> | 20      | FTP (*File Transfer Protocol*) - Data transfer      |
> | 21      | FTP (*File Transfer Protocol*) - Command control    |
> | 22      | SSH (*Secure Shell*)                                |
> | 25      | SMTP (*Simple Mail Transfer Protocol*)              |
> | 53      | DNS (Domain Name Server)                            |
> | 67      | DHCP (*Dynamic Host Configuration Protocol*)-Server |
> | 68      | DHCP (*Dynamic Host Configuration Protocol*)-Client |
> | 80      | HTTP (*Hypertext Transfer Protocol*)                |
> | 110     | POP3 (*Post Office Protocol*)                       |
> | 119     | NNTP (*Network News Transfer Protocol*)             |
> | 123     | NTP (*Network Time Ptotocol*)                       |
> | 143     | IMAP (*Internet Message Access Protocol*)           |
> | 161     | SNMP (*Simple Network Management Protocol*)         |
> | 194     | IRC (Internet Relay Chat)                           |
> | 443     | HTTPS (*HTTP Secure*)                               |
> 
> - **B1**: Thực hiện lần lượt các lệnh sau : 
>   
>   ```bash
>   # cho phép truy cập web
>   $ iptables -A INPUT -p tcp --dport 80:443 -j ACCEPT
>   # cho phép truy cập SSH
>   iptables -A INPUT -p tcp --dport 22 -j ACCEPT
>   # cho phép truy cập FTP
>   iptables -A INPUT -p tcp --dport 20:21 -j ACCEPT
>   # cho phép truy cập DNS
>   iptables -A INPUT -p tcp --dport 53 -j ACCEPT
>   # cho phép truy cập DHCP
>   iptables -A INPUT -p udp --dport 67:68 -j ACCEPT
>   # chặn tất cả các cổng khác
>   iptables -A INPUT -j DROP
>   # cho phép desktop ping tới server
>   iptables -A INPUT -p icmp -s 10.0.2.50 -j ACCEPT
>   ```
>   
>   ![Screen Shot 2021-05-24 at 19.44.49.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-19-45-35-Screen%20Shot%202021-05-24%20at%2019.44.49.png)
> 
> - **B2**: Từ `Lubuntu` ping tới `CentOS 8`
>   
>   ![Screen Shot 2021-05-24 at 19.47.02.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-19-47-09-Screen%20Shot%202021-05-24%20at%2019.47.02.png)

---

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.6**: (*10%*) Cài đặt và cấu hình dịch vụ `SSH` để cho phép điều khiển từ xa `server`
> 
> ⚠️ **Lưu ý**: chỉ có thành viên `ban giám đốc` và các `trưởng phòng` mới có quyền điều khiển từ xa `server`

Giải

### Cài đặt dịch vụ `SSH`

#### 1. Cài đặt và chạy `SSH`

> - **B1**: Gõ lệnh `yum install openssh` để cài đặt `SSH` : 
>   
>   ![Screen Shot 2021-05-24 at 16.26.35.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-21-19-10-Screen%20Shot%202021-05-24%20at%2016.26.35.png)
> 
> - **B2**: Thực hiện lệnh sau : 
>   
>   ```bash
>   $ systemctl start sshd
>   $ systemctl status sshd
>   ```
>   
>   ![Screen Shot 2021-05-24 at 21.22.36.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/24-21-22-57-Screen%20Shot%202021-05-24%20at%2021.22.36.png)

#### 2. Cấu hình `SSH`

> - **B1**: Tạo group `nhanvien` và thêm thành viên tương ứng 
> 
> - **B2:** Gõ lệnh `nano /etc/ssh/sshd_config`
>   
>   ![Screen Shot 2021-05-25 at 22.02.21.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-22-02-41-Screen%20Shot%202021-05-25%20at%2022.02.21.png)
> 
> - **B3**: Gõ lệnh `systemctl restart sshd` và kiểm tra kết nối 
>   
>   ![Screen Shot 2021-05-25 at 22.05.51.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-22-06-23-Screen%20Shot%202021-05-25%20at%2022.05.51.png)
>   
>   ![Screen Shot 2021-05-25 at 22.06.51.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-22-07-15-Screen%20Shot%202021-05-25%20at%2022.06.51.png)
> 
>   

---

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.7** (*5%*) Cài đặt và cấu hình dịch vụ `DNS` trên `server` để phân giải tên miền `lautamquoc.com`
> 
> - Tên miền : `www.lautamquoc.com` <---> IP : `10.0.2.2` (*Server IP*)
> 
> - Tên miền : `ftp.lautamquoc.com` <---> IP : `10.0.2.2` (*Server IP*)

Giải

### Cấu hình `DNS` cho `CentOS 8`

#### 1. Cài đặt `DNS` tools

> - **B1**: Gõ lệnh `yum install bind bind-utils`
>   
>   ![Screen Shot 2021-05-25 at 08.57.29.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-10-12-21-Screen%20Shot%202021-05-25%20at%2008.57.29.png)
> 
> - **B2**: Thực hiện các lệnh sau : 
>   
>   ```bash
>   $ systemctl start named      # chạy named   
>   $ systemctl status named     # kiểm tra named
>   ```
>   
>   ![Screen Shot 2021-05-25 at 09.21.19.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-10-14-29-Screen%20Shot%202021-05-25%20at%2009.21.19.png)

#### 2. Cấu hình `DNS`

> - **B1** : Gõ lệnh `nano /etc/named.conf` và cấu hình như sau : 
>   
>   ![Screen Shot 2021-05-25 at 09.46.43.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-10-21-55-Screen%20Shot%202021-05-25%20at%2009.46.43.png)
>   
>   🤔 Đặt `listen-on port 53` là `any` có thể lắng nghe từ mọi `IP`
>   
>   🤔 Đặt `allow-query` là `any` để cho phép truy vấn từ mọi `IP`
>   
>   ![Screen Shot 2021-05-25 at 09.54.59.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-10-24-24-Screen%20Shot%202021-05-25%20at%2009.54.59.png)
> 
> - **B2** : Cấu hình **phân giải xuôi**
>   
>   ```bash
>   $ cp /var/named/named.localhost /var/named/forward.qtht
>   $ chgrp named /var/named/forward.qtht
>   $ nano /var/named/forward.qtht
>   ```
>   
>   ![Screen Shot 2021-05-25 at 13.50.28.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-13-50-37-Screen%20Shot%202021-05-25%20at%2013.50.28.png)
> 
> - **B3** : Cấu hình **phân giải ngược** : 
>   
>   ```bash
>   $ cp /var/named/forward.qtht /var/named/reverse.qtht
>   $ chgrp named /var/named/reverse.qtht
>   $ nano /var/named/reverse.qtht
>   ```
>   
>   ![Screen Shot 2021-05-25 at 13.50.58.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-13-51-06-Screen%20Shot%202021-05-25%20at%2013.50.58.png)
> 
> - **B4**: Chạy lại `named` và kiểm tra : 
>   
>   ```bash
>   $ systemctl restart named #chạy lại named
>   # kiểm tra phân giải xuôi
>   $ nslookup www.lautamquoc.com 10.0.2.2
>   $ nslookup ftp.lautamquoc.com 10.0.2.2
>   #kiểm tra phân giải ngược
>   $ nslookup 10.0.2.2 10.0.2.2
>   $ nslookup 10.0.2.10 10.0.2.2
>   ```
>   
>   ![Screen Shot 2021-05-25 at 09.48.16.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-10-31-03-Screen%20Shot%202021-05-25%20at%2009.48.16.png)
>   
>   ![Screen Shot 2021-05-25 at 10.32.33.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-10-33-05-Screen%20Shot%202021-05-25%20at%2010.32.33.png)
>   
>   ![Screen Shot 2021-05-25 at 13.52.23.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-13-52-54-Screen%20Shot%202021-05-25%20at%2013.52.23.png)

---

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.8** (*5%*) Cài đặt và cấu hình dịch vụ máy chủ `Web` trên `server`. Tạo một trang `web` có tên miền là `www.lautamquoc.com` với nội dung trang chủ giới thiệu về các thành viên trong công ty.

Giải

### Cấu hình máy chủ `Web` :

#### 1. Cài đặt `Apache` và `web browser`

> Vì sử dụng `CentOS` bản không `GUI` nên ta phải cài thêm `browser console` 
> 
> - **B1**: Bật gói `powertools` (*vì `lynx` nằm trong gói `powertools`*)
>   
>   ```bash
>   $ yum config-manager --set-enabled powertools
>   $ yum install lynx
>   $ lynx google.com  #test thử  lynx
>   ```
>   
>   ![Screen Shot 2021-05-25 at 10.44.24.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-11-45-17-Screen%20Shot%202021-05-25%20at%2010.44.24.png)
>   
>   ![Screen Shot 2021-05-25 at 11.45.52.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-11-46-00-Screen%20Shot%202021-05-25%20at%2011.45.52.png)
> 
> - **B2** : Cài đặt và chạy `Apache` 
>   
>   ```bash
>   $ yum install httpd
>   $ systemctl start httpd  #chạy httpd
>   $ systemctl status httpd #check httpd
>   ```
>   
>   ![Screen Shot 2021-05-25 at 11.47.23.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-11-47-47-Screen%20Shot%202021-05-25%20at%2011.47.23.png)
> 
> - **B3** : Gõ lệnh `lynx 10.0.2.2` để truy cập vào `Apache` 
>   
>   ![Screen Shot 2021-05-25 at 11.48.41.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-11-48-46-Screen%20Shot%202021-05-25%20at%2011.48.41.png)
> 
> ==> Vậy là thành công

#### 2. Chạy một trang `web` cá nhân

> - **B1**: Tạo thư mục `/var/www/html/tamquoc` (*`tamquoc` kà tên web*)
> 
> - **B2**: Viết code `index.html` và `style.css`
>   
>   ```bash
>   $ nano /var/www/html/tamquoc/index.html
>   ```
>   
>   ![Screen Shot 2021-05-25 at 13.12.25.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-13-20-30-Screen%20Shot%202021-05-25%20at%2013.12.25.png)
>   
>   ```bash
>   $ nano /var/www/html/tamquoc/style.css
>   ```
>   
>   ![Screen Shot 2021-05-25 at 13.12.39.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-13-21-17-Screen%20Shot%202021-05-25%20at%2013.12.39.png)
> 
> - **B3**: Gõ `lynx 10.0.2.2/tamquoc` : 
>   
>   ![Screen Shot 2021-05-25 at 13.12.10.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-13-22-16-Screen%20Shot%202021-05-25%20at%2013.12.10.png)
> 
> ==> Đã thành công 

#### 3. Kiểm tra web domain

> - **B1** : Hãy chắc rằng `named` đạng chạy và `iptables` đang tắt
>   
>   ```bash
>   $ systemctl status named
>   $ systemctl status iptables
>   ```
>   
>   ![Screen Shot 2021-05-25 at 15.06.06.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-15-06-33-Screen%20Shot%202021-05-25%20at%2015.06.06.png)
>   
>   ![Screen Shot 2021-05-25 at 15.06.59.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-15-07-26-Screen%20Shot%202021-05-25%20at%2015.06.59.png)
> 
> - **B2**: Gõ `ping -c 5 www.lautamquoc.com` để kiểm tra
>   
>   ![Screen Shot 2021-05-25 at 15.08.47.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-15-09-11-Screen%20Shot%202021-05-25%20at%2015.08.47.png)
> 
> - **B3**: Gõ `lynx www.lautamquoc.com/tamquoc` để truy cập tới `web` : 
>   
>   ![Screen Shot 2021-05-25 at 15.11.40.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-15-13-46-Screen%20Shot%202021-05-25%20at%2015.11.40.png)
>   
>   ![Screen Shot 2021-05-25 at 15.09.53.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-15-13-53-Screen%20Shot%202021-05-25%20at%2015.09.53.png)
>   
>   ==> Đã thành công

---

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/08-22-03-47-icons8-questions.png) **Câu 1.9** (*5%*) Cài đặt và cấu hình dịch vụ máy chủ `FTP` trên `server`. Cấu hình chỉ cho phép người dùng **download** dữ liệu từ thư mục `/data` trên `server`

Giải

### Cấu hình máy chỉ `FTP`

#### 1. Cài đặt `FTP` trên `CentOS 8`

> - **B1** : Gõ lệnh `yum install vsftpd` 
>   
>   ![Screen Shot 2021-05-25 at 15.16.41.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-15-18-07-Screen%20Shot%202021-05-25%20at%2015.16.41.png)
> 
> - **B2** : Gõ lần lượt các lệnh sau : 
>   
>   ```bash
>   $ systemctl start vsftpd  # chạy ftp
>   $ systemctl status vsftpd # kiểm tra ftp
>   ```
>   
>   ![Screen Shot 2021-05-25 at 15.19.12.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-15-19-32-Screen%20Shot%202021-05-25%20at%2015.19.12.png)
> 
> - **B3**: Thực hiện các lệnh để cho phép cổng `21` trên `firewall`
>   
>   ```bash
>   $ firewall-cmd --reload
>   $ firewall-cmd --permanent --add-port=21/tcp
>   $ firewall-cmd --permanent --add-service=ftp
>   $ systemctl enable vsftpd
>   $ 
>   ```
>   
>   ![Screen Shot 2021-05-25 at 15.23.26.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-15-23-53-Screen%20Shot%202021-05-25%20at%2015.23.26.png)

#### 2. Cấu hình `FTP`

> - **B1** : Thực hiện lần lượt các lệnh sau : 
>   
>   ```bash
>   # trước khi làm phải backup file lại 
>   $ cp /etc/vsftpd/vsftpd.conf /etc/vsftpd/vsftpd.conf.backup
>   # cấu hình file 
>   $ nano /etc/vsftpd/vsftpd.conf
>   ```
>   
>   Và cấu hình như sau : 
>   
>   ```bash
>   anonymous_enable=NO
>   local_enable=YES
>   write_enable=NO
>   local_umask=022
>   dirmessage_enable=YES
>   xferlog_enable=YES
>   connect_from_port_20=YES
>   xferlog_std_format=YES
>   chroot_local_user=YES
>   anon_upload_enable=NO
>   anon_writeable_chroot=YES
>   anon_mkdir_write_enable=YES
>   anon_world_readable_only=YES
>   listen=YES
>   pam_server_name=vsftpd
>   userlist_enable=YES
>   local_root=/data
>   ```
> 
> - **B2**: Gõ lệnh `ftp 10.0.2.2` để kết nối và kiểm tra :
>   
>   ![Screen Shot 2021-05-25 at 17.10.39.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-17-11-01-Screen%20Shot%202021-05-25%20at%2017.10.39.png)

---

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

### Cấu hình file backup

- **B1**: Thời hiện các lệnh sau : 
  
  ```bash
  $ mkdir /mnt/backup #tạo mục backup
  $ nano /tmp/backupeveryday.sh   #tạo mục backup hàng ngày
  $ nano /tmp/backupeveryweek.sh  #tạo mục backup bằng tuần
  $ nano /tmp/backupeverymonth.sh #tạo mục backup hằng tháng
  ```
  
  ![Screen Shot 2021-05-25 at 21.10.14.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-21-49-53-Screen%20Shot%202021-05-25%20at%2021.10.14.png)
  
  ![Screen Shot 2021-05-25 at 21.17.00.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-21-49-57-Screen%20Shot%202021-05-25%20at%2021.17.00.png)
  
  ![Screen Shot 2021-05-25 at 21.37.08.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-21-55-46-Screen%20Shot%202021-05-25%20at%2021.37.08.png)

- **B2**: Test nhẹ 3 file `backup`
  
  ```bash
  $ bash /tmp/backupeveryday.sh
  $ bash /tmp/backupeveryweek.sh
  $ bash /tmp/backupeverymonth.sh
  ```
  
  >  Đây là kết quả sau khi thực thi 
  
  ![Screen Shot 2021-05-25 at 21.53.37.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-21-53-59-Screen%20Shot%202021-05-25%20at%2021.53.37.png)

- **B3**: Cấu hình `Crontab`, gõ lệnh như sau : 
  
  ```bash
  $ export EDITOR=nano #đổi thành nano thay vì xài vim 
  $ crontab -e
  ```
  
  ![Screen Shot 2021-05-25 at 21.55.08.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/25-21-57-26-Screen%20Shot%202021-05-25%20at%2021.55.08.png)

==> Như thế là xong đợi ngày lành tháng tốt rồi nó chạy  !!!

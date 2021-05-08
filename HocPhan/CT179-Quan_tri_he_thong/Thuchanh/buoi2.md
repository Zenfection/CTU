# ![icons8-manager.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-04-53-icons8-manager.png) Quản lý tài khoản người dùng, ổ cứng và hệ thống tập tin ![EXPERT SYSTEM.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-05-27-EXPERT%20SYSTEM.png)

## 1. Cài đặt CentOS <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-13-14-icons8-centos.png" title="" alt="icons8-centos.png" width="40">

> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" title="" alt="icons8-questions.png" width="30"> **Câu 1.** Thực hiện cài đặt `CentOS 6` (*hoặc `CentOS 7`, `8`*) vào máy tính cá nhân (*hoặc máy ảo*) của bạn (*KHÔNG cần chụp màn hình minh hoạ*)

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Link file ISO [CentOS 8](https://www.centos.org/download/)

</details>

---

## 2. Quản lí tài khoản <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/18-20-33-54-icons8-networking_manager.png" title="" alt="icons8-networking_manager.png" width="40">

Tìm hiểu và thực hiện các yêu cầu sau : 

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png) **Câu 2.1**. Sử dụng lệnh `adduser` và `passwd` để tạo một tài khoản mới với tên đăng nhập có dạng `masosinhvien` (*ví dụ: `B1909935`*)  (*Chụp màn hình minh hoạ*![icons8-screenshot.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))
> 
> Quan sát để thấy rằng khi một tài khoản mới được tạo, thư mục cá nhân trong `/home` và nhóm cá nhân trong `/etc/group` ứng với tài khoản đó cũng được tạo theo.

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

- Sử dụng tài khoản `root` để tạo người dùng mới như sau : 

![8c66dc280146f318aa571.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-00-36-8c66dc280146f318aa571.jpg)

- Sử dụng lệnh `ls` hiển thị danh sách các file trong thư mục : 
  
  ![9a13345ce9321b6c42232.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-00-41-9a13345ce9321b6c42232.jpg)

- Sử dụng lệnh `cat` để xem nội dung bên trong file : 
  
  ![8c6c7d23a04d52130b5c4.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-00-34-8c6c7d23a04d52130b5c4.jpg)
  
  ![fd15315aec341e6a47253.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-29-14-fd15315aec341e6a47253.jpg)

</details>

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png) **Câu 2.2**. Mở file `/etc/shadow` và cho biết **mật khẩu** bạn vừa tạo cho tài khoản mới sử dụng giải thuật mã hoá nào ? Dựa vào đâu để biết điều đó ? (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sử dụng lệnh `cat` để xem nội dung bên trong file : 

![2a04a263790d8b53d21c.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-01-12-2a04a263790d8b53d21c.jpg)

![078991ee4a80b8dee191.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-32-01-078991ee4a80b8dee191.png)

==> ![icons8-centos.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-40-46-icons8-centos.png)`CentOS` sử dụng <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-40-55-sha512.png" title="" alt="sha512.png" width="30">`SHA512` để mã hoá mật khẩu, vì có ký hiệu `$6` trước dãy mật khẩu đã mã hoá 

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png) **Câu 2.3**. Thiết lập **ngày hết hạn** cho **tài khoản** ở `2.1` là ngày `31/12/2020` (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sử dụng (Yêu cầu người dùng `root`) : 

- `usermod -e <date> <user>` : đặt ngày hết hạn cho tài khoản cụ thể
- `chage -l <user>` : Hiển thị thông tin hết hạn tài khoản cụ thể

![f58088d2acbb5ee507aa.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-43-22-f58088d2acbb5ee507aa.jpg)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png) **Câu 2.4**. Tạo một nhóm **người dùng** với tên nhóm là **mã lớp** của bạn. Thêm **tài khoản** ở `2.1` vào nhóm vừa tạo (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sử dụng  (*yêu cầu người dùng `root`*) : 

- `groupadd <group>` : thêm nhóm người dùng
- `usermod -a -G <group> <user>`  : thêm người dùng vào nhóm
- `groups <user>` : Kiểm tra người dùng thuộc tất cả nhóm nào

![473b60074d6ebf30e67f.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-44-59-473b60074d6ebf30e67f.jpg) 

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png) **Câu 2.5**. Thực hiện khoá tài khoản ở `2.1`, sau đó đăng nhập thử và quan sát (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sử dụng (*yêu cầu người dùng `root`*) : 

- `usermod -L <user>` : khoá tài khoản người dùng
  
  ![a308236c4805ba5be314.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-49-24-a308236c4805ba5be314.jpg)
  
  > ⚠️ Sau khi **khoá tài khoản**, chuỗi mật khẩu mã hoá sẽ thêm `!` vào trước.
  > 
  > ![b5dac547ca2e3870613f.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-51-20-b5dac547ca2e3870613f.jpg)

- Sử dụng lệnh `su` để chuyển tài khoản : 
  
  ![465051cd5ea4acfaf5b5.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-53-13-465051cd5ea4acfaf5b5.jpg)
  
  > ⚠️ Ở ![icons8-centos.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-40-46-icons8-centos.png) `CentOS 8` khi ta **khoá tài khoản**, màn hình đăng nhập sẽ không có tài khoản đã khoá  
  > 
  > <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-54-32-499567e10988fbd6a299.jpg" title="" alt="499567e10988fbd6a299.jpg" width="243">

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png) **Câu 2.6**. Mở khoá tài khoản ở `2.1` (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sử dụng (*yêu cầu tài khoản `root`*) : 

- `usermod -U <user>` : Mở khoá tài khoản
  
  ![53535b7a3013c24d9b02.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-57-45-53535b7a3013c24d9b02.jpg)
  
  > ⚠️ Sau khi  **mớ khoá**, chuỗi mật khẩu sẽ xoá đi `!` trước nó ==> trở lại như xưa

- Sử dụng lệnh `su` để chuyển đổi tài khoản (*từ tài khoản thường*) : 
  
  ![0dc2abebc08232dc6b93.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-59-02-0dc2abebc08232dc6b93.jpg)
  
  > ⚠️ Màn hình đăng nhập đã hiện thị tài khoản 
  > 
  > <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-16-59-32-8ad527cc4aa5b8fbe1b4.jpg" alt="8ad527cc4aa5b8fbe1b4.jpg" width="292">

</details>

---

## 3. Quyền root <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/18-20-40-22-icons8-rook.png" title="" alt="icons8-rook.png" width="40">

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png) **Câu 3.1**. Quyền `root` là gì > 

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Quyền `root` là quyền thực thi cao dưới người quản trị cao nhất.

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png) **Câu 3.2**. Nêu các ưu điểm của việc dùng `sudo` so vời dùng `su` (*chuyển sang tài khoản `root`*)

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Có sự khác biệt lớn giữa các lệnh **`su`** và **`sudo`**:

- **`su`** chuyển bạn sang **tài khoản người dùng `root`**.
- **`sudo`** chạy lệnh với **đặc quyền `root`**.

Về cơ bản, **`sudo`** là một **binary setuid** là thực hiện lệnh **`root`** thay mặt người dùng uỷ quyền khác.

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png) **Câu 3.3**. Mô tả các bước (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png)) để cấp quyền `sudo` cho tài khoản ở `2.1`. Sau đó cho một ví dụ để kiểm chứng xem tài khoản này đã thực sự được cấp quyền hay chưa (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Để cho riêng người dùng quyền truy cập **`root`**, bạn cần thêm người dùng vào nhóm quyền truy cập **`root`**.

- **B1** : Gõ lệnh `visudo` dưới tài khoản `root` 
  
  ![7cf08edccfb43dea64a5.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-17-05-59-7cf08edccfb43dea64a5.jpg)

- **B2** : Kéo xuống tìm và chỉnh sửa như sau : 
  
  ![cf8f86a2c7ca35946cdb.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-17-08-32-cf8f86a2c7ca35946cdb.jpg) 
  
  > 💡 Tuy nhiên tôi khuyên bạn nên cấp quyền `root` cho `group`, vì ta có thể dễ dàng quản lí nó, `CentOS 8` đã tạo cho ta sẵn nhóm `wheel`

- **B3**: Thêm tài khoản vào nhóm `wheel` : 
  
  ![d57f9451d53927677e28.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-17-09-44-d57f9451d53927677e28.jpg)

==> Vậy là đã xong các bước cấp quyền `root` cho tài khoản , thử như sau : 

> ![eca6a488e5e017be4ef1.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-17-14-26-eca6a488e5e017be4ef1.jpg)
> 
> ![dd1c8732c65a34046d4b.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-17-14-33-dd1c8732c65a34046d4b.jpg)
> 
> ==> Vậy là chúng ta không cần tài khoản `root` vẫn có thể vào file `/etc/shadow`

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png) **Câu 3.4**. Thu hồi quyền `root` của một tài khoản ở `2.1` (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sử dụng `gpasswd -d &lt;user&gt; &lt;group&gt;` : Xoá người dùng ra khỏi nhóm

![6458a4abefc31d9d44d2.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-17-17-33-6458a4abefc31d9d44d2.jpg)

==> Vậy là đã thu hồi quyền `root` cho tài khoản, thử như sau : 

> ![51cca93fe25710094946.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-17-17-37-51cca93fe25710094946.jpg)
> 
> ==> Vậy là tài khoản `B1909935_CTU` không thể truy cập vào file `/etc/shadow`

</details>

---

## 4. Đĩa và phân vùng ổ cứng <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/18-20-43-48-icons8-ssd.png" title="" alt="icons8-ssd.png" width="40">

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png) **Câu 4.1**. Thêm một ổ cứng vào máy ảo ![icons8-centos.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/18-20-45-54-icons8-centos.png) `CentOS`. Nếu đã cài ![icons8-centos.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/18-20-45-54-icons8-centos.png) `CentOS` trực tiếp vào máy tính cá nhân thì có thể sử dụng  1 ![icons8-usb_memory_stick.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/18-20-45-37-icons8-usb_memory_stick.png)`USB` để thay thế.

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Cắm ![icons8usbmemorystickpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/18-20-45-37-icons8-usb_memory_stick.png)`USB` vào máy và gõ lệnh `sudo fdisk -l` để xem thiết bị : 

![196b4ebaa3d2518c08c3.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-17-21-45-196b4ebaa3d2518c08c3.jpg)

![78247bb4b6dc44821dcd.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-17-22-30-78247bb4b6dc44821dcd.jpg)

==> Vậy ![icons8usbmemorystickpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/18-20-45-37-icons8-usb_memory_stick.png)`USB` của ta là `/dev/sde` và có dung lượng `14.3GB` 

</details>

>  ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png) **Câu 4.2**. Sử dụng lệnh `fdisk` và `mkfs` để tạo và **format** một phân vùng trên ổ cứng vừa mới thêm ở `4.1` (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

**B1** : Gõ lệnh `fdisk <đưỡng dẫn ổ cứng>`

![b80fcc8201eaf3b4aafb.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-21-25-57-b80fcc8201eaf3b4aafb.jpg)

> 💡 Gõ `m` để đọc hướng dẫn 
> 
> ==> Nếu ố cứng có dữ liệu hãy gõ `d` để xoá ổ cứng

**B2** : Gõ `n` để tạo phân vùng mới

![00371ca1d1c923977ad8 (1).jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-20-16-12-00371ca1d1c923977ad8%20(1).jpg)

**B3:** Gõ `w` để ghi phân vùng 

![bb709fe6528ea0d0f99f.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-20-16-35-bb709fe6528ea0d0f99f.jpg)

==> Đã tạo xong phân vùng cần thiết  ![icons8-checkmark.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-20-19-20-icons8-checkmark.png)

> 💡 Kiểm tra bằng cách gõ `fdisk -l <đường dẫn ổ cứng>`
> 
> ![97f5187ed51627487e07.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-20-16-09-97f5187ed51627487e07.jpg)

Sử dụng lệnh `mkfs.<chuẩn file system> <đưỡng dẫn ổ cứng>` để **format** ổ cứng theo chuẩn `file system` mình muốn : 

![37b6493a8452760c2f43.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-20-16-05-37b6493a8452760c2f43.jpg)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png) **Câu 4.3**. Tạo thư mục mới có tên `/data` bằng tài khoản `root`. **Mount** phân vùng ổ cứng ở `4.2` tới thư mục `/data` (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sử dụng (*yêu cầu tài khoản `root`*)

- `mkdir` : tạo thư mục
- `mount <đưỡng dẫn ổ cứng> <đưỡng dẫn thư mục>` : Gắn ổ cứng vào đường dẫn cụ thể

![c3d6965b5b33a96df022.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-21-15-12-c3d6965b5b33a96df022.jpg)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png) **Câu 4.4**. Thực hiện lệnh `df -h` để xem kết quả (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![8942f4cf39a7cbf992b6.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-21-27-18-8942f4cf39a7cbf992b6.jpg)

> 💡Ổ cứng `/dev/sde` có `15G`, khả dụng `14G` và đã sử dụng `41M(1%)` đã được mount vào trong `/data`

</details>

---

## 5. Phân quyền trên hệ thống tập tin <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/18-20-49-01-icons8-remove_key.png" title="" alt="icons8-remove_key.png" width="40">

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png) **Câu 5.1**. Tạo nhóm người dùng `quantri`, thêm người dùng ở `2.1` vào nhóm `quantri`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Làm theo câu [2.4](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT179-Quan_tri_he_thong/Thuchanh/buoi2.md#2-quản-lí-tài-khoản-) trên : 

![d0e5c2e90b81f9dfa090.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-21-30-11-d0e5c2e90b81f9dfa090.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png) **Câu 5.2**. Chuyển nhóm **chủ sỡ hữu** của thư mục `/data` sang `quantri`. Phân quyền cho thư mục `/data` là chủ sở hữu có toàn quyền `read`, `write` và `execute`, nhóm chủ sở hữu có quyền `read` và `execute`, những người khác không có quyền gì (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

- Sử dụng lệnh `chgrp <group> <đưỡng dẫn>` : thay đổi nhóm sử dụng cho thư mục cụ thể 
  
  ![8225745b5d30af6ef621.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-21-37-16-8225745b5d30af6ef621.png)
  
  > 💡 Như bạn đã thấy quyền sở hữu nhóm đổi qua `quantri`

- Sử dụng lệnh `chmod <option> <đưỡng dẫn thư mục>` : thay đổi quyền cho thư mục
  
  ![4243ac3d855677082e47.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-21-37-15-4243ac3d855677082e47.png)
  
  > 💡 Như bạn đã thấy  : 
  > 
  > - `drwxr` là toàn quyền cho `user`
  > - `x` là quyền thực thi cho `group` 
  > - `---` là không có quyền gì cho `other`

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png) **Câu 5.3**. Dùng tài khoản `root` tạo tập tin `/data/file1.txt`. Sau đó dùng tài khoản ở `2.1` tạo tập tin `/data/file2.txt`. Quan sát và cho biết kết quả trong **2** trường hợp (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

🤔 Sử dụng lệnh `nano` hoặc `gedit` để tạo file và ghi :

- Người dùng `root`  :
  
  ![af4067354e5ebc00e54f.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-22-29-04-af4067354e5ebc00e54f.jpg)

- Người dùng `B1909935_CTU` : 
  
  ![a2ea37821ee9ecb7b5f8.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-22-28-51-a2ea37821ee9ecb7b5f8.jpg)
  
  > ⚠️ Ngay lập tức sẽ lỗi vì `B1909935_CTU` nằm trong group `quantri` chỉ có quyền `x` (*thực thi*), không có quyền `w` (*ghi*)
  > 
  > ![f1c525b10cdafe84a7cb.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-22-33-06-f1c525b10cdafe84a7cb.jpg)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png) **Câu 5.4**. Dùng tài khoản `2.1` *mở* và *thay đổi* nội dung tập tin `/data/file1.txt`, cho biết kết quả (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sử dụng lệnh `nano` ở  tài khoản `B1909935_CTU` : 

![4922ca4ae321117f4830.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-22-35-14-4922ca4ae321117f4830.jpg)

> ⚠️ Sẽ phát sinh ra lỗi không có quyền ghi 
> 
> ![c731b25d9b3669683027.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-22-36-50-c731b25d9b3669683027.jpg)
> 
> ==> Vì chủ sở hữu của `file1.txt` là `root`, và người dùng khác chỉ có quyền `r` (*đọc*) ==> `B1909935_CTU` không thể **ghi**
> 
> ![6f608306aa6d5833017c.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-22-37-05-6f608306aa6d5833017c.png)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png) **Câu 5.5**. cấp quyền cho tài khoản `2.1` có thể thay đổi nội dung tập tin `/data/file1.txt` (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sử dụng lệnh `chmod <option> <đường dẫn thư mục>` để cấp quyền cho thư mục

![4d648802a16953370a78.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-22-40-18-4d648802a16953370a78.jpg)

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-14-01-icons8-questions.png) **Câu 5.6**. Tạo thêm một tài khoản **mới**, dùng tài khoản này mở tập tin `/data/file1.txt`, cho biết quả kết quả (*Chụp màn hình minh hoạ*![icons8screenshotpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png))

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Làm theo câu [2.1](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT179-Quan_tri_he_thong/Thuchanh/buoi2.md#2-quản-lí-tài-khoản-) để tạo người dùng mới 

![6e3cd55afc310e6f5720.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-22-41-52-6e3cd55afc310e6f5720.jpg)

Sử dụng lệnh sau để mở thư mục `/data/file1.txt`

```bash
$ nano /data/file1.txt 
# Thực thi lệnh ở người dùng newStudent vừa tạo
```

> ⚠️ Sẽ đưa ra lỗi không thể truy cập vào `/data` 
> 
> ![86dfe2bacbd1398f60c0.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/28-22-44-59-86dfe2bacbd1398f60c0.jpg)
> 
> 🤔 Vì trong câu `5.2`, chúng ta thiết lập `/data`, người khác không có quyền gì cả và nhóm sở hữu là `quantri`, tài khoản `newStudent` không thuộc nhóm đó.

</details>

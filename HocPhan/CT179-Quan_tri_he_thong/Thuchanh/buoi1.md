# <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-33-52-Multi%20Agent%20System.png" title="" alt="Multi Agent System.png" width="50"> Buổi thực hành 1 - Quản trị hệ thống <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-33-54-EXPERT%20SYSTEM.png" title="" alt="EXPERT SYSTEM.png" width="50">

## 1. Sử dụng Linux <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-34-29-icons8-linux.png" alt="icons8linuxpng" width="40">

> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35">**1.1** Linux distribution (gọi tắt là distro) là gì? Giữa các distro giống và khác nhau thế nào? 

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

`Linux distro` tức là bản phân phối `Linux` là một hệ điều hành được tạo nên từ nhân `Linux` và thường có trình quản lí gói (*package management*)

> 💡 Cũng có thể nói `Linux` chỉ là một cái nhân *(`kernel`)*, còn `Linux distro` mới là hệ điều hành

Mỗi `Linux Distro` được tạo ra hướng tới một người dùng hay mục đích cụ thể nào đó và đó là sự khác nhau chính vì thế nó đã được chia ra rất nhiều nhánh nhứ `RedHat`, `Debian` ,`Arch`...  ==> Điểm giống nhau giữa chúng là điều sử dụng nhân `Linux`.

</details>

> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> **1.2** Kể tên ít nhất 3 Linux distro và một vài thông tin mổ tả về các bản distro này.

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-21-19-38-33131755.png" title="" alt="33131755.png" width="30"> [PopOS](https://pop.system76.com/) : là một `Linux Distro` dựa trên <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-21-25-39-icons8-ubuntu.png" title="" alt="icons8-ubuntu.png" width="30"> [Ubuntu](https://ubuntu.com/download), làm tốt hơn `Ubuntu`, hỗ trợ mọi phần cứng tốt hơn, và có phiên bản riêng cho <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-21-27-58-icons8-nvidia.png" title="" alt="icons8-nvidia.png" width="30"> `Nvidia` . Sử dụng gói quản lí `apt` và môi trường mặc định là `GNOME`, được phát triển hướng đến các lập trình viên `FullStack`, đồng thời cũng là một `Linux Distro` được đánh giá về hiệu suất và giao diện trong những năm gần đây. 

> 💡 `PopOS` không sử dụng `Grub Bootloader` mà sử dụng `systemd`, mang độ ổn định cao và tốc độ boot được tối ưu rất nhiều

<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-21-21-33-1024px-Manjaro-logo.svg.png" title="" alt="1024px-Manjaro-logo.svg.png" width="30"> [Manjaro](https://manjaro.org/) : là một `Linux Distro` dựa trên <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-21-33-15-1024px-Archlinux-icon-crystal-64.svg.png" title="" alt="1024px-Archlinux-icon-crystal-64.svg.png" width="30"> [Arch](https://archlinux.org/), sử dụng gói quản lý `pacman` và có 4 tuỳ chọn về môi trường như `XFCE`, `KDE Plasma`, `GNOME`, `Architect`, được phát triển hướng tới người dùng bắt đầu với `Linux` với giao diện thân thiện dễ dùng và cài đặt mọi thứ dễ dàng và là một trong những `Linux Distro` nổi tiếng trên thế giới.

<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-21-41-21-mxlinux-512.png" title="" alt="mxlinux-512.png" width="30"> [Mxlinux](https://mxlinux.org/) : là một `Linux Distro` dựa trên <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-21-42-01-icons8-debian.png" title="" alt="icons8-debian.png" width="30"> [Debian](https://www.debian.org/), sử dụng gói quản lí `apt` và có 3 tuỳ chọn môi trường gồm : `XFCE`, `KDE`, `FluxBox`, được phát triển để chạy mượt mà trên các thiết bị cũ  như `dưới 2GB RAM`, `CPU Pentium`, điều mà các hệ điều hành khác không làm được, và được đánh giá `top1` trong [DistroWatch](https://distrowatch.com/)

</details>

---

## 2. Cài đặt CentOS

> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> Thực hiện cài đặt CentOS 6 (hoặc CentOS 7/8) vào máy tính cá nhân (hoặc máy ảo) của bạn. Trong quá trình cài đặt, tạo một tài khoản có tên đăng nhập (login name) là mã số sinh viên của bạn. Sau khi hoàn thành cài đặt, chụp màn hình đăng nhập có chứa login name để chứng tỏ hoàn thành việc cài đặt.

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![86d69cfb2765d43b8d74.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-34-15-86d69cfb2765d43b8d74.jpg)

</details>

---

## 3. Shell và lệnh Linux cơ bản <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-39-02-icons8-command_line.png" title="" alt="icons8-command_line.png" width="40">

> Tìm hiểu về thực hiện các yêu cầu sau : 
> 
> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> **3.1**. `Shell` là gì ? Kể tên một số `shell` trong `Linux`. Làm sao để biết `shell` nào sử dụng bởi `Linux` ? 

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

**`Shell`** là một **giao diện dòng lệnh**, hoặc là một **giao diện người dùng** đơn giản dựa trên văn bản cho phép truy cập vào dịch vụ cơ bản **hệ điều hành**. Có nhiều `shell` nhưng chúng cơ bản là hoạt động giống nhau.

Một số **`shell`** khác bao gồm **`zsh`** (**Z shell**), **`ksh`** (**Korn shell**), **`ash`**(**Almquist shell**), **`fish`**(**friendly interactive shell**), và nhiều nữa ...

Để biết `Linux` đang sử dụng `Linux` nào ta có thể dùng lệnh sau : 

- ```shell
  echo $SHELL
  ```

</details>

> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> **3.2**. Để tìm kiếm thông tin hướng dẫn về một lệnh hoặc tiện ích nào đó trong `Linux`, ta có thể sử dụng câu lệnh nào ? Cho ví dụ (*chụp ảnh minh hoạ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8-screenshot.png" width="30">*)

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sử dụng lệnh `man` như sau : 

![f6997ae7ff790c275568.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-34-54-f6997ae7ff790c275568.jpg)

![da0a9f491ad7e989b0c6.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-34-57-da0a9f491ad7e989b0c6.jpg)

</details>

> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35">**3.3** . Cho biết **công dụng** của lệnh `pwd` và `cd`. Cho ví dụ (*chụp ảnh minh hoạ*<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8screenshotpng" width="35">)

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

- `pwd` (*Present Working Directory*) : Hiển thị đường dẫn thư mục hiện tại 
  
      ![d764a2f92267d1398876.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-35-47-d764a2f92267d1398876.jpg)

- `cd` (*Change Directory*) : Thay đổi thư mục làm việc hiện tại
  
        ![edd4904910d7e389bac6.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-36-54-edd4904910d7e389bac6.jpg)

</details>

>  <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> **3.4**. Cho biết **công dụng** của lệnh `ls` và vài **tuỳ chọn** của nó. Cho ví dụ (*chụp ảnh minh hoạ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8-screenshot.png" width="30">*)

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

`ls` (*List*) : Hiện thị các tệp tin trong thư mục

> 🧚 Và các tuỳ chọn sau : 
> 
> | Option | Mô tả                               |
> | ------ | ----------------------------------- |
> | -a     | Liệt kê bao gồm file ẩn             |
> | -l     | Liệt kê kèm thêm hiển thị các quyền |
> | -s     | Liệt kê kích thước tệp tin          |

![3edfa45324cdd7938edc.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-43-03-3edfa45324cdd7938edc.jpg)

</details>

> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35">**3.5**. Dùng **công cụ** `gedit` để tạo tệp tin có tên là `thoduyen` với nội dung là 8 câu đầu trong bài thơ **Duyên** của **Xuân Diệu** (*chụp ảnh minh hoạ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8-screenshot.png" width="30">*)

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

![c8407edbf445071b5e54.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-44-53-c8407edbf445071b5e54.jpg)

</details>

> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> **3.6**. Cho biết **công dụng** của lệnh `cat`, `more`, `less`,`head`,`tail`. Cho ví dụ (*chụp ảnh minh hoạ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8-screenshot.png" width="30">*)

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

`cat` : hiển thị nội dung file 

`more` : xem nội dung file lớn 

`less` : xem nội dung file lớn có tính năng cuộn

`head` : hiển thị nội dung file (*thêm tuỳ chọn -n --> lấy từ trên xuống n dòng*)

`tail` : hiển thị nội dung file (*thêm tuỳ chọn -n --> lấy từ dưới lên n dòng*)

- ![4d5139f8aa6659380077.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-47-28-4d5139f8aa6659380077.jpg)

- ![930763e0f07e03205a6f.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-47-32-930763e0f07e03205a6f.jpg)
  
  ![c0064ddcde422d1c7453.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-47-39-c0064ddcde422d1c7453.jpg)

- ![cb02b13521abd2f58bba.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-47-43-cb02b13521abd2f58bba.jpg)

</details>

> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> **3.7**. Cho biết **công dụng** của lệnh `grep`. Cho ví dụ (*chụp ảnh minh hoạ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8-screenshot.png" width="30">*)

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Cách sử dụng cơ bản của lệnh **`grep`** để tìm kiếm chuỗi xác định trong file cụ thể như sau:

```shell
grep "some_string" some_file
```

![18429414098afad4a39b.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-53-59-18429414098afad4a39b.jpg)

</details>

> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> **3.8**. Cho biết **công dụng** của lệnh `cp` và `mv`. Cho ví dụ (*chụp ảnh minh hoạ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8-screenshot.png" width="30">*)

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

- `cp` (*Copy*) : Tạo bản sao một file
    ![214301089c966fc83687.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-57-15-214301089c966fc83687.jpg)

- `mv` (*Move*) : Di chuyển file
  ![4e80a93734a9c7f79eb8.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-18-57-20-4e80a93734a9c7f79eb8.jpg)

</details>

> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> **3.9**. Cho biết công dụng của lệnh `mkdir` và `rm`. Cho ví dụ (*chụp ảnh minh hoạ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8-screenshot.png" width="30">*)

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

`mkdir` (*Make Directory*) : Tạo thư mục

`rm` (*Remove*) : Xoá thư mục

![ced60ec0ef5e1c00454f.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-19-00-27-ced60ec0ef5e1c00454f.jpg)

</details>

---

## 4. RPM, cập nhật và các đặt các package <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-49-55-docker-service-rpm-logo.png" title="" alt="docker-service-rpm-logo.png" width="40">

> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> **4.1**. Các tệp tin có phần mở rộng `.rpm` và `.deb` có chức năng gì ? 

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

`.rpm` (*RedHat Package Manager*)  đây là gói `package` thuộc nhánh <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/15-19-02-25-icons8-redhat.png" title="" alt="icons8-redhat.png" width="30"> `Redhat` như `centOS`

`.deb` (*Debian Package Manager*) đây là gói `package` thuộc nhánh <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-21-42-01-icons8-debian.png" title="" alt="icons8-debian.png" width="30"> `Debian` như `Ubuntu`

</details>

> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> **4.2** . Thay vì đòi hỏi người dùng phải biết trước đường dẫn *download file* `.rpm` khi cài đặt/cập nhật ứng dụng có một lệnh trong `RHEL/CentOS` cho phép truy xuất đến kho file `.rpm`, sau đó hệ thống sẽ *download file* thích hợp về để thực hiện cài đặt/cập nhật. **Lệnh** đó là **lệnh** nào ? 

### <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" title="" alt="icons8-consultation.png" width="40"> Giải

Sử dụng lệnh `yum`

> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> **4.3**. Cài đặt trình soạn thảo `nano` <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-57-45-large.png" title="" alt="large.png" width="25"> (*chụp ảnh minh hoạ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8-screenshot.png" width="30">, nếu đã cài sẵn thì chụp thông báo*)

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```shell
sudo yum install nano
```

![db3dd5b9f91f0a41530e.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/16-06-54-55-db3dd5b9f91f0a41530e.jpg)

</details>

> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> **4.4**. Cài đặt trình duyệt thuần văn bản (*text-based web browsr*) `lynx`, thực hiện truy cập vào **website** `https://ctu.edu.vn/` (*chụp ảnh minh hoạ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8-screenshot.png" width="30">*)

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

- ```shell
  sudo yum install lynx
  ```
  
    ![727356237e858ddbd494.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/16-07-01-04-727356237e858ddbd494.jpg)
    ![386002082aaed9f080bf.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/16-07-01-16-386002082aaed9f080bf.jpg)

- ```shell
  lynx https://ctu.edu.vn/
  ```
  
    ![3eaa75515df7aea9f7e6.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/16-07-01-45-3eaa75515df7aea9f7e6.jpg)

</details>

> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35">**4.5**. Gỡ bỏ chương trình `lynx` ra khỏi hệ thống (*chụp ảnh minh hoạ <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-42-38-icons8-screenshot.png" title="" alt="icons8-screenshot.png" width="30">*)

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```shell
sudo yum remove lynx
```

![5b09f5b0dc162f487607.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/16-07-02-52-5b09f5b0dc162f487607.jpg)

![b300e4b5cd133e4d6702.jpg](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/16-07-02-55-b300e4b5cd133e4d6702.jpg)

</details>

> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" title="" alt="icons8-questions.png" width="35"> **4.6**. Lệnh nào thực hiện cập nhật tất cả ứng dụng hệ thống ? 



<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

Sử dụng câu lệnh dưới đây : 

```shell
sudo yum update
```

</details>
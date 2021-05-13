import java.util.Scanner;
//! import thư viện Date của buổi 2 

public class KhachHang{
    private String id;
    private String name;
    private Date birthDay;
    private String phoneNumber; 
    private String address;

    //--Constructor 
    public KhachHang(){}
    public KhachHang(String id,String name,String address,Date birthDay,String phoneNumber){
        this.id = id;
        this.name = name;
        this.address = address;
        this.birthDay = birthDay;
        this.phoneNumber = phoneNumber;
    }

    //--Getter/Setter
    public String getId() {return id;}
    public String getName() {return name;}
    public String getAddress() {return address;}
    public void setId(String id) {this.id = id;}
    public void setName(String name) {this.name = name;}
    public void setAddress(String address) {this.address = address;}

    //hàm kiểm tra sdt
    private boolean checkPhoneNumber(String p){
        return (p.startsWith("0") && p.length() > 1 && p.length() < 12);
    }

    //hàm nhập thông tin khách hàng 
    public void nhapKhachHang(){
        Scanner sc = new Scanner(System.in);
        boolean done = true;
        while(done){
            try {
                System.out.println("---NHẬP THÔNG TIN KHÁC HÀNG---");
                System.out.print("Nhập Mã Số : ");
                    this.id = sc.nextLine();
                System.out.print("Nhập Họ Tên : ");
                    this.name = sc.nextLine();
                System.out.print("Nhập Địa chỉ : ");
                    this.address = sc.nextLine();
                System.out.println("---Nhập ngày/tháng/năm sinh---");
                    Date ngaysinh = new Date();
                    ngaysinh.nhapDate();
                    this.birthDay = ngaysinh;
                System.out.print("Nhập số điện thoại : ");
                    String phone = sc.nextLine();
                    if(!checkPhoneNumber(phone)){
                        System.out.println("Sai định dạng, mời bạn nhập lại !!!");
                        continue;
                    }
                    this.phoneNumber = phone;

                done = false;
            } catch (Exception e) {
                System.out.println("Sai định dạng, mời bạn nhập lại !!!");
            }
        }
    }

    //hàm in thông tin khách hàng
    public void inKhachHang(){
        System.out.println(this.id + "-" + this.name + "-" + this.address);
        System.out.print("Ngày sinh : ");
        this.birthDay.hienThiNgay();
        System.out.println("SĐT : " + this.phoneNumber);
    }
}
import java.util.Scanner;

//! import thư viện Date của buổi 2 

public class KhachHangVip extends KhachHang{
    private float discount;
    private Date due_day;
    
    //--Constructor
    public KhachHangVip(){}
    public KhachHangVip(float discount, Date due_day){
        super();
        this.discount = discount;
        this.due_day = due_day;
    }

    //--Getter/Setter
    public float getDiscount() {return discount;}
    public Date getDue_day() {return due_day;}
    public void setDiscount(float discount) {this.discount = discount;}
    public void setDue_day(Date due_day) {this.due_day = due_day;}

    //hàm nhập thông tin khách hàng VIP
    public void nhapKhachHangVip(){
        Scanner sc = new Scanner(System.in);
        boolean done = true;
        while (done) {
            try {
                super.nhapKhachHang();
                System.out.println("Nhập ngày giảm giá : ");
                    Date ngayGiamGia = new Date();
                    ngayGiamGia.nhapDate();
                    this.due_day = ngayGiamGia;
                System.out.println("Nhập tỷ lệ giảm : ");
                    this.discount = Float.parseFloat(sc.nextLine());
                done = false;
            } catch (Exception e) {
                System.out.println("Nhập sai định dạng, mời bạn nhập lại !!!");
            }
        }
    }
}

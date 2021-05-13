import java.util.Scanner;

//! import thư viện Date của buổi 2 
public class HangHoa {
    private String id;
    private String name;
    private Date MFG_date;
    private Date EXP_date;
    
    //--Constructor
    public HangHoa(){}
    public HangHoa(String id,String name,Date MFG_date, Date EXP_date){
        this.id = id;
        this.name = name;
        this.MFG_date = MFG_date;
        this.EXP_date = EXP_date;
    }

    //--Getter/Setter
    public String getId() {return id;}
    public String getName() {return name;}
    public Date getMFG_date() {return MFG_date;}
    public Date getEXP_date() {return EXP_date;}
    public void setId(String id) {this.id = id;}
    public void setName(String name) {this.name = name;}
    public void setMFG_date(Date mFG_Date) {MFG_date = mFG_Date;}
    public void setEXP_date(Date eXP_Date) {EXP_date = eXP_Date;}

    //Hàm nhập thông tin hàng hoá
    public void nhapHangHoa(){
        Scanner sc = new Scanner(System.in);
        boolean done = true;
        while(done){
            try {
                System.out.println("---NHẬP THÔNG TIN HÀNG HOÁ---");
                System.out.print("Nhập mã số : ");
                    this.id = sc.nextLine();
                System.out.print("Nhập tên hàng : ");
                    this.name = sc.nextLine();
                System.out.println("NHẬP NGÀY SẢN XUẤT");
                    Date mfg = new Date();
                    mfg.nhapDate();
                    this.MFG_date = mfg;
                System.out.print("NHẬP NGÀY HẾT HẠN");
                    Date exp = new Date();
                    exp.nhapDate();
                    this.EXP_date = exp;
                done = false;
            } catch (Exception e) {
                System.out.println("Nhập sai định dạng, mời nhập lại !!!");
            }
        }
    }

    //hàm xuất thông tin hàng hoá
    public void inHangHoa(){
        System.out.println(this.id + "-" + this.name);
        System.out.println("Ngày sản xuất : ");
            this.MFG_date.hienThiNgay();
        System.out.println("Ngày hết hạn : ");
            this.EXP_date.hienThiNgay();
    }
}

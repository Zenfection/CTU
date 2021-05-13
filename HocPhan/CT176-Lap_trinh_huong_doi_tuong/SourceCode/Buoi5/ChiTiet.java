import java.util.Scanner;

public class ChiTiet{
    private int amount;
    private long cost;
    private HangHoa item;

    //--Constructor 
    public ChiTiet(){}
    public ChiTiet(int amount, long cost, HangHoa item){
        this.amount = amount;
        this.cost = cost;
        this.item = item;
    }

    //--Getter/Setter
    public int getAmount() {return amount;}
    public long getCost() {return cost;}
    public HangHoa getItem() {return item;}
    public void setAmount(int amount) {this.amount = amount;}
    public void setCost(long cost) {this.cost = cost;}
    public void setItem(HangHoa item) {this.item = item;}

    //hàm nhập thông tin hàng hoá chi tiết 
    public void nhapChiTiet(){
        Scanner sc = new Scanner(System.in);
        boolean done = true;
        while (done) {
            try {
                System.out.println("NHẬP THÔNG TIN HÀNG HOÁ");
                    HangHoa hang = new HangHoa();
                    this.item = hang;
                System.out.print("Nhập số lượng của " + this.item.getName() + " : ");
                    this.amount = Integer.parseInt(sc.nextLine());
                System.out.print("Nhập giá của " + this.item.getName() + " : ");
                    this.cost = Long.parseLong(sc.nextLine());

                done = false;
            } catch (Exception e) {
                System.out.println("Nhập sai định dạng, mời nhập lại !!!");
            }
        }
    }

    //hàm xuất thông tin hàng hoá chi tiết
    public void inChiTiet(){
        System.out.println("---THÔNG TIN HÀNG HOÁ CHI TIẾT---");
        this.item.inHangHoa();
        System.out.println("Số lượng : " + this.amount);
        System.out.println("Giá tiền : " + this.cost + "đ");
    }
}
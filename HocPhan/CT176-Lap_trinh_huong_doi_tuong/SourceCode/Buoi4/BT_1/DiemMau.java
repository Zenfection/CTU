import java.util.Scanner;
//import thư viện buổi 2 vào 
public class DiemMau extends Diem{
    private String mau;

    //Constructor
    public DiemMau(){}
    public DiemMau(int x,int y,String mau){
        super(x, y);
        this.mau = mau;
    }

    //Getter-Setter
    public String getMau() {return mau;}
    public void setMau(String mau) {this.mau = mau;}

    //hàm nhập thông tin điểm màu
    public void nhapDiemMau(){
        Scanner sc = new Scanner(System.in);
        boolean done = true;
        while (done) {
            try {
                super.nhapDiem();
                
                System.out.print("Nhập màu : ");
                String color = sc.nextLine();
                this.mau = color;
                done = false;
            } catch (Exception e) {
                System.out.println("Sai định dạng, vui lòng nhập lại");
            }
        }
    }
    
    //hàm in thông tin điểm màu
    public void hienThiDiemMau(){
        System.out.println("(" + this.getX() + "," + this.getY() + ") - " + this.mau);
    }
}
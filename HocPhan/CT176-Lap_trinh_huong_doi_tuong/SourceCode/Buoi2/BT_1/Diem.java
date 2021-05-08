import java.util.Scanner;

public class Diem {
    private int x;
    private int y;

    //Constructor
    public Diem() {}
    public Diem(int x, int y) {
        this.x = x;
        this.y = y;
    }

    //Getter-Setter
    public int getX() {return x;}
    public int getY() {return y;}
    public void setX(int x) {this.x = x;}
    public void setY(int y) {this.y = y;}

    //hàm nhập điểm
    public void nhapDiem() {
        Scanner sc = new Scanner(System.in);
        boolean done = true;
        while (done) {
            try {
                System.out.print("Nhập x = ");
                int toado1 = Integer.parseInt(sc.nextLine());
                System.out.print("Nhập y = ");
                int toado2 = Integer.parseInt(sc.nextLine());

                this.x = toado1;
                this.y = toado2;
                done = false;
            } catch (Exception e) {
                System.out.println("Bạn đã nhập sai! Mời bạn nhập lại");
            }
        }
    }

    //hàm hiển thị điểm ra màn hình
    public void hienThi() {
        System.out.println("(" + this.x + "," + this.y + ")");
    }

    //Hàm đổi toạ độ điểm với nhau
    public void doiDiem(int dx, int dy) {
        this.x = this.x + dx;
        this.y = this.y + dy;
    }

    //hàm tính khoảng cách điểm tới O
    public float khoangCach() {
        // sqrt(x^2 + y^2)
        float sumSquare = (float) (Math.pow(this.x, 2) + Math.pow(this.y, 2));
        return (float) Math.sqrt(sumSquare);
    }

    //Hàm tính khoảng cách từ điểm tới điểm khác
    public float khoangCach(Diem D) {
        // sqrt((x2 - x1)^2 + (y2 - y1)^2 )
        float sumSquare = (float) (Math.pow((D.x - this.x), 2) + Math.pow(D.y, this.y));
        return (float) Math.sqrt(sumSquare);
    }
}

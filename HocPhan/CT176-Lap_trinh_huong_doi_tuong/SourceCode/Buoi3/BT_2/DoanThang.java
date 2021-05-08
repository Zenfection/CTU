import java.util.Scanner;

public class DoanThang{
    private int d1;
    private int d2;

    //Constructor
    public DoanThang() {}
    public DoanThang(Diem a, Diem b) {
        //vector(AB) = (xB - xA; yB-yA)
        this.d1 = b.getX() - a.getX();
        this.d2 = b.getY() - a.getY();
    }
    public DoanThang(int ax, int ay, int bx, int by) {
        // vector(AB) = (xB - xA; yB-yA)
        this.d1 = bx - ax;
        this.d2 = by - ay;
    }

    //Getter-Setter
    public int getD1() {return d1;}
    public int getD2() {return d2;}
    public void setD1(int d1) {this.d1 = d1;}
    public void setD2(int d2) {this.d2 = d2;}

    //hàm nhập đoạn thảng
    public void nhapDoanThang() {
        Scanner sc = new Scanner(System.in);
        boolean done = true;
        while (done) {
            try {
                System.out.print("Nhập toạ độ điểm 1 : ");
                int diem1 = Integer.parseInt(sc.nextLine());
                System.out.print("Nhập toạ độ điểm 1 : ");
                int diem2 = Integer.parseInt(sc.nextLine());

                this.d1 = diem1;
                this.d2 = diem2;
                done = false;
            } catch (Exception e) {
                System.out.println("Nhập sai định dạng, mời nhập lại");
            }
        }
    }

    //hàm in toạ độ đoạn thẳng
    public void hienThiDoanThang() {
        System.out.println("(" + this.d1 + "," + this.d2 + ")");
    }

    //hàm tính tiến đoạn thẳng
    public void tinhTien(int dx, int dy) {
        this.d1 += dx;
        this.d2 += dy;
    }

    //hàm trả về độ dài đoạn thẳng
    public float doDaiDoanThang() {
        // AB(x,y) = sqrt(x^2 + y^2)
        return (float) Math.sqrt(Math.pow(this.d1, 2) + Math.pow(this.d2, 2));
    }

    //hàm tính góc đoạn thẳng (đơn vị độ)
    public double gocDoanThang() {
        double OA = Math.abs(this.d1);
        double OB = Math.abs(this.d2);
        double tanA = OB / OA;
        double arctanA = Math.atan(tanA);
        return 180 - Math.toDegrees(arctanA);
    }
}

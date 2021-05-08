package BT_3;

import java.util.Scanner;

public class PhanSo {
    private int tuso;
    private int mauso;

    //Constructor
    public PhanSo() {}
    public PhanSo(int tuso, int mauso) {
        this.tuso = tuso;
        this.mauso = mauso;
    }

    //Getter-Setter
    public int getTuso() {return tuso;}
    public int getMauso() {return mauso;}
    public void setTuso(int tuso) {this.tuso = tuso;}
    public void setMauso(int mauso) {this.mauso = mauso;}
    
    //Nhập phân số từ bàn phím
    public void nhapPhanSo() {
        Scanner sc = new Scanner(System.in);
        boolean done = true;
        while (done) {
            try {
                System.out.print("Nhập tử số  = ");
                int tu = Integer.parseInt(sc.nextLine());
                System.out.print("Nhập mẫu số  = ");
                int mau = Integer.parseInt(sc.nextLine());
                if (mau == 0) {
                    throw new ArithmeticException("Mẫu số phải khác 0, Vui lòng nhập lại");
                }

                this.tuso = tu;
                this.mauso = mau;
                done = false;
            } catch (Exception e) {
                System.out.println("Nhập sai định dạng, vui lòng nhập lại");
            }
        }
    }

    //hiển thị phân số
    public void hienThiPhanSo() {
        int tu = (int) (this.tuso * Math.signum(this.mauso));
        int mau = (int) (this.mauso * Math.signum(this.mauso));

        if (tu == 0) 
            System.out.println("0");
        else if (mau == 1) 
            System.out.println(tu);
        else
            System.out.println(tu + "/" + mau);
    }

    //nghịch đảo phân số (phân số cũ thay đổi)
    public void nghichDao() {
        int temp = this.tuso;
        this.tuso = this.mauso;
        this.mauso = temp;
    }

    // nghịch đảo phân số (phân số không thay đổi)
    public PhanSo giaTriNghichDao() {
        return new PhanSo(this.mauso, this.tuso);
    }

    //hàm trả về giá trị thực phân số
    public float giaTriThuc() {
        return (float) this.tuso / this.mauso;
    }

    //hàm kiểm tra phân số a > phân số b
    public boolean lonHon(PhanSo pSo) {
        return this.tuso / this.mauso - pSo.tuso / pSo.mauso > 0;
    }

    //hàm tìm ước chung lớn nhất
    private int gcd(int a, int b) {
        if (b == 0)
            return a;
        return gcd(b, a % b);
    }

    //hàm rút gọn phân số
    private void rutGonPhanSo() {
        int ucln = gcd(this.tuso, this.mauso);
        this.tuso /= ucln;
        this.mauso /= ucln;
    }

    //*Các hàm cộng trừ nhân chia phân số
    public PhanSo cong(PhanSo pSo) {
        int tuso1 = this.tuso;
        int mauso1 = this.mauso;
        int tuso2 = pSo.tuso;
        int mauso2 = pSo.mauso;
        PhanSo tongPSo = new PhanSo();

        tongPSo.mauso = mauso1 * mauso2;
        tongPSo.tuso = (tuso1 * mauso2) + (tuso2 * mauso1);
        tongPSo.rutGonPhanSo();
        return tongPSo;
    }

    public PhanSo tru(PhanSo pSo) {
        int tuso1 = this.tuso;
        int mauso1 = this.mauso;
        int tuso2 = pSo.tuso;
        int mauso2 = pSo.mauso;
        PhanSo hieuPSo = new PhanSo();

        hieuPSo.mauso = mauso1 * mauso2;
        hieuPSo.tuso = (tuso1 * mauso2) - (tuso2 * mauso1);
        hieuPSo.rutGonPhanSo();
        return hieuPSo;
    }

    public PhanSo nhan(PhanSo pSo) {
        int tuso1 = this.tuso;
        int mauso1 = this.mauso;
        int tuso2 = pSo.tuso;
        int mauso2 = pSo.mauso;
        PhanSo tichPSo = new PhanSo();

        tichPSo.tuso = tuso1 * tuso2;
        tichPSo.mauso = mauso1 * mauso2;
        tichPSo.rutGonPhanSo();
        return tichPSo;
    }

    public PhanSo chia(PhanSo pSo) {
        int tuso1 = this.tuso;
        int mauso1 = this.mauso;
        int tuso2 = pSo.tuso;
        int mauso2 = pSo.mauso;
        PhanSo thuongPSo = new PhanSo();

        thuongPSo.tuso = tuso1 * mauso2;
        thuongPSo.mauso = mauso1 * tuso2;
        thuongPSo.rutGonPhanSo();
        return thuongPSo;
    }
}

import java.util.Scanner;

public class Gach {
    private String maso;
    private String mau;
    private int soluong;
    private int chieudaiGach;
    private int chieurongGach;
    private long giaBan;

    //Constructor
    public Gach() {}
    public Gach(String maso, String mau, int soluong, int chieudaiGach, int chieurongGach, long giaBan) {
        this.maso = maso;
        this.mau = mau;
        this.soluong = soluong;
        this.chieudaiGach = chieudaiGach;
        this.chieurongGach = chieurongGach;
        this.giaBan = giaBan;
    }

    //Getter-Setter
    public String getMaso() {return maso;}
    public String getMau() {return mau;}
    public int getSoluong() {return soluong;}
    public int getChieudaiGach() {return chieudaiGach;}
    public int getChieurongGach() {return chieurongGach;}
    public long getGiaBan() {return giaBan;}
    public void setMaso(String maso) {this.maso = maso;}
    public void setMau(String mau) {this.mau = mau;}
    public void setSoluong(int soluong) {this.soluong = soluong;}
    public void setChieudaiGach(int chieudaiGach) {this.chieudaiGach = chieudaiGach;}
    public void setChieurongGach(int chieurongGach) {this.chieurongGach = chieurongGach;}
    public void setGiaBan(long giaBan) {this.giaBan = giaBan;}

    //hàm nhập thông tin Gạch
    public void nhapGach() {
        Scanner sc = new Scanner(System.in);
        boolean done = true;
        while (done) {
            try {
                System.out.print("Nhập mã số : ");
                    String id = sc.nextLine();
                System.out.print("Nhập màu : ");
                    String color = sc.nextLine();
                System.out.print("Nhập số lượng : ");
                    int amount = Integer.parseInt(sc.nextLine());
                System.out.print("Nhập chiều dài Gạch (cm) : ");
                    int longGach = Integer.parseInt(sc.nextLine());
                System.out.print("Nhập chiều rộng Gạch (cm) : ");
                    int widthGach = Integer.parseInt(sc.nextLine());
                System.out.print("Nhập giá bán : ");
                    long price = Long.parseLong(sc.nextLine());

                this.maso = id;
                this.mau = color;
                this.soluong = amount;
                this.chieudaiGach = longGach;
                this.chieurongGach = widthGach;
                this.giaBan = price;
                done = false;
            } catch (Exception e) {
                System.out.println("Nhập sai định dạng, mời nhập lại");
            }
        }
    }

    //Hàm hiển thị thông tin gạch
    public void hienThiGach() {
        System.out.println(this.maso + "-" + this.mau + "- (" + this.chieudaiGach + "cm-" + this.chieurongGach + "cm )");
        System.out.println("Số lượng : " + this.soluong + " cái");
        System.out.println("Giá bán : " + this.giaBan + "đ");
    }

    //hàm trả về giá bán lẻ
    public float giaBanLe() {
        return (float) (this.giaBan * 120) / 100 / this.soluong;
    }

    //hàm trả về diện tích nền
    public float dienTichNen() {
        return (float) this.chieudaiGach * this.chieurongGach * this.soluong;
    }

    //hàm tính ra số lượng hợp ít nhất cần lót nền
    public int soLuongHop(int D, int N) {
        int vienDai = (int) Math.ceil((double) D / this.chieudaiGach);
        int vienRong = (int) Math.ceil((double) N / this.chieurongGach);

        return (int) Math.ceil((double) vienDai * vienRong / this.soluong);
    }
}

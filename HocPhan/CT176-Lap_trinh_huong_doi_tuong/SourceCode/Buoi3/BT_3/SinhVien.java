import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Scanner;

public class SinhVien {
    private String maSV;
    private String hoTen;
    private Date ngaySinh;
    private int hpDangKy;
    private String[] tenHPDangKy;
    private String[] diemHP;

    // --Constructor
    public SinhVien() {}
    public SinhVien(String maSV, String hoTen, Date ngaySinh, int hpDangKy, String[] tenHPDangKy, String[] diemHP) {
        this.maSV = maSV;
        this.hoTen = hoTen;
        this.ngaySinh = ngaySinh;
        this.hpDangKy = hpDangKy;
        this.tenHPDangKy = tenHPDangKy;
        this.diemHP = diemHP;
    }

    //Getter/Setter
    public String[] getDiemHP() {return diemHP;}
    public String getHoTen() {return hoTen;}
    public int getHpDangKy() {return hpDangKy;}
    public String getMaSV() {return maSV;}
    public Date getNgaySinh() {return ngaySinh;}
    public String[] getTenHPDangKy() {return tenHPDangKy;}
    public void setDiemHP(String[] diemHP) {this.diemHP = diemHP;}
    public void setHoTen(String hoTen) {this.hoTen = hoTen;}
    public void setHpDangKy(int hpDangKy) {this.hpDangKy = hpDangKy;}
    public void setMaSV(String maSV) {this.maSV = maSV;}
    public void setNgaySinh(Date ngaySinh) {this.ngaySinh = ngaySinh;}
    public void setTenHPDangKy(String[] tenHPDangKy) {this.tenHPDangKy = tenHPDangKy;}

    //hàm kiểm tra điểm chữ hợp lệ
    private boolean checkDiemchu(String diemchu) {
        String[] check = { "A", "B+", "B", "C+", "C", "D+", "D", "F", "a", "b+", "b", "c+", "c", "d+", "d", "f" };
        return Arrays.asList(check).contains(diemchu);
    }

    //hàm nhập thông tin sinh viên
    public void nhapSinhVien() {
        Scanner sc = new Scanner(System.in);
        boolean done = true;
        while (done) {
            try {
                System.out.print("Nhập mã Sinh Viên : ");
                this.maSV = sc.nextLine();
                System.out.print("Nhập họ tên : ");
                this.hoTen = sc.nextLine();
                System.out.print("Nhập ngày sinh (cách nhau bởi /) : ");
                String d = sc.nextLine();
                SimpleDateFormat dfm = new SimpleDateFormat("dd/MM/yyyy");
                this.ngaySinh = dfm.parse(d);
                System.out.print("Số lượng học phần đăng ký : ");
                this.hpDangKy = Integer.parseInt(sc.nextLine());

                if (this.hpDangKy <= 0) {
                    this.tenHPDangKy = new String[0];
                    this.diemHP = new String[0];
                    done = false;
                    continue;
                }
                this.tenHPDangKy = new String[this.hpDangKy];
                for (int i = 0; i < this.hpDangKy; i++) {
                    System.out.print("Nhập tên học phần " + (i + 1) + " : ");
                    String temp = sc.nextLine();
                    this.tenHPDangKy[i] = temp;
                }

                this.diemHP = new String[this.hpDangKy];
                for (int i = 0; i < this.hpDangKy; i++) {
                    boolean check = true;
                    while (check) {
                        System.out.print("Nhập điểm học phần " + this.tenHPDangKy[i] + " : ");
                        String temp = sc.nextLine();
                        if (!checkDiemchu(temp)) {
                            System.out.println("Điểm chữ không tồn tại, mời nhập lại");
                            continue;
                        }
                        this.diemHP[i] = temp;
                        check = false;
                    }
                }

                done = false;
            } catch (Exception e) {
                System.out.println("Sai định dạng, mời bạn nhập lại");
            }
        }
    }

    public void inThongTinSV() {
        SimpleDateFormat dfm = new SimpleDateFormat("dd/MM/yyyy");
        System.out.println(this.maSV + "-" + this.hoTen + "-" + dfm.format(this.ngaySinh));
        if (this.hpDangKy <= 0) {
            System.out.println("Chưa đăng ký học phần nào");
        } 
        else {
            System.out.println("Đã đăng ký " + this.hpDangKy + " gồm : ");
            for (int i = 0; i < this.hpDangKy; i++) {
                System.out.println(this.tenHPDangKy[i] + " ==> điểm  " + this.diemHP[i]);
            }
        }
    }

    private float diemchu_diemso(String diemchu) {
        if (diemchu.equalsIgnoreCase("A")) return 4f;
        if (diemchu.equalsIgnoreCase("B+")) return 3.5f;
        if (diemchu.equalsIgnoreCase("B")) return 3f;
        if (diemchu.equalsIgnoreCase("C+")) return 2.5f;
        if (diemchu.equalsIgnoreCase("C")) return 2f;
        if (diemchu.equalsIgnoreCase("D+")) return 1.5f;
        if (diemchu.equalsIgnoreCase("D")) return 1f;
        return 0f;
    }

    public float diemTB() {
        float sum = 0;
        for (int i = 0; i < this.hpDangKy; i++) {
            float diemso = diemchu_diemso(this.diemHP[i]);
            sum += diemso;
        }
        return sum / this.hpDangKy;
    }

    public void dangkyHP(String tenHP) {
        Scanner sc = new Scanner(System.in);
        List<String> nameHP = new ArrayList<String>(Arrays.asList(this.tenHPDangKy));
        List<String> scoreHP = new ArrayList<String>(Arrays.asList(this.diemHP));
        boolean done = true;
        while (done) {
            try {
                System.out.print("Nhập điểm học phần " + tenHP + " : ");
                String diem = sc.nextLine();

                nameHP.add(tenHP);
                scoreHP.add(diem);

                this.tenHPDangKy = nameHP.toArray(new String[0]);
                this.diemHP = scoreHP.toArray(new String[0]);
                this.hpDangKy++;
                
                done = false;
            } catch (Exception e) {
                System.out.println("Sai định dạng");
            }
        }
    }

    public void xoaHP() {
        Scanner sc = new Scanner(System.in);
        List<String> nameHP = new ArrayList<String>(Arrays.asList(this.tenHPDangKy));
        List<String> scoreHP = new ArrayList<String>(Arrays.asList(this.diemHP));
        boolean done = true;
        while (done) {
            try {
                System.out.print("Nhập thứ tự học phần muốn xoá (bắt đầu từ 0) : ");
                int n = Integer.parseInt(sc.nextLine());
                nameHP.remove(n);
                scoreHP.remove(n);

                this.tenHPDangKy = nameHP.toArray(new String[0]);
                this.diemHP = scoreHP.toArray(new String[0]);
                this.hpDangKy--;
                done = false;
            } catch (Exception e) {
                System.out.println("Sai định dạng, mời bạn nhập lại");
            }
        }
    }
}
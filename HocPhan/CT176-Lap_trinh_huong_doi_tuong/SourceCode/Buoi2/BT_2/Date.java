import java.time.Year;
import java.util.Arrays;
import java.util.Scanner;

public class Date {
    private int ngay;
    private int thang;
    private int nam;

    //Constructor
    public Date() {}
    public Date(int ngay, int thang, int nam) {
        this.ngay = ngay;
        this.thang = thang;
        this.nam = nam;
    }

    //Getter-Setter
    public int getNgay() {return ngay;}
    public int getThang() {return thang;}
    public int getNam() {return nam;}
    public void setNgay(int ngay) {this.ngay = ngay;}
    public void setThang(int thang) {this.thang = thang;}
    public void setNam(int nam) {this.nam = nam;}

    //hàm nhập ngày-tháng-năm
    public void nhapDate() {
        Scanner sc = new Scanner(System.in);
        boolean done = true;
        while (done) {
            try {
                System.out.print("Nhập ngày = ");
                int day = Integer.parseInt(sc.nextLine());
                System.out.print("Nhập tháng = ");
                int month = Integer.parseInt(sc.nextLine());
                System.out.print("Nhập năm = ");
                int year = Integer.parseInt(sc.nextLine());

                //check 
                if (ngay <= 0 || thang <= 0 || nam <= 0) {
                    throw new ArithmeticException("Không để đặt số âm");
                }

                this.ngay = day;
                this.thang = month;
                this.nam = year;
                done = false;
            } catch (Exception e) {
                System.out.println("Bạn đã nhập sai! Mời bạn nhập lại");
            }
        }
    }

    //hàm hiển thị ngày-tháng-năm
    public void hienThiNgay() {
        System.out.println(this.ngay + "/" + this.thang + "/" + this.nam);
    }

    //kiểm tra ngày hợp hệ 
    public boolean hopLe() {
        int day = this.ngay;
        int month = this.thang;
        int year = this.nam;

        if (month <= 0 || month > 12 || year < 0) {
            return false;
        }
        if (month == 2) {
            return day <= 28 + (Year.of(year).isLeap() ? 1 : 0);
        }
        int[] month30Days = {4,6,9,11};
        boolean check = Arrays.binarySearch(month30Days, this.thang) >= 0;
        return day <= (check ? 30 : 31);
    }

    //Hàm cộng n ngày
    public Date congNgay(int n) {
        int[] maxDayInMonth = { 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
        Date newDate = new Date(this.ngay + n, this.thang, this.nam);

        if (Year.of(newDate.nam).isLeap()) {
            maxDayInMonth[2] = 29;
        }
        while (newDate.ngay > maxDayInMonth[newDate.thang]) {
            newDate.ngay -= maxDayInMonth[newDate.thang];
            newDate.thang++;
            if (newDate.thang > 12) {
                newDate.thang = 1;
                newDate.nam++;
            }
        }
        return newDate;
    }

    //hàm cộng 1 ngày
    public void ngayHomSau() {
        Date tempDate = this.congNgay(1);
        this.ngay = tempDate.ngay;
        this.thang = tempDate.thang;
        this.nam = tempDate.nam;
    }
}
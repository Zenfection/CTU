import java.util.ArrayList;
import java.util.Scanner;

public class SDSinhVien {

    public static void main(String[] args) {
        //Tạo sinh viên a, nhập thông tin sinh viên và đăng ký thêm một học phần là "LTHDT", in thông tinh sinh viê
        SinhVien a = new SinhVien();
        a.nhapSinhVien();
        a.dangkyHP("LTDHT");
        a.inThongTinSV();

        //Tạo 1 danh sách sinh viên. Nhập thông tin cho danh sách sinh viên trên.
        Scanner sc = new Scanner(System.in);
        ArrayList<SinhVien> dsSinhVien = new ArrayList<SinhVien>();
        System.out.print("Nhập n sinh viên cần thêm vào danh sách : ");
        int n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            SinhVien temp = new SinhVien();
            temp.nhapSinhVien();
            dsSinhVien.add(temp);
        }

        // + Tìm các sinh viên bị cảnh báo học vụ.
        for (SinhVien sv : dsSinhVien) {
            float diemTB = sv.diemTB();
            if (diemTB < 0.8) {
                System.out.println("Sinh viên đã bị cảnh cáo học vụ");
                System.out.print("Thông tin sv : ");
                sv.inThongTinSV();
            }
        }

        // + Tìm sinh viên có điểm trung bình cao nhất lớp.
        float maxDiem = dsSinhVien.get(0).diemTB();
        int maxPos = 0;
        int lengthSV = dsSinhVien.size();
        for (int i = 1; i < lengthSV; i++) {
            float temp = dsSinhVien.get(i).diemTB();
            if (maxDiem < temp) {
                maxPos = i;
            }
        }
        System.out.print("Sinh viên có điểm TB cao nhất là : ");
        dsSinhVien.get(maxPos).inThongTinSV();

        // + Hiển thị danh sách sinh viên trên theo thứ tự Alphabet của Tên.
        for (int i = 0; i < lengthSV - 1; i++) {
            for (int j = 1; j < lengthSV; j++) {
                String temp1 = dsSinhVien.get(i).getHoTen();
                String temp2 = dsSinhVien.get(j).getHoTen();
                if (temp1.compareToIgnoreCase(temp2) > 0) {
                    SinhVien temp = dsSinhVien.get(i);
                    dsSinhVien.set(i, dsSinhVien.get(j));
                    dsSinhVien.set(j, temp);
                }
            }
        }
    }
}

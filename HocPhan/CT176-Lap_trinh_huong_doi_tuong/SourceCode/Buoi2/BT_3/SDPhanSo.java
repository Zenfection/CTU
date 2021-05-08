import java.util.ArrayList;
import java.util.Scanner;

public class SDPhanSo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        //Tạo a=3/7 và b=4/9, in chúng ra màn hình
        PhanSo a = new PhanSo(3, 7);
        PhanSo b = new PhanSo(4, 9);
        a.hienThiPhanSo();
        b.hienThiPhanSo();

        //tạo x và y nhập từ bàn phím, in chúng ra màn hình
        PhanSo x = new PhanSo();
        PhanSo y = new PhanSo();
        x.nhapPhanSo();
        y.nhapPhanSo();
        x.hienThiPhanSo();
        y.hienThiPhanSo();

        //Hiển thị nghịch đảo của x (không thay đổi x)
        PhanSo x_Inverse = x.giaTriNghichDao();
        x_Inverse.hienThiPhanSo();

        //Tính tổng x và y và in ra kết quả
        PhanSo sumXY = x.cong(y);
        sumXY.hienThiPhanSo();

        //nhập danh sách có n phân số
        System.out.print("Nhập n phân số = ");
        int n = sc.nextInt();
        ArrayList<PhanSo> dSachPhanSo = new ArrayList<PhanSo>();
        for (int i = 0; i < n; i++) {
            PhanSo pSo = new PhanSo();
            pSo.nhapPhanSo();
            dSachPhanSo.add(pSo);
        }

        //tính tổng n phân số trong danh sách
        PhanSo sumPhanSo = dSachPhanSo.get(0);
        for (int i = 1; i < n; i++) {
            sumPhanSo = sumPhanSo.cong(dSachPhanSo.get(i));
        }
        System.out.print("Tổng " + n + " phân số = ");
        sumPhanSo.hienThiPhanSo();

        //tìm phân số lớn nhất trong danh sách
        PhanSo maxPhanSo = dSachPhanSo.get(0);
        for (int i = 1; i < n; i++) {
            if (dSachPhanSo.get(i).lonHon(maxPhanSo)) {
                maxPhanSo = dSachPhanSo.get(i);
            }
        }
        System.out.print("Lớn nhất trong " + n + " phân số là ");
        maxPhanSo.hienThiPhanSo();

        //sắp xếp danh sách theo thứ tự tăng dần
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                PhanSo temp1 = dSachPhanSo.get(j);
                PhanSo temp2 = dSachPhanSo.get(j + 1);
                if (temp1.lonHon(temp2)) {
                    dSachPhanSo.set(j, temp2);
                    dSachPhanSo.set(j + 1, temp1);
                }
            }
        }
    }
}

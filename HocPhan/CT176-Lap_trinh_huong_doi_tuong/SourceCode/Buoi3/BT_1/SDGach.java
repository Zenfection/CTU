import java.util.ArrayList;
import java.util.Scanner;

public class SDGach{
    public static void main(String[] args) {
        //Nhập danh sách gồm n gạch
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhập n = ");
        int n = sc.nextInt();
        ArrayList<Gach> dsGach = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            Gach g = new Gach();
            g.nhapGach();
            dsGach.add(g);
        }

        //hiển thị thông tin loại gạch vừa nhập
        for (Gach gach : dsGach) {
            System.out.print("\n");
            gach.hienThiGach();
        }

        //hiển thị loại gạch có chi phí thấp nhất
        int min = 0;
        for (int i = 1; i < dsGach.size(); i++) {
            float price1 = dsGach.get(min).getGiaBan() / dsGach.get(min).dienTichNen();
            float price2 = dsGach.get(i).getGiaBan() / dsGach.get(i).dienTichNen();
            if (price1 > price2) {
                min = i;
            }
        }
        System.out.println("--- Gạch rẻ nhất là ---");
        dsGach.get(min).hienThiGach();

        // tính chi phí mua gạch khi lót 1 diện tích có chiều ngang là 5m, chiều dài là 20m, khi dùng từng loại gạch trên
        int Dai = 500; //cm
        int Rong = 2000; //cm
        for (Gach gach : dsGach) {
            float giaBanLe = gach.giaBanLe();
            int slHop = gach.soLuongHop(Dai, Rong);
            int giaTien = (int) Math.ceil(giaBanLe * slHop);
            System.out.println("Chi phí cho loại gạch " + gach.getMau() + " là " + giaTien + "đ");
        }
        sc.close();
    }
}
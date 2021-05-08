import java.util.Scanner;

public class BT_4 {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        int a,b;
        try {
            System.out.print("Nhập a = ");
            a = Integer.parseInt(sc.nextLine());
            System.out.print("Nhập b = ");
            b = Integer.parseInt(sc.nextLine());
            System.out.println("Tổng a và b là " + (a + b));
        } catch (Exception e) {
            System.out.println("Bạn nhập sai định dạng số nguyên");
        }
    }
}

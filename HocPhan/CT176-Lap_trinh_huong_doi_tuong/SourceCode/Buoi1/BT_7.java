import java.util.Scanner;

public class BT_7 {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhập họ và tên : ");
        String fullName = sc.nextLine();
        String[] splitFullName = fullName.split(" ");
        int length = splitFullName.length;
        System.out.println("Tên của bạn là : " + splitFullName[length - 1]);
        sc.close();
    }
}

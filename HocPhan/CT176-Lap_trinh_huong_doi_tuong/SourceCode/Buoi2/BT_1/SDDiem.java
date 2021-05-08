public class SDDiem {
    public static void main(String[] args) {
        //Tạo A có giá trị 3,4 và in ra màn hình
        Diem A = new Diem(3, 4);
        System.out.print("Điểm A ");
        A.hienThi();

        // Tạo B với giá trị nhập từ bàn phím, in ra màn hình
        Diem B = new Diem();
        B.nhapDiem();
        System.out.print("Điểm B ");
        B.hienThi();

        // Tạo C đối xứng với B qua gốc toạ độ, in ra màn hình
        Diem C = new Diem(-B.getX(), -B.getY());
        System.out.print("Điểm C ");
        C.hienThi();

        //hiển thị khoảng cách từ B tới O
        float distance_Original = B.khoangCach();
        System.out.println("Khoảng cách từ B tới O là " + distance_Original);

        //hiển thị khoảng cách từ A tới B
        float distance_Other = A.khoangCach(B);
        System.out.println("Khoảng cách từ A tới B là " + distance_Other);
    }
}

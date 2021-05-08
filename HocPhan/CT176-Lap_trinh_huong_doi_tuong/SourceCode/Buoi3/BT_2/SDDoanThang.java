public class SDDoanThang {
    public static void main(String[] args) {
        //Tạo A(2,5) và B(20,35), tạo đoạn thảng AB.Tính tiến AB đi đoạn (5,3)
        Diem A = new Diem(2, 5);
        Diem B = new Diem(20, 35);
        DoanThang AB = new DoanThang(A, B);
        AB.hienThiDoanThang();
        AB.tinhTien(5, 3);

        //Tạo đoạn thảng CD nhập từ bàn phím
        DoanThang CD = new DoanThang();
        CD.nhapDoanThang();

        //In độ dài CD và góc CD với trục hoành
        System.out.println("Độ dài đoạn CD = " + CD.doDaiDoanThang());
        System.out.println("Góc CD với trục hoành = " + CD.gocDoanThang() + " độ");
    }
}

public class SDDiemMau {
	public static void main(String[] args) {
        //Tạo điểm màu A có toạ độ (5,10) và màu trắng, in ra thông tin
		DiemMau A = new DiemMau(5,10,"trắng");
        A.hienThiDiemMau();

        //Tạo điểm màu B tổng quát nhập từ bàn phím, 
        DiemMau B = new DiemMau();
        B.nhapDiemMau();

        // dời điểm B (10,8) đơn vị và in ra màn hình
        B.doiDiem(10, 8);
        B.hienThiDiemMau();

        //gàn màu mới cho B là màu vàng, in ra màn hình
        B.setMau("vàng");
        B.hienThiDiemMau();
	}
}

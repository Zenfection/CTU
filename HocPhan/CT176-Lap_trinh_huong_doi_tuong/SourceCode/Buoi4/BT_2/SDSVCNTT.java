import java.util.ArrayList;
import java.util.Scanner;

public class SDSVCNTT {

	public static void main(String[] args) {
		//Tạo danh sách sinhVien CNTT, nhập thông tin danh sách đó
		Scanner sc = new Scanner(System.in);
		System.out.print("Nhập số Sinh Viên : ");
		int n = sc.nextInt();
		ArrayList<SVCNTT> dsCNTT = new ArrayList<SVCNTT>();
		for(int i = 0; i < n;i++){
			SVCNTT temp = new SVCNTT();
			temp.nhapSVCNTT();
			dsCNTT.add(temp);
		}
		
		// Nhập vào một địa chỉ email. 
		//Tìm tài khoản của sinh viên đó có địa chỉ email trên và in ra kết quả học tập của sinh viên đó
		System.out.print("Nhập địa chỉ mail : ");
        String diachimail = sc.next();sc.nextLine();
        
		for (SVCNTT cntt : dsCNTT) {
			if(cntt.getEmail().equals(diachimail)){
				System.out.println("Tìm thấy sinh viên");
				cntt.inThongTinSV();
				System.out.println("Điểm trung bình " + cntt.diemTB() + "đ");
			}
		}
	}
}

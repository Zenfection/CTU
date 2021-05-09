//!import thư viện buổi 3 vào 

import java.util.Scanner;

public class SVCNTT extends SinhVien{
	private String taikhoan;
	private String matkhau;
	private String email;
	
	//Constructor
	public SVCNTT(){}
	public SVCNTT(String taikhoan,String matkhau,String email){
		super();
		this.taikhoan = taikhoan;
		this.matkhau = matkhau;
		this.email = email;
	}
	
	//Start: Getter-Setter
	public String getTaikhoan() {return taikhoan;}
	public void setTaikhoan(String taikhoan) {this.taikhoan = taikhoan;}
	public String getMatkhau() {return matkhau;}
	public void setMatkhau(String matkhau) {this.matkhau = matkhau;}
	public String getEmail() {return email;}
	public void setEmail(String email) {this.email = email;}
	
	//hàm check email hợp lệ
	private boolean checkEmail(String email){
		return email.contains("@") && email.contains(".com");
	}

	//hàm nhập thông tin sinh viên CNTT
	public void nhapSVCNTT(){
		Scanner sc = new Scanner(System.in);
		boolean done = true;
		while (done) {
			try {
				System.out.print("Nhập tài khoản : ");
	                String account = sc.nextLine();
	            System.out.print("Nhập mật khẩu : ");
	                String password = sc.nextLine();
	            System.out.print("Nhập Email : ");
	                String diachimail = sc.nextLine();
	                
	            if(!checkEmail(diachimail)){
	                System.out.println("Email không chuẩn, mời nhập lại");
	                continue;
				}

	            this.taikhoan = account;
	            this.matkhau = password;
	            this.email = diachimail;
	            super.nhapSinhVien();
	            done = false;
	        } catch (Exception e) {
	            System.out.println("Nhập sai định dạng, mời nhập lại");
	        }
	    }
	}
}

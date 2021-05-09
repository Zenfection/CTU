import java.util.ArrayList;
import java.util.Scanner;

public class SDConVat {
	public static class SDDongVat{
		//hàm nhập n con vật trong danh sách
	    public static void nhapdsConVat(int n,ArrayList<ConVat> dsCVat){
	        Scanner sc = new Scanner(System.in);
	        int i = 1;
	        while (dsCVat.size() != n) {
	            try {
	                System.out.print("Nhập loại con vật "+i+" (bò/heo/dê) : ");
	                String convat = sc.nextLine();
	                if(convat.equalsIgnoreCase("bò")){
	                    ConBo Bo = new ConBo();
	                    Bo.nhapConVat();
	                    dsCVat.add(Bo);
	                }
	                else if(convat.equalsIgnoreCase("heo")){
	                    ConHeo Heo = new ConHeo();
	                    Heo.nhapConVat();
	                    dsCVat.add(Heo);
	                }
	                else if(convat.equalsIgnoreCase("dê")){
	                    ConDe De = new ConDe();
	                    De.nhapConVat();
	                    dsCVat.add(De);
	                }
	                else{
	                    System.out.println("Con vật hiện không có trong danh sách:");
	                }
	                i++;
	            } catch (Exception e) {
	                System.out.println("Nhập sai định dạng, mời nhập lại");
	            }
	        }
	    }
	public static void main(String[] args) {
		//Tạo ra n con vật bất kỳ gồm 3 loại trên. Nhập thông tin cho các con vật.
		Scanner sc = new Scanner(System.in);
        ArrayList<ConVat> dsConVat = new ArrayList<ConVat>();
        System.out.print("Nhập số con vật : ");
        int n = sc.nextInt();
    
        nhapdsConVat(n, dsConVat);

        //cho n con vật đó kêu
        for (ConVat cVat : dsConVat) {
            cVat.tiengKeu();
        }
        sc.close();
	}
}
	}

import java.util.Scanner;

public abstract class ConVat {

    private String giong;
    private String mau;
    private float cannang;
    
    //Start: Constructor
    public ConVat(){}
    public ConVat(String giong,String mau,float cannang){
    	this.giong = giong;
    	this.mau = mau;
    	this.cannang = cannang;
    }
    //End:
    
    //-- Start : Getter/Setter --
    public String getGiong() {return giong;}
    public float getCannang() {return cannang;}
    public String getMau() {return mau;}
    public void setGiong(String giong) {this.giong = giong;}
    public void setCannang(float cannang) {this.cannang = cannang;}
    public void setMau(String mau) {this.mau = mau;}
    //-- End : Getter/Setter --
    
    public abstract void tiengKeu();

    public void nhapConVat(){
        Scanner sc = new Scanner(System.in);
        boolean done = true;
        while (done) {
            try {
                System.out.print("Nhập giống con vật : ");
                String species = sc.nextLine();
                System.out.print("Nhập màu con vật : ");
                String colorSkin = sc.nextLine();
                System.out.print("Nhập cân nặng con vật : ");
                float weight = Float.parseFloat(sc.nextLine());

                this.giong = species;
                this.mau = colorSkin;
                this.cannang = weight;
                done = false;
            } catch (Exception e) {
                System.out.println("Nhập sai định dạng, mời nhập lại");
            }
        }
    }
    
    public void hienThiConVat(){
        System.out.println("Thông tin con vật : " + this.giong + " - " + this.mau + " - " + this.cannang + "kg");
    }
}

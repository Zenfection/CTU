public class BT_6 {
    //hàm check số nguyên tố
    public static boolean checkPrime(int n){
        if(n < 2)
            return true;
        else{
            for (int i = 2; i <= Math.sqrt(n); i++) {
                if(n % i == 0)
                    return false;
            }
        }
        return true;
    }

    //hàm chuyển thập phân sang nhị phân
    public static String numberToBinary(int n){
        return Integer.toBinaryString(n);
    }
    
    public static void main(String[] args) throws Exception {
        //Tự check Code
    }
}

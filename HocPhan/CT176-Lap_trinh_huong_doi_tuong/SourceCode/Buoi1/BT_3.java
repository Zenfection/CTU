import java.util.Scanner;

public class BT_3 {
    //hàm nhập danh sách số thực
    public static float[] inputList(int n){
        Scanner sc = new Scanner(System.in);
        float[] floatNumber = new float[n];
        float x;
        try {
            for (int i = 0; i < n; i++) {
                System.out.print("Nhập x" + i + " =");
                float as = Float.parseFloat(sc.nextLine());
                floatNumber[i] = x;
            }
        } catch (Exception e) {
            System.out.println("Bạn định dạng không phải số thực");
        }
        return floatNumber;
    }

    // hàm tìm số thực lớn nhất trong danh sách
    public static float maxNumber(float[] List){
        float max = List[0];
        for (float item : List) {
            if(max < item){
                max = item;
            }
        }
        return max;
    }

    //hàm tính tổng các phần tử trong danh sách
    public static float sumNumber(float[] List){
        float sum = 0;
        for (float item : List) {
            sum += item;
        }
        return sum;
    }

    public static void main(String[] args) throws Exception {
        //Tự test code
    }
}

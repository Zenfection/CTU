import java.util.Scanner;

public class BT_8 {
    //hàm nhập danh sách số nguyên
    public static int[] inputList(int n){
        Scanner sc = new Scanner(System.in);
        int[] intNumber = new int[n];
        for (int i = 0; i < n; i++) {
            System.out.println("Nhập i" + i + "= ");
            int x = sc.nextInt();
            intNumber[i] = x;
        }
        return intNumber;
    }

    //hàm tìm có bao nhiêu x trong danh sách
    public static int countFind(int x,int[] List){
        int find = 0;
        for (int i : List) {
            if(i == x){
                find++;
            }
        }   
        return find;
    }

    //hàm sắp xếp danh sách tăng dần
    public static void sortAscending(int[] List){
        Arrays.sort(List);
    }

    //hàm in danh sách
    public static void printList(int[] List){
        for (int i : List) {
            System.out.print(i+" ");
        }
    }
    public static void main(String[] args) throws Exception {
        //Tự check code
    }
}

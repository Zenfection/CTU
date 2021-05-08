public class BT_5 {
    //hàm giải pt bậc 1
    public static void PT_bac1(float a, float b) {
        if (a == 0) {
            if (b == 0)
                System.out.println("Phương trình vô số nghiệm");
            else
                System.out.println("Phương trình vô nghiệm");
        } else {
            System.out.println("Phương trình có nghiệm x = " + (-b / a));
        }
    }
    
    //hàm giải pt bậc 2
    public static void PT_bac2(float a, float b, float c) {
        if (a == 0) {
            PT_bac1(b, c);
        } else {
            double delta = (Math.pow(b, 2) - 4 * a * c);
            if (delta < 0)
                System.out.println("Phương trình vô nghiệm");
            else if (delta == 0)
                System.out.println("Phương trình có nghiệm kép x = " + (-b / (2 * a)));
            else {
                double x1 = (-b + Math.sqrt(delta)) / (2 * a);
                double x2 = (-b - Math.sqrt(delta)) / (2 * a);
                System.out.println("Phương trình có 2 nghiệm phân biệt");
                System.out.println("x1 = " + x1);
                System.out.println("x2 = " + x2);
            }
        }
    }
    public static void main(String[] args) throws Exception {
        PT_bac1(3.4f, 2.5f);
        PT_bac2(2.5f, 3.5f, 1.2f);
    }
}

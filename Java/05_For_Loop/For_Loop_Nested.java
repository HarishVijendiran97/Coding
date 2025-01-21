public class For_Loop_Nested {
    public static void main(String[] args) {

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        System.out.println();

        for (int k = 1; k < 10; k++) {
            for (int m = 0; m < k; m++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}

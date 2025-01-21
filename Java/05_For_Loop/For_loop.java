import java.util.Scanner;

class For_Loop {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        System.out.print("Enter a: ");
        int a = scan.nextInt();
        System.out.print("Enter b: ");
        int b = scan.nextInt();
        scan.close();

        for (int i = a; i <= b; i++) {
            System.out.println(i);
        }

    }
}

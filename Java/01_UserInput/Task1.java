import java.util.Scanner;

public class Task1 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter a, b, c value: ");

        int a = scan.nextInt();
        int b = scan.nextInt();
        int c = scan.nextInt();
        scan.close();

        int d = a * b * c;

        int e = a + b + c;

        int result = d / e;

        System.out.println(d);
        System.out.println(e);
        System.out.println("Result: " + result);
    }
}

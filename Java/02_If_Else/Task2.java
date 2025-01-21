import java.util.Scanner;

class Task2 {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int num = scan.nextInt();
        scan.close();

        if (num % 3 == 0 && num % 5 == 0) {
            System.out.println("Number is divisible by 3 or 5");
        } else {
            System.out.println("Number is not divisible by 3 or 5");
        }

    }
}

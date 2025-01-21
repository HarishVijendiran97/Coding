import java.util.Scanner;

class Task1 {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int num = scan.nextInt();
        scan.close();

        if (num % 2 == 0) {
            System.out.println("even number");
        } else {
            System.out.println("odd number");
        }

        if (num > 5) {
            System.out.println("Number is greater than 5");
        } else {
            System.out.println("Number is not greater than 5");
        }

        if (num != 5) {
            System.out.println("Number is not 5");
        } else {
            System.out.println("Number is 5");
        }

    }
}

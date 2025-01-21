

import java.util.Scanner;

public class Find_OddOrEven {

    void isOddOrEven(int num) {
        if (num % 2 == 0) {
            System.out.println("Is Even");
        } else {
            System.out.println("Is Odd");
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = scanner.nextInt();
        scanner.close();
        Find_OddOrEven findOddOrEven = new Find_OddOrEven();
        findOddOrEven.isOddOrEven(num);
    }
}

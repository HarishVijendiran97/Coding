package Java_Problems;

import java.util.Scanner;

class Check_For_Binary {
    public int factorial(int num) {
        int total = 1;
        for (int i = 1; i <= num; i++) {
            total*=i;
        }
        return total;
    }
    
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the numbers: ");
        int num = scan.nextInt();
        scan.close();

        Check_For_Binary check = new Check_For_Binary();

        int result = check.factorial(num);

        System.out.println(result);

    }
}

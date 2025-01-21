import java.util.Scanner;

public class Array_Sum {
    public static void main(String[] args) {
        
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter array size: ");
        int size = scan.nextInt();
        int[] numbers = new int[size];
        System.out.print("Enter "+size+" numbers: ");
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = scan.nextInt();
        }
        scan.close();

        int sum = 0;
        for (int i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }

        System.out.println("Sum of the numbers: " + sum);
    }

}

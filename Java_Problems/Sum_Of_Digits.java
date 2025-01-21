package Java_Problems;
import java.util.Scanner;

public class Sum_Of_Digits {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the numbers: ");
        int num = scan.nextInt();
        scan.close();

        Sum_Of_Digits sumValue = new Sum_Of_Digits();

        int result = sumValue.sumOfDigit(num);

        System.out.println(result);


    }

    public int sumOfDigit(int num){
        int sum = 0;
        while(num!=0){
            sum += num%10;
            num /= 10;
        }
        return sum;
    }
}

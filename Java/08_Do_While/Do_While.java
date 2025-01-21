import java.util.Scanner;

public class Do_While {
    public static void main(String[] args) {
        int num = 0;
        Scanner scan = new Scanner(System.in);

        do{
            System.out.print("Enter a number > 10: ");
            num = scan.nextInt();
        }while(num < 10);
        scan.close();
    }
}

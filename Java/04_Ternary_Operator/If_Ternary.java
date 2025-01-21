import java.util.Scanner;

class If_Ternary {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter a number: ");

        int num = scan.nextInt();

        scan.close();

        boolean rain = (num%2==0);
        String result = (rain)?"yes":"no";
        
        System.out.println("Is the given number is even? " + ((num % 2 == 0) ? "yes" : "no"));
        System.out.println("It will rain? " + result);
    }
}

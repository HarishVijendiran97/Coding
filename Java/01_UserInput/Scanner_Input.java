
import java.util.Scanner;

class Scanner_Input {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        System.out.println("Enter the name: ");

        String name = scan.nextLine();

        System.out.println("Enter your age: ");

        int age = scan.nextInt();
        scan.nextLine(); // Consume the newline left-over//+

        System.out.println("Enter the address: ");

        String address = scan.nextLine();

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Address: " + address);

        scan.close();
    }
}
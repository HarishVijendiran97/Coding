
import java.util.Scanner;

public class Store {
    void soap(int money) {
        System.out.println(money);
        System.out.println("Soap Purchased");
    }

    void sum(int a, int b) {
        System.out.println("a + b: " + (a + b));
    }

    int returning(int money) {
        int soap_price = 20;
        int rem = money - soap_price;
        return rem;
    }

    String myName(){
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name:");
        
        String name = scanner.nextLine();

        scanner.close();

        return name;

    }
    public static void main(String[] args) {
        Store storeObj = new Store();
        
        storeObj.soap(20);
        storeObj.sum(12, 25);
        int remaining = storeObj.returning(30);
        System.out.println("Remaining: " + remaining);
        System.out.println("Name: " + storeObj.myName());
    }
}

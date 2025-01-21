package Java_Problems;

import java.util.Scanner;

class Check_For_Binary {
    public boolean isBinary(String num) {

        for (int i = 0; i < num.length(); i++) {
            if ((num.charAt(i) != '0') && (num.charAt(i) != '1')) {
                return false;
            }
        }
        return true;
    }
    
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the numbers: ");
        String num = scan.nextLine();
        scan.close();

        Check_For_Binary check = new Check_For_Binary();

        boolean result = check.isBinary(num);

        System.out.println(result);

    }
}

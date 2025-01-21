import java.util.Scanner;

class String_Equals {
    public static void main(String[] args){

        Scanner scan = new Scanner(System.in);

        System.out.println("Enter the word win or lose: ");

        String RCB = scan.nextLine().toLowerCase();

        scan.close();

        if(RCB.equals("win")){
            System.out.println("The team won!");
        }else if(RCB.equals("lose")){
            System.out.println("The team lost!");
        }else{
            System.out.println("Invalid input. Please enter 'win' or 'lose'.");
        }
    }
}

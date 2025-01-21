import java.util.Scanner;

class If_Else {
    public static void main(String[] args){

        Scanner scan = new Scanner(System.in);

        System.out.print("Enter your salary: ");
        int salary = scan.nextInt();
        System.out.println("Your age: ");
        int age = scan.nextInt();
        System.out.println("Enter required loan: ");
        int loan = scan.nextInt();
        scan.close();

        if(salary>=20000 && age>=25){

            if(loan<=50000){
                System.out.println("you are eligible for a loan");
            }else{
                System.out.println("maximum loan is 50,000");
            }
        }else{
            System.out.println("You are not eligible for a loan");
        }

    }    
}

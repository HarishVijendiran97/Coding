import java.util.Scanner;

class Task2 {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter name: ");
        
        String name = scan.nextLine();
        System.out.print("Enter score: ");
        int score = scan.nextInt();
        System.out.print("Enter department: ");
        scan.nextLine();
        String department = scan.nextLine();
        scan.close();

        System.out.println("Student name: " + name);
        System.out.println("Score: " + (Float.valueOf(score))/10+ "/10");
        System.out.println("Department: " + department);
    }
}

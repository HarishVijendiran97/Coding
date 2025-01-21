package Java_Problems;

import java.util.List;
import java.util.Scanner;
import java.util.Arrays;

class Swap_2_Variables {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter a: ");
        int a = scan.nextInt();
        System.out.print("Enter b: ");
        int b = scan.nextInt();
        scan.close();

        Swap_2_Variables swap = new Swap_2_Variables();

        List<Integer> result = swap.get(a, b);

        System.out.println("a = " + result.get(0));
        System.out.print("b = " + result.get(1));

    }

    public List<Integer> get(int a,int b)
    {   

        a = a + b;//a = 5 + 6 = 11
        b = a - b;//b = 11 - 6 = 5
        a = a - b;//a = 11 - 5 = 6

        return Arrays.asList(a,b);
    }
}

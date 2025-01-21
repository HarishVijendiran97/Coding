import java.util.Random;

class While_Loop {
    public static void main(String[] args) {

        Random ranNum = new Random();
        int count = 0;
        int number = 0;

        while (number != 5) {
            number = ranNum.nextInt(10);
            System.out.println("Random number: " + number);
            count++;
        }
        System.out.println("Number 5 generated! and attempts: " + count);
    }
}
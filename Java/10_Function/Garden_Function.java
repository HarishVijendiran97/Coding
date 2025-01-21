public class Garden_Function {

    int apple_price = 20;
    int apple_count = 5;

    void total_money() {
        System.out.println(apple_price * apple_count);
    }

    public static void main(String[] args) {
        Garden_Function gardenObj = new Garden_Function();
        gardenObj.total_money();
    }
}
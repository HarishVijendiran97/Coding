class For_Loop_Count {
    public static void main(String[] args) {

        int odd_count = 0;
        int even_count = 0;
        int initial = 1;
        int finalValue = 10;

        for (int i = initial; i <= finalValue; i++) {
            if (i % 2 != 0) {
                odd_count++;
            }else{
                even_count++;
            }
        }
        System.out.println("Number of odd numbers: " + odd_count);
        System.out.println("Number of even numbers: " + even_count);
    }
}

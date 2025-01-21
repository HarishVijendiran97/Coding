class For_Loop_Count2 {
    public static void main(String[] args) {

        int initial = 1;
        int finalValue = 100;

        for (int i = initial; i <= finalValue; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println(i);
            }
        }
    }
}

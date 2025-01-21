class For_Loop_If_Else {
    public static void main(String[] args) {
        int initial = 1;
        int finalValue = 10;

        for (int i = initial; i <= finalValue; i++) {
            if (i % 2 == 0) {
                System.out.println(i);
            }
        }
    }
}
class Else_If {
    public static void main(String[] args) {

        int score = 45;

        if (score > 35 && score < 60) {
            System.out.println("Grade: D");
        } else if (score > 60 && score < 80) {
            System.out.println("Grade: C");
        } else if (score > 80 && score < 90) {
            System.out.println("Grade: B");
        } else {
            System.out.println("Grade: A");
        }
    }
}
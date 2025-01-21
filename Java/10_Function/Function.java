public class Function {
    void greeting(){
        System.out.println("Welcome!");
        dance();
    }
    void dance(){
        System.out.println("Dancing");
    }

    public static void main(String[] args) {
        Function funcObj = new Function();

        funcObj.greeting();
    }
}

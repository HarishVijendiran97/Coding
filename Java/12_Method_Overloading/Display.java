public class Display {

    void display(){
        System.out.println("one");
    }
    
    void display(int a){
        System.out.println("two");
    }

    public static void main(String[] args) {
        Display display = new Display();
        display.display();
        display.display(10);
    }
}

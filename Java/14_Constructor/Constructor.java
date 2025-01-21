public class Constructor {
    
    int a;
    String b; //constructor
    int marks;
    String name;

    Constructor(int k, String l){
        marks = k;
        name = l;
        System.out.println(k);
        System.out.println("Constructor called");
    }

    public static void main(String[] args) {
        
        Constructor obj = new Constructor(55, "Harish");
        //int g; not initialized
        //String i;
        System.out.println("a = " + obj.a);
        System.out.println("b = " + obj.b);
        System.out.println("marks = " + obj.marks);
        System.out.println("name = " + obj.name);

    }
}

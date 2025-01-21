public class Teacher {

    String name;
    String myname;

    Teacher() {
        System.out.print("Hello ");
    }
    void setName(String name){
        this.myname = name;
    }

    public static void main(String[] args) {
        Teacher obj = new Teacher();
        obj.setName("Harry");
        System.out.println(obj.name);
        System.out.println(obj.myname);

    }
}

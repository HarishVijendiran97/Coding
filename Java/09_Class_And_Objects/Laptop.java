
public class Laptop {
    String name = "";
    String processor = "";
    int ram = 0;
    int price = 0;

    public static void main(String[] args) {
        Laptop laptop1 = new Laptop();
        laptop1.name = "Dell XPS 15";
        laptop1.processor = "Intel Core i7-10750H";
        laptop1.ram = 16;
        laptop1.price = 12000;

        Laptop laptop2 = new Laptop();
        laptop2.name = "Lenovo IdeaPad 5";
        laptop2.processor = "AMD Ryzen 7 5800X";
        laptop2.ram = 16;
        laptop2.price = 10000;

        System.out.println("Laptop Name: " + laptop2.name);
        System.out.println("Processor: " + laptop2.processor);
        System.out.println("RAM: " + laptop2.ram + "GB");
        System.out.println("Price: $" + laptop2.price);
        System.out.println();

        System.out.println("Laptop Name: " + laptop1.name);
        System.out.println("Processor: " + laptop1.processor);
        System.out.println("RAM: " + laptop1.ram + "GB");
        System.out.println("Price: $" + laptop1.price);
    }
}
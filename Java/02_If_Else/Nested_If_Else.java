class Nested_If_Else {
    public static void main(String[] args) {

        boolean kfc = true;
        boolean chicken = true;
        
        if(kfc) {
            if(chicken){
                System.out.println("Chicken Wings");
            }else{
                System.out.println("no eating in KFC");
            }
        }else{
            System.out.println("No eat");
        }
        
    }
}
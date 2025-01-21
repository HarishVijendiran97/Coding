class String_Hash_Code{
    public static void main(String args[]){

        String a = "one";
        String b = "one";
        System.out.println(System.identityHashCode(a));
        System.out.println(System.identityHashCode(b));
        String c = b;
        System.out.println(a==c);
        System.out.println(System.identityHashCode(a) + " " + System.identityHashCode(c));

    }
}
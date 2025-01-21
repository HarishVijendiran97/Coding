class String_Compare {
    public static void main(String[] args) {
        String str1 = "Hello";//series of strings in string pool
        String str2 = "Hello";

        String st1 = new String("Hello");//object of string in heap
        String st2 = new String("Hello");

        // checks the reference of the strings not being compared against the strings
        // themselves.
        System.out.println(str1 == str2);//comparing two string addresses from string pool in heap
        System.out.println(st1 == st2);//comparing two different addresses in heap
        
        //string objects
        System.out.println(System.identityHashCode(st1));
        System.out.println(System.identityHashCode(st2));

        //strings
        System.out.println(System.identityHashCode(str1));
        System.out.println(System.identityHashCode(str2));
    }
}

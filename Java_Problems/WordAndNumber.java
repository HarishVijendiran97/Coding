import java.util.Scanner;
import java.text.DecimalFormat;
//import java.util.Arrays;

public class WordAndNumber {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter the number in words between zero to thousand: ");
        String rawInputWords = scan.nextLine();
        scan.close();

        int result = wordsToNumber((rawInputWords.toLowerCase()));

        DecimalFormat formator = new DecimalFormat("#,###,###");
        String formattedResult = formator.format(result);

        if (result != 0 && result != -1 ) {
            System.out.println("The number is: " + formattedResult);
        } else if(result == -1) {
            System.out.println("Invalid input. Please enter a number in words between zero to thousand.");
        }

    }

    public static int wordsToNumber(String words) {

        String[] wordsArray = words.split("\\s+");
        int currentValue = 0;
        int resultValue = 0;

        for (String eachWord : wordsArray) {
            switch (eachWord) {
                case "zero":
                    currentValue += 0;
                    break;
                case "one":
                    currentValue += 1;
                    break;
                case "two":
                    currentValue += 2;
                    break;
                case "three":
                    currentValue += 3;
                    break;
                case "four":
                    currentValue += 4;
                    break;
                case "five":
                    currentValue += 5;
                    break;
                case "six":
                    currentValue += 6;
                    break;
                case "seven":
                    currentValue += 7;
                    break;
                case "eight":
                    currentValue += 8;
                    break;
                case "nine":
                    currentValue += 9;
                    break;
                case "ten":
                    currentValue += 10;
                    break;
                case "eleven":
                    currentValue += 11;
                    break;
                case "twelve":
                    currentValue += 12;
                    break;
                case "thirteen":
                    currentValue += 13;
                    break;
                case "fourteen":
                    currentValue += 14;
                    break;
                case "fifteen":
                    currentValue += 15;
                    break;
                case "sixteen":
                    currentValue += 16;
                    break;
                case "seventeen":
                    currentValue += 17;
                    break;
                case "eighteen":
                    currentValue += 18;
                    break;
                case "nineteen":
                    currentValue += 19;
                    break;
                case "twenty":
                    currentValue += 20;
                    break;
                case "thirty":
                    currentValue += 30;
                    break;
                case "forty":
                    currentValue += 40;
                    break;
                case "fifty":
                    currentValue += 50;
                    break;
                case "sixty":
                    currentValue += 60;
                    break;
                case "seventy":
                    currentValue += 70;
                    break;
                case "eighty":
                    currentValue += 80;
                    break;
                case "ninety":
                    currentValue += 90;
                    break;
                case "hundred":
                    if (currentValue == 0) {
                        return -1;
                    }
                    currentValue *= 100;
                    break;
                case "thousand":
                    if (currentValue == 0) {
                        return -1;
                    }
                    currentValue *= 1000;
                    resultValue = resultValue + currentValue;
                    currentValue = 0;
                    break;
                case "million":
                    if (currentValue == 0) {
                        return -1;
                    }
                    currentValue *= 1000000;
                    resultValue = resultValue + currentValue;
                    currentValue = 0;
                    break;
                default:
                    return -1;

            }
        }
        return resultValue + currentValue;

    }
}

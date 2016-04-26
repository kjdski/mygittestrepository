import java.util.ArrayList;
// To execute Java, please define "static void main" on a class named Solution.
class Solution {
  public static void main(String[] args) {
    Integer[] numbers = {1,2,6,7,8,9,4,3,2,3,5,6,11};
    
     
    //sum all the unique prime numbers in the list   
     
    System.out.println("Sum: ");
 }
 
  //Solution cheat sheet
 public static boolean isPrime(int a) {
      if (a == 2) {
          return true;
      }
      for ( int i = 2; i < a; i++) {
          if (a % i == 0) {
              return false;
          }
      }
      return true;
  }
}
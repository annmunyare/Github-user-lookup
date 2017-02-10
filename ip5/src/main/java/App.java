import java.io.Console;
import java.util.List;
import java.util.ArrayList;

public class App {
  public static void main(String[] args) {

    Console myConsole = System.console();

    Hangman hangman = new Hangman();
    String letter = "";
    String outputString = "";
    List<String> guesses = new ArrayList<String>();
    List<String> randomWord = new ArrayList<String>();
    hangman.getWord();

    for(int i=0; i<hangman.getWord().length(); i++) {
      randomWord.add(Character.toString(hangman.getWord().charAt(i)));
      guesses.add("-");
    }

    while (!String.join("", randomWord).equals(outputString)) {
      letter = myConsole.readLine("Welcome to hangman!!!! Start guessing Character ");
      if (hangman.guessLetter(letter)) {
        for(int i=0; i<guesses.size(); i++) {
          if(randomWord.get(i).equals(letter)) {
            guesses.set(i,letter);
          }
        }
        outputString = String.join("", guesses);
        hangman.replaceLetters(letter);
        System.out.println(outputString);
      } else {
        System.out.println("Wrong letter.");
      }
    }
    System.out.println("Got it!!!");
  }
}

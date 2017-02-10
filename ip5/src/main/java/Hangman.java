import java.util.*;

public class Hangman {
  private String myWord = "Incomprehensibilities";

  //  String[] myWord={"hello","world","hi","bye"};
  // public String random(){
  //    Random randomGenerator = new Random();
  //    int randomIndex = randomGenerator.nextInt(4);
  //    return  myWord[randomIndex];
  //
  //  }




  public String getWord() {
    return myWord;
  }

  public boolean guessLetter(String letter) {
    return myWord.contains(letter);
  }

  public int findLetter(String letter) {
    return myWord.indexOf(letter);
  }

  public boolean gameOver(String guess) {
    return myWord.equals(guess);
  }

  public void replaceLetters(String letter) {
    List<String> newWord = new ArrayList<String>();

    for(int i=0; i<myWord.length(); i++) {
      if(Character.toString(myWord.charAt(i)).equals(letter)) {
        newWord.add("-");
      } else {
        newWord.add(Character.toString(myWord.charAt(i)));
      }
    }
    myWord = String.join("", newWord);
  }

}


import org.junit.Test;
import static org.junit.Assert.*;

public class HangmanTest {
//instance of hangman
  @Test
    public void newHangman_createsObject_true() {
      Hangman thisGame = new Hangman();
      assertEquals(true, thisGame instanceof Hangman);
    }
// test to get word
    @Test
    public void getWord_String() {
      Hangman thisGame = new Hangman();
      assertEquals(true, thisGame.getWord() instanceof String && thisGame.getWord().length()>0);
    }
//test for if letter exists
    @Test
    public void guessLetter_letterExists_true() {
      Hangman thisGame = new Hangman();
      assertEquals(true, thisGame.guessLetter("i"));
    }
//test for not existing letter
    @Test
    public void guessLetter_letterNotExists_false() {
    Hangman thisGame = new Hangman();
      assertEquals(false, thisGame.guessLetter("y"));
    }
  // test for when game is over
    @Test
    public void gameOver_wordsMatch_true() {
      Hangman thisGame = new Hangman();
      assertEquals(true, thisGame.gameOver("Incomprehensibilities"));
    }
//test for words not matching
    @Test
    public void gameOver_wordsNotMatch_false() {
      Hangman thisGame = new Hangman();
      assertEquals(false, thisGame.gameOver("lol"));
    }


}

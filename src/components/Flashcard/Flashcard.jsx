import { useState } from "react";
import styles from "./Flashcard.module.css";

const Flashcard = ({ questions, subject, onReturn }) => {
  // state management
  const [currentIndex, setCurrentIndex] = useState(() => {
    return Math.floor(Math.random() * questions.length);
  });

  const [showAnswer, setShowAnswer] = useState(false);

  // New state for user input and feedback
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [hasChecked, setHasChecked] = useState(false);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? questions.length - 1 : prevIndex - 1
    );
    resetCardState();
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === questions.length - 1 ? 0 : prevIndex + 1
    );
    resetCardState();
  };

  const resetCardState = () => {
    setShowAnswer(false);
    setUserAnswer("");
    setFeedback(null);
    setHasChecked(false);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  // Add shuffle function
  const shuffleCards = () => {
    setCurrentIndex(Math.floor(Math.random() * questions.length));
    resetCardState();
  };

  // Handle input change
  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  // Function to check answer similarity
  const isAnswerCorrect = (userAnswer, correctAnswer) => {
    const normalizedUserAnswer = userAnswer.toLowerCase().trim();
    const normalizedCorrectAnswer = correctAnswer.toLowerCase().trim();

    if (normalizedUserAnswer === normalizedCorrectAnswer) return true;

    const cleanUserAnswer = normalizedUserAnswer.replace(
      /[.,\/#!$%\^&\*;:{}=\-_`~()]/g,
      ""
    );
    const cleanCorrectAnswer = normalizedCorrectAnswer.replace(
      /[.,\/#!$%\^&\*;:{}=\-_`~()]/g,
      ""
    );
    // Check if user answer is at least 80% similar to correct answer
    // Simple check: is the user answer contained within the correct answer or vice versa
    if (
      cleanCorrectAnswer.includes(cleanUserAnswer) &&
      cleanUserAnswer.length > cleanCorrectAnswer.length * 0.6
    ) {
      return true;
    }
    if (
      cleanUserAnswer.includes(cleanCorrectAnswer) &&
      cleanCorrectAnswer.length > cleanUserAnswer.length * 0.6
    ) {
      return true;
    }

    return false;
  };

  // Check user answer
  const checkAnswer = () => {
    const correct = isAnswerCorrect(userAnswer, questions[currentIndex].Answer);

    setFeedback(correct ? "correct" : "incorrect");
    setHasChecked(true);
    if (correct) {
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      if (newStreak > longestStreak) {
        setLongestStreak(newStreak);
      }
    } else {
      setCurrentStreak(0);
    }
  };

  // UX
  const subjectName = subject.charAt(0).toUpperCase() + subject.slice(1);

  return (
    <>
      {/* Streak counter */}
      <div className={styles.streakCounter}>
        <div>
          <p>
            Current Streak: <span>{currentStreak}</span>
          </p>
        </div>
        <div>
          <p>
            Longest Streak: <span>{longestStreak}</span>
          </p>
        </div>
      </div>

      <div className={`${styles.flashcardPage} ${styles[subject]}`}>
        <div className={styles.leftContainer}>
          <button className={styles.backButton} onClick={onReturn}>
            ← Back to subjects
          </button>

          <div className={styles.cardContainer}>
            <button className={styles.navButton} onClick={goToPrevious}>
              &larr;
            </button>

            <div className={styles.card} onClick={toggleAnswer}>
              <h2>Time to test your {subjectName} Knowledge 🤓</h2>
              <p>
                <span>Question:</span> {questions[currentIndex].Question}
              </p>

              {showAnswer ? (
                <div className={styles.answer}>
                  <p>
                    <span>Answer:</span> {questions[currentIndex].Answer}
                  </p>
                </div>
              ) : (
                <p className={styles.funNote}>
                  Give your answer first before you click! Don't cheat cause I
                  see you 👀
                </p>
              )}
            </div>
            <button className={styles.navButton} onClick={goToNext}>
              &rarr;
            </button>
          </div>
          <button className={styles.shuffleBtn} onClick={shuffleCards}>
            Shuffle Cards
          </button>
        </div>

        <div className={styles.rightContainer}>
          <h3>Gamify 🎊</h3>
          <p>
            Try to guess the answer by typing it here and only then, flip the
            card to check yourself
          </p>
          <div className={styles.inputControl}>
            <textarea
              rows="10"
              cols="50"
              name="answer"
              id="answer"
              value={userAnswer}
              onChange={handleInputChange}
              disabled={hasChecked}
            />
            <button
              type="submit"
              onClick={checkAnswer}
              disabled={userAnswer.trim() === "" || hasChecked}
            >
              Check
            </button>
          </div>
        </div>
      </div>

      {/* Feedback message*/}
      {hasChecked && feedback && (
        <div className={`${styles.feedbackContainer}`}>
          <div className={`${styles.feedbackMessage} ${styles[feedback]}`}>
            {feedback === "correct"
              ? "✅ Good job! Your answer is correct!"
              : "❌ Not quite right. Try to review the answer by clicking on the card."}
          </div>
        </div>
      )}
    </>
  );
};

export default Flashcard;

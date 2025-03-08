import { useState } from "react";
import styles from "./Flashcard.module.css";
import flashcardQuestions from "../../data";

const Flashcard = () => {
  const [currentIndex, setCurrentIndex] = useState(() => {
    return Math.floor(Math.random() * flashcardQuestions.length);
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashcardQuestions.length - 1 : prevIndex - 1
    );
    setShowAnswer(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === flashcardQuestions.length - 1 ? 0 : prevIndex + 1
    );
    setShowAnswer(false);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className={styles.cardContainer}>
      <button className={styles.navButton} onClick={goToPrevious}>
        &larr;
      </button>

      <div className={styles.card} onClick={toggleAnswer}>
        <h2>Time to test your React Knowledge 🤓</h2>
        <p>
          <span>Question:</span> {flashcardQuestions[currentIndex].Question}
        </p>

        {showAnswer ? (
          <div className={styles.answer}>
            <p>
              <span>Answer:</span> {flashcardQuestions[currentIndex].Answer}
            </p>
          </div>
        ) : (
          <p className={styles.funNote}>
            Give your answer first before you click! Don't cheat cause I see you
            👀
          </p>
        )}
      </div>

      <button className={styles.navButton} onClick={goToNext}>
        &rarr;
      </button>
    </div>
  );
};
export default Flashcard;

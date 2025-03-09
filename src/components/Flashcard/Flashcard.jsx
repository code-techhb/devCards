import { useState } from "react";
import styles from "./Flashcard.module.css";

const Flashcard = ({ questions, subject, onReturn }) => {
  // state management
  const [currentIndex, setCurrentIndex] = useState(() => {
    return Math.floor(Math.random() * questions.length);
  });
  const [showAnswer, setShowAnswer] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? questions.length - 1 : prevIndex - 1
    );
    setShowAnswer(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === questions.length - 1 ? 0 : prevIndex + 1
    );
    setShowAnswer(false);
  };
  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  // UX
  const subjectName = subject.charAt(0).toUpperCase() + subject.slice(1);

  return (
    <div className={`${styles.flashcardPage} ${styles[subject]}`}>
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
              Give your answer first before you click! Don't cheat cause I see
              you 👀
            </p>
          )}
        </div>

        <button className={styles.navButton} onClick={goToNext}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Flashcard;

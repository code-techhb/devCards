import styles from "./Flashcard.module.css";

const Flashcard = () => {
  return (
    <div className={styles.card}>
      <h2>Time to test your React Knowledge 🤓</h2>
      <p>Question: Goes here</p>
      <p>
        Answer and then click to see the response! Don't cheat cause I see you
        👀
      </p>
    </div>
  );
};

export default Flashcard;

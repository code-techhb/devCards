import styles from "./landing.module.css";

const Landing = ({ onSubjectSelect }) => {
  return (
    <div className={styles.container}>
      <h1>Welcome to DevCards</h1>
      <p>Choose a subject to review</p>
      <div className={styles.tabsContainer}>
        <button onClick={() => onSubjectSelect("javascript")}>
          Javascript
        </button>
        <button onClick={() => onSubjectSelect("react")}>ReactJS</button>
        <button onClick={() => onSubjectSelect("dsa")}>DSA</button>
      </div>
    </div>
  );
};

export default Landing;

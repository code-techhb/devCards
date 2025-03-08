import styles from "./landing.module.css";
const Landing = () => {
  return (
    <div className={styles.container}>
      <h1> Welcome to DevCards</h1>
      <p>Choose a subject to review</p>
      <div className={styles.tabsContainer}>
        {/* add action when buttons clicked */}
        <button>Javascript</button>
        <button>ReactJS</button>
        <button>DSA</button>
      </div>
    </div>
  );
};

export default Landing;

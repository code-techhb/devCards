import styles from "./landing.module.css";
const Landing = () => {
  const sendAlert = () => alert("Feature in development. Coming soon!");

  return (
    <div className={styles.container}>
      <h1> Welcome to DevCards</h1>
      <p>Choose a subject to review</p>
      <div className={styles.tabsContainer}>
        <button onClick={sendAlert}>Javascript</button>
        <button onClick={sendAlert}>ReactJS</button>
        <button onClick={sendAlert}>DSA</button>
      </div>
    </div>
  );
};

export default Landing;

import styles from "./App.module.css";
import Flashcard from "./components/Flashcard/Flashcard";
import Landing from "./components/Landing/landing";

function App() {
  return (
    <div className={styles.appContainer}>
      <Landing />
      {/* only render the following after button clicked */}
      <Flashcard />
    </div>
  );
}

export default App;

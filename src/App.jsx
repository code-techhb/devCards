import styles from "./App.module.css";
import { useState } from "react";
import Landing from "./components/Landing/landing";
import Flashcard from "./components/Flashcard/Flashcard";
import flashcardData from "./data";

function App() {
  const [currentView, setCurrentView] = useState("landing");
  const [selectedSubject, setSelectedSubject] = useState(null);

  // handler functions
  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setCurrentView("flashcards");
  };

  const returnToLanding = () => {
    setCurrentView("landing");
  };

  return (
    <div className={styles.appContainer}>
      {currentView === "landing" ? (
        <Landing onSubjectSelect={handleSubjectSelect} />
      ) : (
        <Flashcard
          questions={flashcardData[selectedSubject]}
          subject={selectedSubject}
          onReturn={returnToLanding}
        />
      )}
    </div>
  );
}

export default App;

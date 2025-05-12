import React from "react";
import styles from "./styles/Counter.module.css";

// Add Google Fonts dynamically
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #00cfff 0%, #e0eafc 100%)",
      fontFamily: "'Playfair Display', serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div className={styles.centeredBox}>
        <h1 className={styles.title}>Task#110</h1>
        <input className={styles.input1} placeholder="Input 1" />
        <br />
        <input className={styles.input2} placeholder="Input 2" />
        <br />
        <input className={styles.input3} placeholder="Input 3" />
      </div>
    </div>
  );
}

export default App;
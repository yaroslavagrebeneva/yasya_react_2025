import React, { useState } from 'react';
import styles from './Counter.module.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + step);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - step);
  };

  const handleStepChange = (e) => {
    setStep(Number(e.target.value));
  };

  return (
    <div className={styles.counter}>
      <h2>Счетчик: {count}</h2>
      <div>
        <button className={styles.button} onClick={handleDecrement}>-</button>
        <button className={styles.button} onClick={handleIncrement}>+</button>
      </div>
      <div>
        <label>
          Шаг:
          <input
            className={styles.input}
            type="number"
            value={step}
            onChange={handleStepChange}
            min="1"
          />
        </label>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Управление счетчиком</h1>
      <Counter />
    </div>
  );
}

export default App;
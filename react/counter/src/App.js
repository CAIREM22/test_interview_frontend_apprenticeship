import './App.css';
import { useState } from "react";

function App() {
  const [counterValue, setCounterValue] = useState(0)

  function handleChangeIncremet() {
    setCounterValue(counterValue + 1);
  }

  function handleChangeDecrement() {
    setCounterValue(counterValue - 1);
  }

  return (
    <div className="App">
      <h1>{counterValue}</h1>
      <button onClick={handleChangeDecrement}>-</button>
      <button onClick={handleChangeIncremet}>+</button>
    </div>
  );
}

export default App;

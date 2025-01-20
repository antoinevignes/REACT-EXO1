import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handlePlus = () => {
    setCounter(counter + 1);
  };

  const handleMinus = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <>
      <h1>Compteur</h1>
      <h2>{counter}</h2>
      {counter === 0 && (
        <p>Le compteur ne peut pas descendre en dessous de 0 !</p>
      )}
      <button onClick={handleMinus} disabled={counter === 0}>
        -1
      </button>
      <button onClick={handlePlus}>+1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;

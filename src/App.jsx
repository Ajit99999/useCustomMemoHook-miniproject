import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCustomMemo from "./hooks/useCustomMemo";

const expensiveCalculation = (counter) => {
  for (let i = 0; i < 10000000; i++) {}
  console.log("expensive calculations.....");
  return counter * 2;
};

function App() {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState("");

  const doubleCounterValue = useCustomMemo(() => {
    return expensiveCalculation(count);
  }, count);

  return (
    <>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        counter: {count}
      </button>
      <p> double counter value : {doubleCounterValue}</p>

      <div>
        <label>Input text</label>
        <br />
        <input
          type="text"
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        ></input>
      </div>
    </>
  );
}

export default App;

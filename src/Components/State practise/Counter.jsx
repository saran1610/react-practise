import React, { useState } from "react";

function Counter() {
  const [iniVal, setVal] = useState(0);

  function incre() {
    setVal(iniVal + 1);
  }
  function decre() {
    setVal(iniVal <= 0 ? 0 : iniVal - 1);
  }
  function reset() {
    setVal(0);
  }

  return (
    <div>
      <h2>state functional example</h2>
      <h3>count: {iniVal}</h3>
      <button onClick={incre} >Increment</button>
      <button onClick={decre}>Decrement</button>
      <button onClick={reset}>reset</button>

    </div>
  );
}

export default Counter;

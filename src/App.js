import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h3 data-testid="counter">{counter}</h3>
      <button
        data-testid="minus-button"
        onClick={()=>setCounter((counter) => counter - 1)}
      >
        -
      </button>
      <button
        data-testid="plus-button"
        onClick={()=>setCounter((counter) => counter + 1)}
      >
        +
      </button>
    </>
  );
}

export default App;

import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h3 data-testid="counter">{counter}</h3>
    </>
  );
}

export default App;

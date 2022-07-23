import React, { useState } from 'react';

const Calculator = () => {
    const [counter, setCounter] = useState(0);
    const [disabled, setDisabled] = useState(false);
  
    return (
      <>
        <h3 data-testid="counter">{counter}</h3>
        <button
          disabled={disabled}
          data-testid="minus-button"
          onClick={()=>setCounter((counter) => counter - 1)}
        >
          -
        </button>
        <button
          disabled={disabled}
          data-testid="plus-button"
          onClick={()=>setCounter((counter) => counter + 1)}
        >
          +
        </button>
        <button
          style={{ backgroundColor: "blue" }}
          data-testid="on/off-button"
          onClick={() => setDisabled((prev) => !prev)}
        >
          on/off
        </button>
      </>
    );
};

export default Calculator;
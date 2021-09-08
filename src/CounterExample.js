import React, { useState } from "react";
const CounterExample = () => {
  const [counter, setCounter] = useState(null);

  const onButtonClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="ui">
      <button onClick={onButtonClick}>Click and add one</button>
      <h1>{counter}</h1>
    </div>
  );
};
export default CounterExample;

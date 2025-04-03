import React from "react";
import { useState } from "react";
const App = () => {
  let [value, setValue] = useState(0);
  return (
    <>
      <div>
        <h1> Counter App</h1>
        <h2>Count: {value}</h2>

        <div>
          <button onClick={() => setValue((prevValue) => (prevValue += 1))}>
            Increment
          </button>
          <button onClick={() => setValue((prevValue) => (prevValue -= 1))}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default App;

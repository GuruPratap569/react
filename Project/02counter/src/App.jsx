import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(10);
  // let counter = 10
  if (counter < 20) {
    var addvalues = () => {
      setCounter(counter + 1);
      console.log(counter);

      /* setCounter(counter+1)
        setCounter(counter+1)
        setCounter(counter+1)
      */

      /* setCounter(prevCounter => prevCounter+1)
        setCounter(prevCounter => prevCounter+1)
        setCounter(prevCounter => prevCounter+1)
        */
      // console.log(Counter);
    };
  }
  if (counter > 0) {
    var removevalues = () => {
      setCounter(counter - 1);
      // console.log({counter});
    };
  }
  return (
    <>
      <h1>chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button
        style={{
          color: "green",
          background: "yellow",
          marginBottom: "10px",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
        }}
        onClick={addvalues}
      >
        Add values: {counter}
      </button>
      <br />
      <button onClick={removevalues}>Remove value: {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;

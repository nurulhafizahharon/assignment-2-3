import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handlerPlus = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const handlerMinus = () => {
    setCount((prevCount) => {
      if (prevCount <= 0) {
        return prevCount;
      } else {
        return prevCount - 1;
      }
    });
  };

  const handlerReset = () => {
    setCount(0);
  };

  return (
    <>
      <button onClick={handlerMinus}> - </button>
      <span> {count} </span>
      <button onClick={handlerPlus}> + </button>
      <button onClick={handlerReset}> Reset </button>
    </>
  );
}

export default Counter;

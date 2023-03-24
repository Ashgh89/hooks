import { useState } from "react";

const HookCounter = () => {
  // useState: built in function
  // allows functional components to have state
  // which means the ability to store and manage data
  // count => current value
  // setCount => is a function that update the count
  // 0 => initial value
  const [count, setCount] = useState(0);
  const addOneHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const addFourHandler = () => {
    setCount((prevCount) => prevCount + 4);
  };
  return (
    <div>
      <h1>count - {count}</h1>
      <button onClick={addOneHandler}>Add one</button>
      <button onClick={addFourHandler}>Add four</button>
    </div>
  );
};

export default HookCounter;

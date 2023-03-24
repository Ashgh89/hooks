import { useState } from "react";

const RandomNumbersThree = () => {
  const [items, setItem] = useState([]);

  const addItemHandler = () => {
    setItem([
      ...items,
      { id: items.length, number: Math.floor(Math.random() * 10) },
    ]);
  };

  const addItemHandler2 = () => {
    const addItem = {
      id: items.length,
      number: Math.floor(Math.random() * 10),
    };
    const updateItems = [...items, addItem];
    setItem(updateItems);
  };
  return (
    <div>
      <button onClick={addItemHandler}>Add Item</button>
      {items.map((item) => {
        return <li key={item.id}>{item.number}</li>;
      })}
    </div>
  );
};

export default RandomNumbersThree;

import { useState } from "react";
import Product from "./Product";

const HookCounterFour = () => {
  const [products, setProducts] = useState([
    { title: "React", price: "900€", id: "1" },
    { title: "CSS", price: "300€", id:"2" },
    { title: "JS", price: "700€", id: "3" },
  ]);

  const clickHandler = () => {
    setProducts([
      { title: "React", price: "700€", id:"1" },
      { title: "CSS", price: "150€", id:"2" },
      { title: "JS", price: "500€", id:"3" },
    ]);
  };
  return (
    <div>
      <h1>My List</h1>
      {products.map((product) => {
        return <Product key={product.id} name={product.title} price={product.price} />;
      })}
      <button onClick={clickHandler}>Discount</button>
    </div>
  );
};

export default HookCounterFour;

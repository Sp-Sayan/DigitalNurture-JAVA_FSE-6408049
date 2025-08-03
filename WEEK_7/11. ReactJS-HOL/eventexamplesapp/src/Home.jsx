import React, { useState } from "react";
import CurrencyConvertor from "./components/CurrencyConvertor";

const Home = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = (e) => {
    setCount(count + 1);
    alert("Hello Member!!");
  };
  const handleDecrement = (e) => {
    setCount(count - 1);
  };
  const handleWelcome = (e) => {
    alert("Say Welcome");
  };
  const handleClick = (e) => {
    alert("I was clicked");
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <button onClick={handleWelcome}>Say Welcome</button>
      <br />
      <button onClick={handleClick}>Click On me</button>
      <CurrencyConvertor />
    </div>
  );
};

export default Home;

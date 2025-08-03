import React, { useRef } from "react";

const CurrencyConvertor = () => {
  const amountRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Converting to Indian Rupee is " + amountRef.current?.value * 100);
  };

  return (
    <div>
      <h1 style={{ color: "green", fontWeight: "bold" }}>
        Currency Converter !!
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount"> Amount: </label>
        <input ref={amountRef} type="text" name="amount" id="amount" />
        <br />
        <label htmlFor="currency"> Currency: </label>
        <input type="text" name="currency" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default CurrencyConvertor;

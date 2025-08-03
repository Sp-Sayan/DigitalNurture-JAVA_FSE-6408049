import React from "react";
import OfficeImg from "./assets/office.jpg";

const Home = () => {
  const element = "Office Space";
  const jsxatt = (
    <img src={OfficeImg} width="25%" height="25%" alt="office space" />
  );
  const itemname = [
    {
      name: "DBS",
      rent: 50000,
      address: "Chennai",
    },
    {
      name: "DLF",
      rent: 75000,
      address: "Kolkata",
    },
    {
      name: "Prime",
      rent: 55000,
      address: "Hyderabad",
    },
  ];

  return (
    <div>
      <h1>{element}, at Affordable Range</h1>

      {itemname.map((item) => (
        <>
          {jsxatt}
          <h1>Name: {item.name}</h1>
          <h3 style={{ color: `${item.rent <= 60000 ? "red" : "green"}` }}>
            Rent, Rs: {item.rent}
          </h3>
          <h3>Address: {item.address}</h3>
        </>
      ))}
    </div>
  );
};

export default Home;

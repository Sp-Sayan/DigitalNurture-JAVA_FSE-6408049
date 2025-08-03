import React from "react";

const ListOfIndianPlayers = ({ IndianPlayers }) => {
  return (
    <div>
      {IndianPlayers.map((player) => (
        <div>
          <li>{player}</li>
        </div>
      ))}
    </div>
  );
};

export default ListOfIndianPlayers;

import React from "react";

const ListOfPlayers = ({ players }) => {
  return (
    <div>
      {players.map((player) => (
        <div>
          <li>
            Mr. {player.name} <span>{player.score}</span>
          </li>
        </div>
      ))}
    </div>
  );
};

export default ListOfPlayers;

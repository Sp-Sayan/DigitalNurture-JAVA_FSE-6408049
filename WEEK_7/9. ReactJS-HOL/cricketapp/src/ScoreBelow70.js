import React from "react";

const ScoreBelow70 = ({ players }) => {
  return (
    <div>
      {players.map((player) =>
        player.score < 70 ? (
          <div key={player.name}>
            <li>
              Mr. {player.name} <span>{player.score}</span>
            </li>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default ScoreBelow70;

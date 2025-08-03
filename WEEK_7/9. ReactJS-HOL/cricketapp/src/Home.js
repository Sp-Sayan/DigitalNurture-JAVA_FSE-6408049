import React from "react";
import ListOfPlayers from "./ListOfPlayers";
import ScoreBelow70 from "./ScoreBelow70";
import OddPlayers from "./OddPlayers";
import { IndianPlayers } from "./PlayerDetails";
import EvenPlayers from "./EvenPlayers";
import players from "./PlayerDetails";
import ListOfIndianPlayers from "./ListOfIndianPlayers";

const Home = () => {
  var flag = true;

  if (flag == true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListOfPlayers players={players} />
        <hr />
        <h1>List of Players having Scores less than 70</h1>
        <ScoreBelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h1>Indian Team</h1>
          <h1>Odd Players</h1>
          {OddPlayers(IndianPlayers)}
          <hr />
          <h1>Even Players</h1>
          {EvenPlayers(IndianPlayers)}
        </div>
        <hr />
        <div>
          <h1>List of Indian Players Merged: </h1>
          <ListOfIndianPlayers IndianPlayers={IndianPlayers} />
        </div>
      </div>
    );
  }
};

export default Home;

import React, { useState } from "react";
import Player from "./Player";

const initialState = [
  { name: "Matias", score: 1 },
  { name: "Karla", score: 10 },
  { name: "David", score: 8 },
];

const Scoreboard = () => {
  const [players, setPlayer] = useState(initialState);

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  console.log(players);
  return (
    <div>
      <h1>Codaisseur Scoreboard</h1>
      <div>
        {sortedPlayers.map((guy, index) => {
          return <Player name={guy.name} score={guy.score} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Scoreboard;

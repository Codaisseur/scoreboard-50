import React, { useState } from "react";
import Player from "./Player";

const initialState = [
  { name: "Matias", score: 1, id: 1 },
  { name: "Karla", score: 10, id: 2 },
  { name: "David", score: 8, id: 3 },
];

const Scoreboard = () => {
  const [players, setPlayers] = useState(initialState);
  const [sortBy, setSortBy] = useState("score");

  // callback prop
  const increaseScore = id => {
    const updatedPlayers = players.map(p => {
      if (p.id === id) {
        return { ...p, score: p.score + 1 };
      } else {
        return p;
      }
    });
    setPlayers(updatedPlayers);
  };

  const onChangeSort = event => {
    console.log("value of select", event.target.value);
    setSortBy(event.target.value);
  };

  let sortedPlayers = [...players];

  if (sortBy === "score") {
    sortedPlayers.sort((a, b) => b.score - a.score);
  } else {
    sortedPlayers.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div>
      <h1>Codaisseur Scoreboard</h1>
      <div>
        <label>Sort by:</label>
        <select value={sortBy} onChange={onChangeSort}>
          <option value={"score"}>Score</option>
          <option value={"name"}>Name</option>
        </select>
      </div>
      <div>
        {sortedPlayers.map((guy, index) => {
          return (
            <Player
              name={guy.name}
              score={guy.score}
              key={index}
              id={guy.id}
              increaseScore={increaseScore}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Scoreboard;

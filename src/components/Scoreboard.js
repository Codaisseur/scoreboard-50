import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayer";

const initialState = [
  { name: "Matias", score: 1, id: 1 },
  { name: "Karla", score: 10, id: 2 },
  { name: "David", score: 8, id: 3 },
];

const Scoreboard = () => {
  const [players, setPlayers] = useState(initialState);

  // to keep what is the sorting
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

  const onAddPlayer = newPlayerName => {
    console.log("adding a player in scoreboard", newPlayerName);

    // 1. a new name
    // 2. the array with the players

    const newPlayer = { name: newPlayerName, score: 0, id: players.length + 1 };

    const updatedPlayers = [...players, newPlayer];

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

  console.log("players", players);

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
      <AddPlayerForm onAddPlayer={onAddPlayer} />
    </div>
  );
};

export default Scoreboard;

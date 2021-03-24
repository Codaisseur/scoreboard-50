import React, { useState } from "react";

const Player = props => {
  const increase = () => {
    console.log("pressed player", props);
    props.increaseScore(props.id);
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: 30 }}>
        {props.name}: {props.score}
      </div>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Player;

import React, { useState } from "react";

const Player = props => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: 30 }}>
        {props.name}: {props.score}
      </div>
      {/* <button onClick={increase}>+</button> */}
    </div>
  );
};

export default Player;

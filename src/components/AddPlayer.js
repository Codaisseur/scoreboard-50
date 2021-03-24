import React, { useState } from "react";

const AddPlayer = props => {
  const [name, setName] = useState("");

  const onFormSubmit = event => {
    event.preventDefault(); // stops the page from refreshing
    props.onAddPlayer(name);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div>
          <label>Name: </label>
          <input
            value={name}
            type='text'
            onChange={event => setName(event.target.value)}
          />
        </div>
        <button type='submit'>Create</button>
      </form>
    </div>
  );
};

export default AddPlayer;

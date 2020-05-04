import React, { useState } from "react";

export const EditAdd = (props) => {
  const [number, setNumber] = useState(0);
  const showReset = props.showReset;
  const id = props.id;

  return (
    <span className="edit-math-container">
      <label htmlFor={`input-${id}-add-amount`}>add to total amount</label>
      <input
        id={`input-${id}-add-amount`}
        type="number"
        placeholder="please add integers"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <span>
        <button
          type="reset"
          onClick={() => {
            showReset();
            setNumber(0);
          }}
        >
          reset
        </button>
        <button
          type="button"
          onClick={() => {
            setNumber(number);
            showReset();
          }}
        >
          add
        </button>
      </span>
    </span>
  );
};

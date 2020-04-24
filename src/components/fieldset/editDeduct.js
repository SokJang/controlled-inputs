import React, { useState } from "react";

export const EditDeduct = (props) => {
  const [number, setNumber] = useState(0);

  return (
    <span className="edit-math-container">
      <label htmlFor={`input-id-${props.id}-deduct-amount`}>
        deduct from total amount
      </label>
      <input
        id={`input-id-${props.id}-deduct-amount`}
        type="number"
        placeholder="please deduct integers"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <span>
        <button
          type="reset"
          onClick={() => {
            setNumber(0);
            props.showReset();
          }}
        >
          reset
        </button>
        <button
          type="button"
          onClick={() => {
            setNumber(number);
            props.showReset();
          }}
        >
          deduct
        </button>
      </span>
    </span>
  );
};

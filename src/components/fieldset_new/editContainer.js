import React from "react";

export const EditContainer = (props) => {
  const id = props.id;
  const initial = props.initial;
  const add = props.add;
  const deduct = props.deduct;
  const number = props.number;
  const setNumber = props.setNumber;
  const setCount = props.setCount;

  return (
    <span className="edit-container">
      <label htmlFor={`input-${id}-add-amount`}>edit total amount</label>
      <input
        id={`input-${id}-add-amount`}
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <span>
        <button type="button" onClick={add}>
          plus
        </button>
        <button type="button" onClick={deduct}>
          minus
        </button>
      </span>
      <button
        type="button"
        onClick={() => {
          setNumber(0);
          setCount(initial);
        }}
      >
        reset
      </button>
    </span>
  );
};

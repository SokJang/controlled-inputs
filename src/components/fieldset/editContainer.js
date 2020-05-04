import React from "react";

export const EditContainer = (props) => {
  const [
    id,
    initial,
    number,
    setNumber,
    setCount,
    addToAmount,
    subtractFromAmount,
  ] = [
    props.id,
    props.initial,
    props.number,
    props.setNumber,
    props.setCount,
    props.addToAmount,
    props.subtractFromAmount,
  ];

  return (
    <span className="edit-container">
      <label htmlFor={`input-${id}-add-amount`}>edit amount</label>
      <input
        id={`input-${id}-add-amount`}
        type="number"
        value={number}
        min="0"
        onChange={(e) => setNumber(e.target.value)}
      />
      <span>
        <button type="button" onClick={addToAmount}>
          plus
        </button>
        <button type="button" onClick={subtractFromAmount}>
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

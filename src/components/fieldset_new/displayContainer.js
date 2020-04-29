import React from "react";

export const DisplayContainer = (props) => {
  const count = props.count;
  const id = props.id;
  const initial = props.initial;

  return (
    <span className="display-container">
      <label htmlFor={`readOnly-${id}-total-amount`}>
        total amount (initial amount: {initial})
      </label>
      <input
        id={`readOnly-${id}-total-amount`}
        type="number"
        value={count}
        readOnly
      />
    </span>
  );
};

import React from "react";

export const DisplayContainer = (props) => {
  const [count, id, initial] = [props.count, props.id, props.initial];

  return (
    <span className="display-container">
      <label htmlFor={`readOnly-${id}-total-amount`}>
        total amount (initial: {initial})
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

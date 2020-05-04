import React from "react";

export const DisplayContainer = (props) => {
  const totalAmount = props.totalAmount;
  const id = props.id;

  return (
    <span className="display-container">
      <label htmlFor={`readOnly-${id}-total-amount`}>total amount</label>
      <input
        id={`readOnly-${id}-total-amount`}
        type="number"
        value={totalAmount}
        readOnly
      />
    </span>
  );
};

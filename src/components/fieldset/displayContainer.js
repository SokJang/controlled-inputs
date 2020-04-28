import React from "react";

export const DisplayContainer = (props) => {
  //const [id, totalAmount] = props;
  return (
    <span className="display-container">
      <label htmlFor={`readOnly-${props.id}-total-amount`}>total amount</label>
      <input
        id={`readOnly-${props.id}-total-amount`}
        type="number"
        value={props.totalAmount}
        readOnly
      />
    </span>
  );
};

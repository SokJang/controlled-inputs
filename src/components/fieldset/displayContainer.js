import React from "react";

export const DisplayContainer = (props) => {
  return (
    <span className="display-container">
      <label htmlFor="readOnly-id-total-amount">total amount</label>
      <input
        id="readOnly-id-total-amount"
        type="number"
        value={props.totalAmount}
        readOnly
      />
    </span>
  );
};

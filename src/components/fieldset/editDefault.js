import React from "react";

export const EditDefault = (props) => {
  return (
    <span className="edit-default-container">
      <span>change total amount</span>
      <span>
        <button type="reset" onClick={props.showDeduct}>
          deduct
        </button>
        <button type="button" onClick={props.showAdd}>
          add
        </button>
      </span>
    </span>
  );
};

import React from "react";

export const EditDefault = (props) => {
  const showDeduct = props.showDeduct;
  const showAdd = props.showAdd;

  return (
    <span className="edit-default-container">
      <span>change total amount</span>
      <span>
        <button type="reset" onClick={showDeduct}>
          deduct
        </button>
        <button type="button" onClick={showAdd}>
          add
        </button>
      </span>
    </span>
  );
};

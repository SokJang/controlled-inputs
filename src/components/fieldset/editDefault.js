import React from "react";

export const EditDefault = ({ showAdd, showDeduct }) => {
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

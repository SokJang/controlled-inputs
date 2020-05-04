import React from "react";

export const CtaContainer = () => {
  const submitAllChanges = () => {
    console.log("all values of a newly generated array");
  };
  const resetAllChanges = () => {
    console.log("all input form values are resetted");
  };
  return (
    <span className="cta-container">
      <button type="reset" onClick={resetAllChanges}>
        reset all changes
      </button>
      <button type="submit" onClick={submitAllChanges}>
        submit all changes
      </button>
    </span>
  );
};

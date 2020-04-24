import React from "react";

export const CtaContainer = () => {
  const resetAllChanges = () => {
    console.log("all input form values are resetted");
  };
  return (
    <span className="cta-container">
      <button type="reset" onClick={resetAllChanges}>
        reset all changes
      </button>
      <button type="submit">submit all changes</button>
    </span>
  );
};

import React from "react";

export const Fieldset = () => {
  return (
    <fieldset>
      <legend className="visually-hidden" content="headline fieldset" />
      <span className="container">
        <span className="display-container">
          <label htmlFor="readOnly-id-total-amount">total amount</label>
          <input
            id="readOnly-id-total-amount"
            type="number"
            value="5"
            readOnly
          />
        </span>
        <span className="edit-container">
          <span className="edit-add-container">
            <label htmlFor="input-id-add-amount">add amount</label>
            <input
              id="input-id-add-amount"
              type="number"
              value="0"
              placeholder="please add integers"
            />
            <span>
              <button type="reset">reset all changes</button>
              <button type="submit">submit all changes</button>
            </span>
          </span>
        </span>
      </span>
    </fieldset>
  );
};

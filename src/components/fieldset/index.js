import React from "react";
import { DisplayContainer } from "./displayContainer";
import { EditContainer } from "./editContainer";

export const FieldSet = (props) => {
  return (
    <fieldset>
      <legend className="visually-hidden" content="headline fieldset" />
      <span className="container">
        <DisplayContainer totalAmount={props.totalAmount} />
        <EditContainer id={props.id} totalAmount={props.totalAmount} />
      </span>
    </fieldset>
  );
};

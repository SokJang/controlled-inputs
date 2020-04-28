import React from "react";
import { DisplayContainer } from "./displayContainer";
import { EditContainer } from "./editContainer";

export const Product = (props) => {
  return (
    <fieldset>
      <legend className="visually-hidden" content="headline fieldset" />
      <span className="container">
        <DisplayContainer id={props.id} totalAmount={props.totalAmount} />
        <EditContainer id={props.id} totalAmount={props.totalAmount} />
      </span>
    </fieldset>
  );
};

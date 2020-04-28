import React from "react";
import { DisplayContainer } from "./displayContainer";
import { EditContainer } from "./editContainer";

export const Product = (props) => {
  const totalAmount = props.product.totalAmount;
  const id = props.product.id;
  return (
    <fieldset>
      <legend className="visually-hidden" content="headline fieldset" />
      <span className="container">
        <DisplayContainer id={id} totalAmount={totalAmount} />
        <EditContainer id={id} totalAmount={totalAmount} />
      </span>
    </fieldset>
  );
};

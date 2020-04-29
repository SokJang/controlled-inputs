import React, { useState } from "react";
import { DisplayContainer } from "./displayContainer";

export const Product = (props) => {
  const totalAmount = props.product.totalAmount;
  const id = props.product.id;

  const initial = totalAmount;
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(initial);
  const add = (number) => parseInt(count, 10) + parseInt(number, 10);
  const deduct = (number) => parseInt(count, 10) - parseInt(number, 10);

  return (
    <fieldset>
      <legend className="visually-hidden" content="headline fieldset" />
      <span className="container">
        <DisplayContainer id={id} initial={initial} count={count} />
        <span className="edit-container">
          <label htmlFor={`input-${id}-add-amount`}>edit total amount</label>
          <input
            id={`input-${id}-add-amount`}
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <span>
            <button type="button" onClick={(e) => setCount(() => add(number))}>
              plus
            </button>
            <button
              type="button"
              onClick={(e) => setCount(() => deduct(number))}
            >
              minus
            </button>
          </span>
          <button
            type="button"
            onClick={() => {
              setNumber(0);
              setCount(initial);
            }}
          >
            reset
          </button>
        </span>
      </span>
    </fieldset>
  );
};

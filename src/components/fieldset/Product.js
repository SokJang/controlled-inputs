import React, { useState } from "react";
import PropTypes from "prop-types";
import { DisplayContainer } from "./displayContainer";
import { EditContainer } from "./editContainer";

export const Product = (props) => {
  const totalAmount = props.product.totalAmount;
  const id = props.product.id;

  const initial = totalAmount;
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(initial);

  const parseAdd = (currentAmount, inputVal) =>
    parseInt(currentAmount, 10) + parseInt(inputVal, 10);

  const parseMinus = (currentAmount, inputVal) =>
    parseInt(currentAmount, 10) - parseInt(inputVal, 10);

  const addToAmount = () => setCount(parseAdd(count, number));
  const subtractFromAmount = () => setCount(parseMinus(count, number));

  return (
    <fieldset>
      <legend className="visually-hidden" content="headline fieldset" />
      <span className="container">
        <DisplayContainer id={id} initial={initial} count={count} />
        <EditContainer
          id={id}
          initial={initial}
          count={count}
          setCount={setCount}
          number={number}
          setNumber={setNumber}
          addToAmount={addToAmount}
          subtractFromAmount={subtractFromAmount}
        />
      </span>
    </fieldset>
  );
};

Product.propTypes = {
  totalAmount: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

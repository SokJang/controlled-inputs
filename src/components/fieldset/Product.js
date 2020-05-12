import React, { useState } from "react";
import PropTypes from "prop-types";
import { DisplayContainer } from "./displayContainer";
import { EditContainer } from "./editContainer";

export const Product = (props) => {
  const [id, initial, name] = [props.id, props.totalAmount, props.name];

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
      <legend>{name}</legend>
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
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  initial: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
};

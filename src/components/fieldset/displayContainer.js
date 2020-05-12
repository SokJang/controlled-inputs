import React from "react";
import PropTypes from "prop-types";

export const DisplayContainer = (props) => {
  const [count, id, initial] = [props.count, props.id, props.initial];

  return (
    <span className="display-container">
      <label htmlFor={`readOnly-${id}-total-amount`}>
        total amount (initial: {initial})
      </label>
      <input
        id={`readOnly-${id}-total-amount`}
        type="number"
        value={count}
        readOnly
      />
    </span>
  );
};

DisplayContainer.propTypes = {
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  id: PropTypes.string.isRequired,
  initial: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

import React, { useState } from "react";
import { usePrevious } from "./Hook";

export const Counter = () => {
  const initial = 0;
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(initial);
  const add = (number) => parseInt(count, 10) + parseInt(number, 10);
  const deduct = (number) => parseInt(count, 10) - parseInt(number, 10);

  const prevCount = usePrevious(count);

  return (
    <span
      style={{
        background: "yellow",
        display: "inline-block",
        paddingLeft: 15,
        paddingBottom: 15,
        width: 785,
        marginTop: 30,
      }}
    >
      <h3>
        Ganz am Anfang: {initial}, jetzige Rechnung: {count}, die Rechnung
        davor: {prevCount == null ? 0 : prevCount}
      </h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={(e) => setCount(() => add(number))}>plus</button>
      <button onClick={() => setCount(() => deduct(number))}>minus</button>
    </span>
  );
};

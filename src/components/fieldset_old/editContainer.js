import React, { useReducer } from "react";
import { EditDefault as Default } from "./editDefault";
import { EditAdd as Add } from "./editAdd";
import { EditDeduct as Deduct } from "./editDeduct";
import { editReduce as reduce } from "./editReduce";

export const EditContainer = (props) => {
  const initial = {
    reset: true,
    add: false,
    deduct: false,
  };
  const [show, showContainer] = useReducer(reduce, initial);
  const id = props.id;
  const totalAmount = props.totalAmount;

  return (
    <span className="edit-container">
      {show.reset && (
        <Default
          showAdd={() => showContainer({ type: "add" })}
          showDeduct={() => showContainer({ type: "deduct" })}
          id={id}
        />
      )}
      {show.add && (
        <Add
          showReset={() => showContainer({ type: "reset" })}
          id={id}
          totalAmount={totalAmount}
        />
      )}
      {show.deduct && (
        <Deduct
          showReset={() => showContainer({ type: "reset" })}
          id={id}
          totalAmount={totalAmount}
        />
      )}
    </span>
  );
};

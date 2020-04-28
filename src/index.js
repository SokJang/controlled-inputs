import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const products = [
  {
    id: "1",
    totalAmount: "5",
  },
  {
    id: "2",
    totalAmount: "10",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App products={products} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

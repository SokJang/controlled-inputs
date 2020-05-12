import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LiftingStateUp from "./LiftingStateUp";
import * as serviceWorker from "./serviceWorker";

const categories = [
  {
    id: 1,
    name: "Books",
    products: [
      {
        id: "1",
        name: "Fantasy",
        totalAmount: "5",
      },
      {
        id: "2",
        name: "SciFy",
        totalAmount: "10",
      },
      {
        id: "3",
        name: "Science",
        totalAmount: "15",
      },
    ],
  },
  {
    id: 2,
    name: "Music",
    products: [
      {
        id: "1",
        name: "HipHop",
        totalAmount: "5",
      },
      {
        id: "2",
        name: "RnB",
        totalAmount: "10",
      },
      {
        id: "3",
        name: "Jazz",
        totalAmount: "15",
      },
    ],
  },
  {
    id: 3,
    name: "Video",
    products: [
      {
        id: "1",
        name: "Musical",
        totalAmount: "1",
      },
      {
        id: "2",
        name: "Horror",
        totalAmount: "1",
      },
      {
        id: "3",
        name: "Comedy",
        totalAmount: "1",
      },
    ],
  },
];

ReactDOM.render(
  <React.StrictMode>
    <LiftingStateUp categories={categories} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

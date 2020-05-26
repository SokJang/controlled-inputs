import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Categories } from "./components/LiftingStateUp";
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
      {
        id: "4",
        name: "Literature",
        totalAmount: "7",
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
        name: "Comedy",
        totalAmount: "1",
      },
    ],
  },
  {
    id: 4,
    name: "Recepies",
    products: [
      {
        id: "1",
        name: "Hot",
        totalAmount: "3",
      },
      {
        id: "2",
        name: "Umami",
        totalAmount: "2",
      },
      {
        id: "3",
        name: "Sweet",
        totalAmount: "7",
      },
      {
        id: "4",
        name: "Sour",
        totalAmount: "3",
      },
      {
        id: "5",
        name: "Salty",
        totalAmount: "3",
      },
    ],
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Categories categories={categories} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

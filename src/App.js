import React, { useEffect } from "react";
import Body from "./components/body";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./components/Header";
import Cards from "./components/cards";
import { useState, useEffect } from "react";
import { Restaurants } from "./utils/restaurants";
import Curosal from "./components/curosal";
const App = () => {
  const [count, Setcount] = useState(0);

  const counts = () => {
    Setcount(count + 1);
  };
  return (
    <div>
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

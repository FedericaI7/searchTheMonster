import React, { useState } from "react";
import Header from "./Header";
import Card from "./Card";

export default function App() {
  const [monster, setMonster] = useState([]);
  return (
    <div className="container--app">
      <Header title={"Search the monster"} placeholder={"Search the monster"} />
      <Card stateMonster={monster} />
    </div>
  );
}

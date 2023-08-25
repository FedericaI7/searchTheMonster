import React, { useEffect, useState } from "react";
import Header from "./Header";
import Card from "./Card";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [monster, setMonster] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setMonster(data);
      });
  }, [monster, inputValue]);

  return (
    <div className="container--app">
      <Header title={"Search the monster"} placeholder={"Search the monster"} />
      <Card stateMonster={monster} />
    </div>
  );
}

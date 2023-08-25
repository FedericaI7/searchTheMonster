import React, { useEffect, useState } from "react";
import Header from "./Header";
import Card from "./Card";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [monster, setMonster] = useState([]);
  const [monsterFiltered, setMonsterFiltered] = useState(monster);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setMonster(data);
      });
  }, []);

  const changeValue = (event) => {
    const valueOnInput = inputValue.event.value.toLowerCase();
    setInputValue(valueOnInput);
  };

  useEffect(() => {
    const filtro = monster.filter((mostro) => {
      const checkMonster = mostro.name.toLowerCase();
      return checkMonster.includes(inputValue.toLowerCase());
    });
    setMonsterFiltered(filtro);
  }, [monster, inputValue]);

  return (
    <div className="container--app">
      <Header
        title={"Search the monster"}
        placeholder={"Search the monster"}
        changeValue={changeValue}
      />
      <Card stateMonster={monster} />
    </div>
  );
}

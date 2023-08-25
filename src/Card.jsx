import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="container--card">
      {props.monsterFiltered.map((card) => (
        <div className="card" key={card.id}>
          <h1>{card.name}</h1>

          <img
            src={`https://robohash.org/${card.id}?set=set2&size=180x180`}
            alt="monster illustration"
          />
          <p>{card.email}</p>
        </div>
      ))}
    </div>
  );
}

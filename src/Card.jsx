import React from "react";

export default function Card(props) {
  return (
    <div className="container--card">
      {props.stateMonster.map((card) => (
        <div className="card" key={card.id}>
          <h1>{card.name}</h1>

          <img
            src={`https://robohash.org/${card.id}?size=180x180`}
            alt="monster illustration"
          />
          <p>{card.email}</p>
        </div>
      ))}
    </div>
  );
}

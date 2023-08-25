import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="container--header">
      <h1>{props.title}</h1>
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
}

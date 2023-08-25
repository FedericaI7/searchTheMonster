import React from "react";

export default function Header(props) {
  return (
    <div className="container--header">
      {props.title}
      <input type="text" />
    </div>
  );
}

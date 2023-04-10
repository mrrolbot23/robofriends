import React from "react";
import "./Hello.css";

const Hello = (props) => {
  return (
    <div className="f1 tc">
      <h1>Robofriends Under Construction</h1>
      <p>{props.greetings}</p>
    </div>
  );
};

export default Hello;

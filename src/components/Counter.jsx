import React from "react";
import "./Counter.css";

function Counter(props) {
  return (
    <div className="btns">
      <button onClick={props.decrement}>-</button>
      <span>{props.count}</span>
      <button onClick={props.increment}>+</button>
    </div>
  );
}

export default Counter;

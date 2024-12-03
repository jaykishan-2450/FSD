import React, { useState } from "react";
import "./CounterApp.css";
const CounterApp = () => {
  const [count, setCount] = useState(0);
  return (

    <div className="count-app">
      
      <h1 className="count-disp">{count}</h1>
      <div className="count-body">
        <button
          className="count-btn"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <button
          className="count-btn1"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
        <button
          className="count-btn"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
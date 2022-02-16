import React, { useState } from "react";
import './Counter.css';

const Counter = ({step=1, min=null, max=null, start=0 }) => {
  if (min != null && min > start) {
    start = min
  }
  const [count, setCount] = useState(start);

  const increment = () => {
    if ( max == null ||count + step <= max ) {
      setCount(count + step);
    }
  }

  const decrement = () => {
    if ( min == null || count - step >= min ) {
      setCount(count - step);
    }
  }

  return (
    <div className="counter">
      <button className="counter-button" onClick={() => decrement()}>-</button>
      <h1 className="count">{count}</h1>
      <button className="counter-button" onClick={() => increment()}>+</button>
    </div>
  );
}

export default Counter;

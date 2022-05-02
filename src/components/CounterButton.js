import { useState } from "react";

export default function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Random Number: {count} </p>
      <button onClick={() => setCount(count + Math.floor(Math.random() * 10))}>
        Add Random
      </button>
    </div>
  );
}

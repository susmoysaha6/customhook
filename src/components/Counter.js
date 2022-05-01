import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + Math.floor(Math.random() * 10))}>
        Add Random
      </button>
    </div>
  );
}

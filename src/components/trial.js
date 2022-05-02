import { useState, useEffect, useRef } from "react";

export default function Counter3() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
    const updateCounter = setInterval(
      () => setCount((prev) => prev + Math.floor(Math.random() * 10)),
      1000
    );
    return () => {
      clearInterval(updateCounter);
      clearInterval(prevCountRef.current);
    };
  }, [count]);

  return (
    <div>
      <div>Random Count: {count}</div>
      <div>Previous Count: {prevCountRef.current}</div>
    </div>
  );
}

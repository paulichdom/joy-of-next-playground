"use client";
import React from "react";
import Spinner from "./Spinner/Spinner";

function Counter() {
  const [count, setCount] = React.useState<number | null>(null);

  React.useEffect(() => {
    const savedValue = window.localStorage.getItem("saved-count");

    setCount(savedValue ? Number(savedValue) : 0);
  }, []);

  React.useEffect(() => {
    if (typeof count === "number") {
      window.localStorage.setItem("saved-count", `${count}`);
    }
  }, [count]);

  const handleIncrementCount = () => {
    if (typeof count !== "number") {
      return;
    }

    setCount(count + 1);
  };

  return (
    <button className="count-btn" onClick={handleIncrementCount}>
      Count: {typeof count === "number" ? count : <Spinner />}
    </button>
  );
}

export default Counter;

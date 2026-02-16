"use client";
import React from "react";

type NumberOfHitsProps = {
  hits: number;
};

const NumberOfHits: React.FC<NumberOfHitsProps> = ({ hits }) => {
  const [isCensored, setIsCensored] = React.useState(true);
  const toggleCensoredHits = () => {
    setIsCensored((prev) => !prev);
  };

  const buttonClassName = isCensored ? "censored" : undefined;
   
  return (
    <p>
      You are visitor number{" "}
      <button className={buttonClassName} onClick={toggleCensoredHits}>
        {hits}
      </button>
    </p>
  );
};

export default NumberOfHits;

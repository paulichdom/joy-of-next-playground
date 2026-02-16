"use client";
import React from "react";

type CensoredProps = {
  children: React.ReactNode;
};

const Censored: React.FC<CensoredProps> = ({ children }) => {
  const [isCensored, setIsCensored] = React.useState(true);
  const toggleCensoredHits = () => {
    setIsCensored((prev) => !prev);
  };

  const buttonClassName = isCensored ? "censored" : undefined;
  return (
    <button className={buttonClassName} onClick={toggleCensoredHits}>
      {children}
    </button>
  );
};

export default Censored;

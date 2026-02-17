"use client";
import React from "react";

type SnippetProps = {
  children: React.ReactNode;
};

const Snippet: React.FC<SnippetProps> = ({ children }) => {
  const [showSnippet, settShowSnippet] = React.useState(false);
  return (
    <>
      {showSnippet ? (
        children
      ) : (
        <div className="reveal">
          <button onClick={() => settShowSnippet(true)}>Reveal Content</button>
        </div>
      )}
    </>
  );
};

export default Snippet;

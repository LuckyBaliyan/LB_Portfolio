import React from "react";

const SplitLine = ({ text, className = "" }) => {
  const lines = text.split(/\r?\n|<br\s*\/?>/);

  return (
    <>
      {lines.map((line, i) => (
        <span
          key={i}
          className={`reveal-line block translate-y-[200%] ${className}`}
          aria-hidden="true"
        >
          {line}
        </span>
      ))}
    </>
  );
};

export default SplitLine;
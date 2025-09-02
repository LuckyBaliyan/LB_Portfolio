import React from "react";

const SplitText = ({text,className = ''})=>(
    <>
    {text.split('').map((char,i)=>(
        <span key={i} className={`reveal-char inline-block translate-y-[150%] ${className}`} aria-hidden='true'>
            {char === ' ' ? '\u00A0':char}
        </span>
    ))}
    </>
)

export default SplitText;
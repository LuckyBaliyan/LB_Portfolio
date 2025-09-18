import { useRef, useEffect } from "react";

export default function FlipCard({ frontImg='', backImg='', cardRef=null }) {
  return (
    <div ref={cardRef} className="w-22 md:w-42 lg:w-52 aspect-video [perspective:1000px]">
      <div className="flip-inner relative w-full h-full [transform-style:preserve-3d]">
    
        <div className="absolute inset-0"   style={{ backfaceVisibility: "hidden" }}>
          <img
            src={frontImg}
            alt="Front"
            className="w-full h-full object-cover rounded-lg shadow-lg will-change-transform"
          />
        </div>
        
        <div className="absolute inset-0 [transform:rotateY(180deg)]"  style={{ backfaceVisibility: "hidden" }}>
          <img
            src={backImg}
            alt="Back"
            className="w-full h-full object-cover rounded-lg shadow-lg will-change-transform"
          />
        </div>
      </div>
    </div>
  );
}


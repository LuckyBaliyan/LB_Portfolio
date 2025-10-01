import React, { useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import MainBtn from "../../components/buttons/MainBtn";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const FlipCard = ({ frontImage, backImage }) => {
  const cardRef = useRef(null);

  // Always refresh ScrollTrigger on load
  useEffect(() => {
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);
    const timeout = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(cardRef.current, { transformStyle: "preserve-3d" });

      if (window.innerWidth >= 1023) {
        gsap.to(cardRef.current, {
          rotateY: 180,
          x: -500,
          y: 500,
          scale: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 40%",
            end: "bottom+=100 top",
            scrub: 2,
          }
        });
      } else {
        gsap.to(cardRef.current, {
          rotateY: 180,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-74 h-90 md:w-84 md:h-96 lg:w-74 lg:h-90 cursor-pointer perspective">
      <div
        ref={cardRef}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full custom-border"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={frontImage}
            alt="Front"
            className="w-full h-full object-cover parallax-anim scale-125"
          />
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full custom-border"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <img
            src={backImage}
            alt="Back"
            className="w-full h-full object-cover parallax-anim scale-125"
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;




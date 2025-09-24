import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MovingCard = ({ images, activeIndex, width = 250, height = 300, x, y, opacity }) => {
  const boxRef = useRef(null);
  const frontRefs = useRef([]);
  const backRefs = useRef([]);

  // Smooth follow for position
  useEffect(() => {
    if (!boxRef.current) return;
    const xTo = gsap.quickTo(boxRef.current, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(boxRef.current, "y", { duration: 0.4, ease: "power3.out" });
    xTo(x);
    yTo(y);
  }, [x, y]);

  // Animate active image reveal
  useEffect(() => {
    if (activeIndex === null || !frontRefs.current[activeIndex]) return;

    // reset all other images
    frontRefs.current.forEach((img, i) => {
      if (!img) return;
      if (i !== activeIndex) {
        gsap.set(img, { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", zIndex: 0 });
        gsap.set(backRefs.current[i], { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", zIndex: 0 });
      }
    });

    const frontEl = frontRefs.current[activeIndex];
    const backEl = backRefs.current[activeIndex];

    // bring active images to top
    gsap.set([backEl, frontEl], { zIndex: 1 });
    gsap.killTweensOf([backEl, frontEl]);

    // back layer animation (slightly delayed)
    gsap.fromTo(
      backEl,
      { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 0.7,
        ease: "power2.out"
      }
    );

    // front layer animation
    gsap.fromTo(
      frontEl,
      { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 0.6,
        ease: "power2.out",
        delay: 0.1
      }
    );
  }, [activeIndex]);

  return (
    <div
      ref={boxRef}
      style={{
        position: "absolute",
        transform: "translate(-50%, -50%)",
        width,
        height,
        opacity
      }}
      className="pointer-events-none overflow-hidden"
    >
      {images.map((src, i) => (
        <React.Fragment key={i}>
          {/* Back Layer */}
          <img
            ref={(el) => (backRefs.current[i] = el)}
            src={src}
            alt={`back-layer-${i}`}
            className="w-full h-full object-cover absolute"
            style={{
              top: "-10px",
              left: "-10px",
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
              filter: "blur(0.5px)"
            }}
          />
          {/* Front Layer */}
          <img
            ref={(el) => (frontRefs.current[i] = el)}
            src={src}
            alt={`front-layer-${i}`}
            className="w-full h-full object-cover absolute top-0 left-0"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default MovingCard;









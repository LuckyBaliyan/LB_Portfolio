import { useEffect, useRef, useState } from "react";

export const FloatingImage = ({ src, alt = "",col="", className = "", offsetMargin = 45 }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  useEffect(() => {
    let frame;
    let angle = 0;

    const animate = () => {
      if (!itemRef.current) return;

      // oscillates between -0.5 and 0.5 (smooth back & forth)
      const relativeX = Math.sin(angle) * 0.5 + 0.5;
      const relativeY = Math.cos(angle) * 0.5 + 0.5;

      const tiltX = (relativeY - 0.5) * offsetMargin;
      const tiltY = (relativeX - 0.5) * -offsetMargin;

      const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(0.95)`;

      setTransformStyle(newTransform);

      angle += 0.01;
      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frame);
  }, [offsetMargin]);

  return (
    <div
      ref={itemRef}
      className={`inline-block ${className}`}
      style={{
        transform: transformStyle,
        transition: "transform 0.8s linear",
        willChange: "transform",
      }}
    >
      <img src={src} alt={alt} className={`w-full h-full drop-shadow-2xl drop-shadow-[${col}]  z-[40]  object-cover rounded-lg`} />
    </div>
  );
};


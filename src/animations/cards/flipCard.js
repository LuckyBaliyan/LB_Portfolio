import gsap from "gsap";


export function flipCardAnimation(ref) {
  if (!ref.current) return null;
  const innerCard = ref.current.querySelector(".flip-inner");

  return gsap.to(innerCard, {
    rotateY:180,
    ease: "power2.inOut",
    duration: 1,
    repeat: -1,   
    yoyo: true,     
    repeatDelay: 4,   
  });
}

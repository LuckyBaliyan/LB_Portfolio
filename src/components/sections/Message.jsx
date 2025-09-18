import { useRef } from "react";
import FlipCard from "../features/FlipCard.jsx";
import { useGSAP } from "@gsap/react";
import { flipCardAnimation } from "../../animations/cards/flipCard.js";
import gsap from "gsap";
import SplitText from "../../animations/splitText/SplitText.jsx";
import { ScrollTrigger } from "gsap/all";
import SplitLine from "../../animations/splitText/SplitLine.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function Message() {
 const cardRef = useRef(null);

useGSAP(() => {
  flipCardAnimation(cardRef);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".pinner",
      start: "center bottom",
      end: "bottom +=800",
      scrub: 5,
      toggleActions: "play none none none",
      once: true,
    },
  });

  // text reveal
  tl.to(".slide1 h2 .reveal-char", {
    y: "0%",
    stagger: 1,
    duration: 8,
    ease: "power3.out",
  });

  // scale in image box
  tl.to(".slide1 .img-box", {
    scale:1,
    duration: 8,
    ease: "power3.inOut",
  });


  // scale in image box
  tl.to(".slide2 div", {
    scaleY: 1,
    duration: 8,
    ease: "power3.inOut",
  },"+=1");
    tl.to(".slide2 h2", {
    opacity: 1,
    duration: 8,
    ease: "power3.out",
  })
  
  tl.to(".slide2 div", {
    scaleY: 0,
    transformOrigin: "top",
    duration: 8,
  })

  tl.to(".slide3 h2 .reveal-char", {
    y: "0%",
    stagger: 0.5,
    duration: 2,
    ease: "power3.out",
  },'+=1');

  tl.to(".slide3 .img-box", {
    scale:1,
    duration: 1,
    ease: "back.out(1.7)",
  });

  tl.to('.slide4 .masker',{
    y:0,
    duration:1,
    ease:'back.out(1.2)',
  },"+=1")

  .to(".slide4 .div",{
    scaleX:1,
    duration:1,
    ease:'power3.inOut'
  })

  .to(".masker2",{
    scale:1,
    duration:1,
    ease:'bounce.out',
  })

  .to(".masker3",{
    width:"100%",
    duration:1,
    ease:'power3.inOut',
  })

}, []);


  return (
    <div>
        <div className="pinner flex flex-col items-center justify-center gap-1">
        <div className="slide slide1">
            <h2 className="mask"><SplitText text='I Craft' /></h2>
            <div className="relative img-box border-dashed border-2 rounded-lg p-2 origin-center scale-0">
                <FlipCard cardRef={cardRef} frontImg='/images/M1 (2).webp' 
                backImg='/images/M2 (2).webp'/>
            </div>
        </div>
        <div className="slide slide2 relative w-fit self-center">
         <h2 className="mask stroke-text opacity-0 origin-bottom text-center uppercase">The Next Gen</h2>
         <div className="absolute scale-y-0 origin-bottom top-0 left-0 w-full h-full bg-[#121212]"></div>
        </div>
        <div className="slide slide3">
            <h2 className="mask pb-2 capitalize text-8xl">
                <SplitText text='Digital experiences'/>
            </h2>
            <div className="border-[#121212] border-2  img-box scale-0 rounded-t-4xl p-2">
                <img src="/images/x.webp" alt="" className="rounded-t-4xl"/>
            </div>
        </div>
        <div className="slide slide4 mask">
            <h2 className="masker text-7xl translate-y-[150%] mr-10">With</h2>
            <div className="rounded-full div scale-x-0 overflow-hidden"><img src="/images/M3 (2).webp" alt="" /></div>
            <h2 className="scale-0 masker2 relative mb-2">Passion
              <div className="w-0 masker3 h-[12px] bg-black absolute -bottom-2 left-0"></div>
            </h2>
        </div>
        </div>
    </div>
  );
}

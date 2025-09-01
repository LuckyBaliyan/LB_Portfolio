import React,{useRef, useState} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Transition = (Page) => {


  return () => {

    const overlayRef = useRef(null);
    const textRef = useRef(null);
    const [showContent,setShowContent] = useState(false);

    useGSAP(() => {

      const tl = gsap.timeline();

      tl.set(overlayRef.current, {
        transformOrigin: "bottom",
        scaleY: 0,
        display: "flex",
      });

      tl.set(textRef.current,{
        y:100,
        opacity:0
      })

      tl.to(overlayRef.current, {
        scaleY: 1,
        duration: 0.6,
        ease: 'power4.in',
      });

      tl.to(textRef.current,{
        y:0,
        opacity:1,
        ease:'power4.inOut',
        duration:0.6,
      })

      tl.to(textRef.current,{
        y:-100,
        opacity:0,
        ease:'power4.inOut',
        duration:0.6,
      },'a')


      tl.to(overlayRef.current, {
        transformOrigin: "top",
        scaleY: 0,
        duration: 1,
        ease: 'power4.inOut',
        //delay: 0.1,
        onStart:()=>{
            setShowContent(true);
        }
      },'a');
    }, []);

  return (
    <>
      {showContent && <Page/>}

      <div
          ref={overlayRef}
          className="w-full h-screen fixed top-0 left-0 pointer-events-none z-[999] text-white bg-[#121212] flex justify-center items-center"
          style={{ transform: "scaleY(0)" }}
        >
          <h1 ref={textRef} className="text-white font-extrabold text-9xl">
            LB
          </h1>
        </div>
    </>
  );
};
}
export default Transition;
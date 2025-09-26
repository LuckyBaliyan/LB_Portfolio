import React, { useRef, useEffect } from 'react'
import SlideUp from '../../animations/pageTransition/SlideUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ImCross } from "react-icons/im";

gsap.registerPlugin(ScrollTrigger);

const Ideas = () => {
  const wordRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef([]);
  const rightRef = useRef(null);

  // new refs for the hover-reveal section
  const clipImagesRef = useRef([]);
  const headingsRef = useRef([]);
  const activeIndex = useRef(0); // track active image

  useEffect(() => {
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', handleLoad);
    const timeout = setTimeout(() => ScrollTrigger.refresh(), 500);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  useGSAP(() => {
    gsap.to(wordRef.current, {
      x: 800,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: wordRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    gsap.set(imageRef.current, { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', scale: 1.2 })

    gsap.to(imageRef.current, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      scale: 1,
      ease: 'power3.inOut',
      duration: 0.1,
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top bottom',
        end: "bottom +=1000",
        scrub: 5,
        toggleActions: "play none none none",
        once: true,
      }
    });

    gsap.matchMedia().add("(max-width: 768px)", () => {
      gsap.to(rightRef.current, {
        x: 0,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: rightRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      })
    });

    gsap.fromTo(containerRef.current,
      { yPercent: 100 },
      {
        yPercent: 0,
        ease: "power3.out",
        duration: 1,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current[0],
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        }
      }
    );


    // Initialize all images as clipped
    clipImagesRef.current.forEach((img, i) => {
      gsap.set(img, { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", scale: 1.2 });
    });
    
    // Hover / leave logic
    headingsRef.current.forEach((heading, i) => {
      heading.addEventListener("mouseenter", () => {
        clipImagesRef.current.forEach((img, j) => {
          if (j === i) {
            // Reveal hovered image
            gsap.fromTo(img,{clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",}, {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              scale: 1,
              duration: 0.8,
              ease: "power3.inOut"
            });
          } else {
            // Hide others smoothly
            gsap.to(img, {
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
              scale: 1.2,
              duration: 0.8,
              ease: "power3.inOut"
            });
          }
        });
      });
    
      heading.addEventListener("mouseleave", () => {
        // On leave, return all images to initial state (clipped)
        clipImagesRef.current.forEach((img, j) => {
          gsap.to(img, {
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            scale: 1.2,
            duration: 0.8,
            ease: "power3.inOut"
          });
        });
      });
    });


  }, [])

  return (
    <div className='py-32 bg-white rounded-t-4xl'>
      <div className='flex w-full gap-0 px-4'>
        <h4>(Ideas &nbsp;</h4>
        <h4 ref={wordRef}>in Motion)</h4>
      </div>
      <div className='w-full relative overflow-hidden h-screen mt-6'>
        <img ref={imageRef} src="images/idea3.webp" alt="" className='w-full h-full' />
      </div>
      <h4 ref={rightRef} className='md:hidden translate-x-[100%]'>in Motion)</h4>
      <div className='lg:ml-auto w-fit px-4 mt-6'>
        {
          [
            "Ideas in Motion is where creativity meets execution — turning abstract concepts into living, breathing experiences.I bring",
            "ideas to life through smooth interactions, thoughtful design, and purposeful animations that not only look good but feel right.",
            "Every movement has intent, every detail has meaning, and together they transform static visions into dynamic realities."
          ].map((line, i) => (
            <div key={i} className='mask'>
              <p ref={(el) => (containerRef.current[i] = el)} className='lg:whitespace-nowrap font-semibold text-xl md:text-2xl lg:text-xl'>
                {line}
              </p>
            </div>
          ))
        }
      </div>

      {/* ✨ NEW HOVER-REVEAL SECTION */}
      <div className="hidden lg:flex w-full h-screen justify-between px-16 items-center mt-32">
        {/* LEFT IMAGES */}
        <div className="relative w-[35vw] h-[37vw] overflow-hidden" style={{backgroundImage:`url(images/m1.webp)`,backgroundPosition:'center',
            backgroundSize:'cover',backgroundRepeat:'no-repeat'
        }}>
          {["images/dig.webp", "images/p5.webp", "images/idea3.webp"].map((src, i) => (
            <img
              key={i}
              ref={(el) => (clipImagesRef.current[i] = el)}
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
        </div>

        {/* RIGHT HEADINGS */}
        <div className="w-1/2 flex flex-col justify-center gap-12 px-12">
          {["Digital Designer", "Web Developer", "Brand Designer"].map((title, i) => (
            <div
              key={i}
              ref={(el) => (headingsRef.current[i] = el)}
              className="cursor-pointer group cm"
            >
              <h4 className="text-7xl font-[satoshi] inline-block tracking-normal font-bold">{title}&nbsp;
                <ImCross className='cn inline-block text-4xl'/></h4>
              <div className='bg-black w-0 h-[2px] cmm'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ideas;


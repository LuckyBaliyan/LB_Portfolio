import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useLocation } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

const useLenis = () => {
  const lenisRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.07,
    });

    lenisRef.current = lenis;

    lenis?.scrollTo(0,{immediate:true});

    const raf = (time) => {
      lenis.raf(time * 1000);
      ScrollTrigger.update();
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [location.pathname]);
};

export default useLenis;
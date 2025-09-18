import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Marquee = () => {
   useGSAP(() => {
      const marquee = document.querySelector('.marquee');
      const marqueeImgs = document.querySelectorAll('.marquee h2 img');
    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: marquee,
          start: 'top 90%',
          end: 'top top',     
          scrub: true,
        }
      });
    
      tl.to(marquee, {
        xPercent: -30,
        ease: 'none',
      }, 0); 
    
      tl.to(marqueeImgs, {
        rotate: 360, 
        ease: 'none',
      }, 0); 
    }, []);

  return (
   <div className='bg-[var(--black)]'>
    <div className='marquee'>
        <h2>
            Building <img src="/images/star.avif" alt="" /> 
            Interactive <img src="/images/star.avif" alt="" /> 
            Web Experiences <img src="/images/star.avif" alt="" /> 
            Creative Developer
            <img src="/images/star.avif" alt="" /> 
            Building <img src="/images/star.avif" alt="" /> 
            Interactive <img src="/images/star.avif" alt="" />
            Web Experiences <img src="/images/star.avif" alt="" /> 
            Creative Developer
            <img src="/images/star.avif" alt="" /> 
        </h2>
    </div>
   </div>
  )
}

export default Marquee
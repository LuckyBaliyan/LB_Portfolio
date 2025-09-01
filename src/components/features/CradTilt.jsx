import { useState,useRef } from "react";


export const CardTilt = ({children,className='',offsetMargin=25})=>{
   const [transfromStyle,setTransformStyle] = useState('');
   
   const itemRef = useRef(null);
   
   const handleMouseMove = (e)=>{
       if(!itemRef.current) return;
   
       const { left, top, height, width} = itemRef.current.getBoundingClientRect();
   
       const relativeX = (e.clientX - left) / width;
       const relativeY = (e.clientY - top) / height;
   
       const tiltX = (relativeY - 0.5)* offsetMargin;
       const tiltY = (relativeX - 0.5)* -offsetMargin;
   
       const newTransform = `perspective(700px) rotateX(${tiltX}deg)
       rotateY(${tiltY}deg) scale(0.95)`;
   
       setTransformStyle(newTransform);
   }
   
   const handleMouseLeave = (e)=>{
    setTransformStyle('');
   }

return(
    <div ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} 
    className={className} style={{transform:transfromStyle}}>
        {children}
    </div>
  )
}
import React,{useRef,useState,useEffect} from 'react'
import Transition from '../animations/pageTransition/Transition'
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'
import Menu from '../components/header/Menu'
import { works } from '../context/data'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom'

const Works = () => {
  const galleryRef = useRef(null);
  const [items,setItems] = useState([]);

  const navigate = useNavigate();
  const handleRoutes = (route)=>{
    if(route){
      navigate(`/project/${route}`);
    }
  }

 useEffect(()=>{

  gsap.fromTo(galleryRef.current,{scale:4},{scale:1,duration:0.45,delay:0.65,ease:'power4.inOut'})

  const generateItems = ()=>{
    const rows = [
      {id:1,count:4},
      {id:2,count:3},
      {id:3,count:4},
    ];

    const newItems  = rows.map(row=>{
      return Array.from({length:row.count},(_,index)=>{
        const itemId = `${row.id}-${index}`;
        const video = works.find((w)=> w.id === itemId);
        return{
          id:itemId,
          rowId:row.id,
          video:video
        }
      });
    });

    setItems(newItems);
  }

  generateItems();

  const handleMouseMove = (e) =>{
    const {clientX,clientY,currentTarget} = e;
    const {width,height} = currentTarget.getBoundingClientRect();
    const centerX = width / 2;
    const centerY = height / 2;

    const sensitivity = 1;
    const deltaX = (centerX - clientX) / sensitivity;
    const deltaY = (centerY - clientY) / sensitivity;

    galleryRef.current.style.transform = `translate(calc(-50% + ${deltaX}px),calc(-50% + ${deltaY}px))`;

  };

  const container = document.querySelector('.container');
  
  const addMouseMoveListener = () => {
    if (window.innerWidth > 768 && container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
  };

  const removeMouseMoveListener = () => {
    if (container) {
      container.removeEventListener('mousemove', handleMouseMove);
    }
  };

  const handleResize = () => {
    removeMouseMoveListener();
    addMouseMoveListener();
  };


  addMouseMoveListener();
  window.addEventListener('resize', handleResize);

  return () => {
    removeMouseMoveListener();
    window.removeEventListener('resize', handleResize);
  };

 },[])

  return (
    <>
      <Nav/>
      <div className="fixed top-4 right-4 opacity-100 pointer-events-auto z-[800]">
       <Menu />
      </div>
      <div className="container">
         <div className="gallery" ref={galleryRef}>
            {items.map((row,rowIndex)=>(
              <div key={`row-${rowIndex}`} className="row">
                {row.map((item)=>(
                  <div key={item.id} onClick={()=>handleRoutes(item.video?.routes)} className="item">
                    <div className="preview-img">
                      <img src={item.video.previewImg} alt={item.video.name} />
                    </div>
                    <p id='videoName'>{item.video.name}</p>
                    <div className="video-wrapper">
                      {item.video && (
                        <>
                          <video src={`${item.video.video?item.video.video:'/videos/ideas2.mp4'}`}
                          muted loop autoPlay className='w-full h-full object-cover'>
                          </video>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
         </div>
      </div> 
    </>
  )
}

export default Transition(Works);
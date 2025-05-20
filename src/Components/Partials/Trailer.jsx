import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import NotFound from '../Notfound';

const Trailer = () => {
    const navigate=useNavigate();
    const { pathname }=useLocation();
    const category =pathname.includes("movie") ? "movie" : "tv";
    const ytvideo = useSelector((state)=>state[category].info.videos);
    
  return (
    <div 
    className='bg-[rgba(0,0,0,.9)] z-[100] absolute top-0 left-0 w-screen h-screen 
    flex items-center justify-center'>

    
    <Link 
            onClick={()=>navigate(-1)} 
            className="absolute text-xl hover:text-[#6556CD] ri-close-fill text-3xl text-white right-[3%] top-[10%]">

      </Link>
      {ytvideo ? (<ReactPlayer
        controls
        height={750}
        width={1300}
       url={`https://www.youtube.com/watch?v=${ytvideo.key}`} 

       />
       ): (
        
       <NotFound />
       )
       
        } 

      
    </div>
  ) 
};

export default Trailer

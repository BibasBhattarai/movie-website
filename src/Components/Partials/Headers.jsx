import React from 'react'
import { Link } from 'react-router-dom';

const Headers = ({data}) => {
  
  return (
    <div style={{
      background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.4),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
               data.backdrop_path || data.profile_path})`,
      backgroundPosition: 'top 10%',
      backgroundSize:"cover",
      backgroundRepeat: 'no-repeat'
    }} 
    className='w-full h-[50vh] p-[6%] flex flex-col justify-end items-start'>
        <h1 className=' w-[65%] text-4xl font-bold text-white'>{data.name || 
            data.title || 
            data.original_title || 
            data.orginal_name}</h1>
    <p className='w-[60%] mt-3 mb-3 text-white'>{data.overview.slice(0,200)}...
      <Link className='text-blue-400'>more</Link>
    </p>
    
    <p className='text-white mt-2'>
    <i className="text-yellow-600 ri-megaphone-fill mr-1"></i>{data.release_date || "No Information"}
    <i className="ml-5 mr-1 text-yellow-600 ri-video-on-line"></i>{data.media_type.toUpperCase()}
    </p>
    <Link className='mt-5 p-3 bg-[#6556CD] rounded-lg text-white font-semibold'>Watch Trailer</Link>
    </div>
  )
}

export default Headers

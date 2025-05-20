import React from 'react'
import { Link } from 'react-router-dom';
import noimage from '/noimage.jpg'

const HorizontalCards = ({data}) => {
  // console.log(data);
  return (
    
      
      <div className='w-[100%] flex h-[48vh]  overflow-y-hidden     '>

        {data.length > 0 ? data.map((d,i)=> (
          <Link 
            to={`/${d.media_type}/details/${d.id}`} key={i} className='min-w-[18%] bg-zinc-900 h-full mr-5 mb-4 ' >
          <img 
            className='w-full h-[55%] object-cover '
            
            src={
               d.backdrop_path || d.poster_path ? `https://image.tmdb.org/t/p/original${
               d.backdrop_path || d.poster_path
               }` 
               :noimage
               } 
               alt="" />

            <div className='text-white p-3 h-[45%] overflow-y-auto'>
              <h1 className='mt-3 text-xl font-semibold '>{d.name || 
              d.title || 
              d.original_title || 
              d.orginal_name}</h1>

              <p className=''>{d.overview.slice(0,50)}...
              <span className='text-zinc-500'>more</span>
              </p>
            </div>

          
          </Link>
          
        )) : <h1 className='text-3xl text-white font-black text-center mt-5'>Nothing to show </h1> 
        } 

      </div>
   
  )
  
}

export default HorizontalCards

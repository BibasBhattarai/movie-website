import React from 'react'
import Dropdown from './Dropdown'

const HorizontalCards = ({data}) => {
  return (
    
      
      <div className='w-[100%] flex h-[48vh]  overflow-y-hidden    '>

        {data.map((d,i)=> (
          <div key={i} className='min-w-[18%] bg-zinc-900 h-full mr-5 mb-4 ' >
          <img 
            className='w-full h-[55%] object-cover'
            
            src={`https://image.tmdb.org/t/p/original${
               d.backdrop_path || d.poster_path}`} 
               alt="" />

            <div className='text-white p-3 h-[45%]'>
              <h1 className='mt-3 text-xl font-semibold '>{d.name || 
              d.title || 
              d.original_title || 
              d.orginal_name}</h1>

              <p className=''>{d.overview.slice(0,50)}...
              <span className='text-zinc-500'>more</span>
              </p>
            </div>

          
          </div>
          
        ))}

      </div>
   
  )
  
}

export default HorizontalCards

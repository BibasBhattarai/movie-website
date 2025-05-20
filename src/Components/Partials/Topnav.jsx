import axios from '../../Utils/axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg'


const Topnav = () => {
  
  const [query,setquery]=useState(" ");
  const [searches,setsearches]=useState([]);
//   console.log(searches);
  
  const Getsearches=async()=>{
   try {
      const {data}=await axios.get(`/search/multi?query=${query}`)
      setsearches(data.results);
   } catch (error) {
      console.log("Error:",error)
   }
  }

  useEffect(()=>{
   Getsearches(); 
  },[query])
  
   return (
    <div className='w-[80%]  h-[10vh] mx-auto flex items-center relative'>
      <i className="ri-search-line text-2xl text-zinc-400"></i>
      <input
      onChange={(e)=>{
         setquery(e.target.value)
      }}   
      value={query}
        className='  w-[50%] text-zinc-400 mx-10 p-3 text-xl outline-none border-none bg-transparent'
      type="text" placeholder='Search' />

      {query.length>0 && (<i onClick={()=>{setquery("")}} 
      className=" ri-close-line text-2xl text-zinc-400 right-0"></i>)}



         {/* < search box > */}
      <div className='z-[100] absolute w-[50%] max-h-[50vh] bg-zinc-100 top-[100%] left-[6%] overflow-auto  rounded'>
      {searches.map((s,i)=>(
         <Link 
            to={`/${s.media_type}/details/${s.id}`} key={i} 
         className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2
         border-zinc-300'>
            <img
            className='w-[10vh] h-[10vh] object-cover mr-5 rounded shadow-lg'
             src={
               s.backdrop_path || s.profile_path ?`https://image.tmdb.org/t/p/original/${
               s.backdrop_path || s.profile_path}`:noimage} 
            alt="" />
            <span>{s.name || 
            s.title || 
            s.original_title || 
            s.orginal_name}
            </span>
         </Link>
      ))}
      
         
      </div>
    </div>
  )
}

export default Topnav

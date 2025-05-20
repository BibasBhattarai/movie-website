import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import Topnav from './Partials/Topnav';
import Dropdown from './Partials/Dropdown';
import axios from '../Utils/axios';
import Cards from './Partials/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';






const Trending = () => {
   document.title="PopcornMode | Trending";
   const navigate=useNavigate();
    const [category,setcategory]=useState("all");
    const [duration,setduration]=useState("day");
    const [trending,settrending]=useState([]);
    const [page,setpage]=useState(1);
    const [hasMore,sethasMore]=useState(true);


    const GetTrending=async()=>{
      try {
         const {data}=await axios.get(`/trending/${category}/${duration}?page=${page}`);

         if(data.results.length>0){
            settrending((prevstate)=>[...prevstate,...data.results])
            setpage(page + 1);
         }else{
            sethasMore(false);
         }
         
        
      } catch (error) {
         console.log("Error:",error)
      }
      };

      // console.log(trending);


      const refershHandler=()=>{
            if(trending.length===0){
               GetTrending();
            }else{
               setpage(1);
               settrending([]);
               GetTrending();
            }

      }

      useEffect(()=>{
         refershHandler();
      },[category,duration]);


  return trending.length > 0 ? (
    <div className=' w-screen h-screen '>
     <div className='px-[5%] w-full flex items-center justify-between '>
        <h1 className='text-2xl font-semibold text-zinc-400'>
        <i onClick={()=>navigate(-1)} className="text-xl hover:text-[#6556CD] ri-arrow-left-line"></i>
            Trending
        </h1>

        <div className='flex items-center w-[80%]'>
          <Topnav />

          <Dropdown title="category"
          options={["movie","tv","all"]}
          func={(e)=>setcategory(e.target.value)}
         />
          <div className='w-[2%]'></div>
          <Dropdown title="duration"
          options={["week","day"]}
          func={(e)=>setduration(e.target.value)}
           />
        </div>
     </div>
        
        <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}>
            <Cards data={trending} title={category} />
        </InfiniteScroll>
    </div>
  ) : (
   <Loading/>
  )
}

export default Trending

import axios from '../Utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import Topnav from './Partials/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Dropdown from './Partials/Dropdown';
import Cards from './Partials/Cards';


const Tvshows = () => {
    document.title="PopcornMode | Tv shows";
    const navigate=useNavigate();
    const [category,setcategory]=useState("airing_today");
    const [tv,settv]=useState([]);
    const [page,setpage]=useState(1);
    const [hasMore,sethasMore]=useState(true);


    const GetTv=async()=>{
        try {
           const {data}=await axios.get(`/tv/${category}?page=${page}`);
          

           if(data.results.length>0){
              settv((prevstate)=>[...prevstate,...data.results])
              setpage(page + 1);
           }else{
              sethasMore(false);
           }
           
          
        } catch (error) {
           console.log("Error:",error)
        }
        };
  
        // console.log(tv);
  
  
        const refershHandler=()=>{
              if(tv.length===0){
                 GetTv();
              }else{
                 setpage(1);
                 settv([]);
                 GetTv();
              }
  
        }
  
        useEffect(()=>{
           refershHandler();
        },[category]);

  return tv.length > 0 ? (
    <div className=' w-screen h-screen '>
     <div className='px-[5%] w-full flex items-center justify-between '>
        <h1 className='text-2xl font-semibold text-zinc-400'>
        <i onClick={()=>navigate(-1)} className="text-xl hover:text-[#6556CD] ri-arrow-left-line"></i>
            Tv Shows<small className='text-sm ml-2 text-zinc-600'>
            ({category})</small> 
        </h1>

        <div className='flex items-center w-[80%]'>
          <Topnav />

          <Dropdown title="category"
          options={[
            "on_the_air",
            "popular",
            "top_rated",
            "airing_today"]}
          func={(e)=>setcategory(e.target.value)}
         />
        
        </div>
     </div>
        
        <InfiniteScroll
        dataLength={tv.length}
        next={GetTv}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}>
            <Cards data={tv} title="tv" />
        </InfiniteScroll>
    </div>
  ) : (
   <Loading />
  );
  
}

export default Tvshows

import axios from '../Utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import Topnav from './Partials/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Dropdown from './Partials/Dropdown';
import Cards from './Partials/Cards';

const Movie = () => {

   document.title="PopcornMode | Movies";
    const navigate=useNavigate();
    const [category,setcategory]=useState("now_playing");
    const [movie,setmovie]=useState([]);
    const [page,setpage]=useState(1);
    const [hasMore,sethasMore]=useState(true);


    const GetMovie=async()=>{
        try {
           const {data}=await axios.get(`/movie/${category}?page=${page}`);
          

           if(data.results.length>0){
              setmovie((prevstate)=>[...prevstate,...data.results])
              setpage(page + 1);
           }else{
              sethasMore(false);
           }
           
          
        } catch (error) {
           console.log("Error:",error)
        }
        };
  
        // console.log(movie);
  
  
        const refershHandler=()=>{
              if(movie.length===0){
                 GetMovie();
              }else{
                 setpage(1);
                 setmovie([]);
                 GetMovie();
              }
  
        }
  
        useEffect(()=>{
           refershHandler();
        },[category]);

  return movie.length > 0 ? (
    <div className=' w-screen h-screen '>
     <div className='px-[5%] w-full flex items-center justify-between '>
        <h1 className='text-2xl font-semibold text-zinc-400'>
        <i onClick={()=>navigate(-1)} className="text-xl hover:text-[#6556CD] ri-arrow-left-line"></i>
            Movie<small className='text-sm ml-2 text-zinc-600'>
            ({category})</small> 
        </h1>

        <div className='flex items-center w-[80%]'>
          <Topnav />

          <Dropdown title="category"
          options={[
            "popular",
            "top_rated",
            "upcoming",
            "now_playing"]}
          func={(e)=>setcategory(e.target.value)}
         />
        
        </div>
     </div>
        
        <InfiniteScroll
        dataLength={movie.length}
        next={GetMovie}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}>
            <Cards data={movie} title="movie" />
        </InfiniteScroll>
    </div>
  ) : (
   <Loading />
  );
  
}

export default Movie

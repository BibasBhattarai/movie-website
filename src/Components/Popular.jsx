import axios from '../Utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import Topnav from './Partials/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Dropdown from './Partials/Dropdown';
import Cards from './Partials/Cards';

const Popular = () => {
    document.title="PopcornMode | Popular"
    const navigate=useNavigate();
    const [category,setcategory]=useState("movie");
    const [popular,setpopular]=useState([]);
    const [page,setpage]=useState(1);
    const [hasMore,sethasMore]=useState(true);


    const GetPopular=async()=>{
        try {
           const {data}=await axios.get(`${category}/popular?page=${page}`);
          

           if(data.results.length>0){
              setpopular((prevstate)=>[...prevstate,...data.results])
              setpage(page + 1);
           }else{
              sethasMore(false);
           }
           
          
        } catch (error) {
           console.log("Error:",error)
        }
        };
  
        // console.log(popular);
  
  
        const refershHandler=()=>{
              if(popular.length===0){
                 GetPopular();
              }else{
                 setpage(1);
                 setpopular([]);
                 GetPopular();
              }
  
        }
  
        useEffect(()=>{
           refershHandler();
        },[category]);
  
    return popular.length > 0 ? (
        <div className=' w-screen h-screen '>
         <div className='px-[5%] w-full flex items-center justify-between '>
            <h1 className='text-2xl font-semibold text-zinc-400'>
            <i onClick={()=>navigate(-1)} className="text-xl hover:text-[#6556CD] ri-arrow-left-line"></i>
                Popular
            </h1>
    
            <div className='flex items-center w-[80%]'>
              <Topnav />
    
              <Dropdown title="category"
              options={["tv","movie"]}
              func={(e)=>setcategory(e.target.value)}
             />
            
            </div>
         </div>
            
            <InfiniteScroll
            dataLength={popular.length}
            next={GetPopular}
            hasMore={hasMore}
            loader={<h1>Loading...</h1>}>
                <Cards data={popular} title={category} />
            </InfiniteScroll>
        </div>
      ) : (
       <Loading />
      );
  
}

export default Popular

import React, { useEffect, useState } from 'react'
import Sidenav from './Partials/Sidenav'
import Topnav from './Partials/Topnav'
import axios from '../Utils/axios'
import Headers from './Partials/Headers'
import HorizontalCards from './Partials/HorizontalCards'
import Dropdown from './Partials/Dropdown'
import Loading from './Loading'


const Home = () => {
    document.title="PopcornMode | Homepage"
    const [wallpaper,setwallpaper]=useState(null);
    const [trending,settrending]=useState(null);
    const [category,setcategory]=useState("all")

    const GetHeaderWallpaper=async()=>{
        try {
           const {data}=await axios.get(`/trending/all/day`)
           let randomdata=data.results[(Math.random()*data.results.length).toFixed()];
           setwallpaper(randomdata);
        } catch (error) {
           console.log("Error:",error)
        }
    };

    
    const GetTrending=async()=>{
        try {
           const {data}=await axios.get(`/trending/${category}/day`)
           settrending(data.results);
        } catch (error) {
           console.log("Error:",error)
        }
    };

    
    useEffect(()=>{
        GetTrending();
        !wallpaper && GetHeaderWallpaper();
    },[category]);
    // console.log(trending);

    return wallpaper && trending ? (
   <>
    <Sidenav />
    <div className='w-[80%] h-full overflow-auto overflow-x-hidden '>
        <Topnav />
        <Headers data={wallpaper} />
        <div className=' flex justify-between p-5'>
            <h1 className='text-2xl font-semibold  text-zinc-400'>Trending</h1> 

           <Dropdown title="Filter" options={["tv","movie","all"]} 
           func={(e)=>setcategory(e.target.value)} />

        </div>

        <HorizontalCards data={trending} />
    </div>

   </>
  ): <Loading />
}

export default Home




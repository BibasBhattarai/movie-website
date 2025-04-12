import React, { useEffect, useState } from 'react'
import Sidenav from './Partials/Sidenav'
import Topnav from './Partials/Topnav'
import axios from '../Utils/axios'
import Headers from './Partials/Headers'

const Home = () => {
    document.title="PopcornMode | Homepage"
    const [wallpaper,setwallpaper]=useState(null);

    const GetHeaderWallpaper=async()=>{
        try {
           const {data}=await axios.get(`/trending/all/day`)
           let randomdata=data.results[(Math.random()*data.results.length).toFixed()];
           setwallpaper(randomdata);
        } catch (error) {
           console.log("Error:",error)
        }
    };

    
    useEffect(()=>{
        !wallpaper && GetHeaderWallpaper();
    },[]);


    return wallpaper ? (
   <>
    <Sidenav />
    <div className='w-[80%] h-full '>
        <Topnav />
        <Headers data={wallpaper} />
    </div>

   </>
  ): <h1>Loading</h1>
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div  className='w-[20%] h-full border-r-2 border-zinc-400 p-10 '>
        <h1 className='text-2xl text-white font-bold'>
        <i className="ri-tv-fill mr-2 "></i>
        <span>PopcornMode</span>

        </h1>

        <nav className='flex flex-col text-zinc-400 text-xl gap-1'>
            <h1 className='text-white font-semibold mt-8 mb-2 text -xl'>
            New Feeds</h1>
            <Link className='hover:bg-[#6556CD] hover:text-white p-3 rounded-lg'>
            <i className=" mr-2 ri-fire-fill"></i>Trending</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white p-3 rounded-lg'>
            <i className=" mr-2 ri-bard-fill"></i> Popular</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white p-3 rounded-lg'>
            <i className="mr-2 ri-movie-2-fill"></i> Movies</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white p-3 rounded-lg'>
            <i className="mr-2 ri-tv-2-fill"></i>TV Shows</Link>
            <Link className='hover:bg-[#6556CD] hover:text-white p-3 rounded-lg'>
            <i className="mr-2 ri-team-fill"></i>People</Link>


        </nav>
        <hr className='border-none h-[1px] bg-zinc-400 mt-1' />
        <nav className='flex flex-col text-zinc-400 text-xl gap-1'>
            <h1 className='text-white font-semibold mt-6 mb-5 text -xl'>
            News Feeds</h1>
            <Link className='hover:bg-[#6556CD] hover:text-white p-3 rounded-lg'>
            <i className=" mr-2 ri-information-fill"></i>About </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white p-3 rounded-lg'>
            <i className=" mr-2 ri-phone-fill"></i>Contact Us</Link>


        </nav>
        
    </div>
  )
}

export default Sidenav

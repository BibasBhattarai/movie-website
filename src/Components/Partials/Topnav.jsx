import React from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {
  return (
    <div className='w-full h-[10vh] flex justify-center items-center relative'>
    <i class="ri-search-line text-2xl text-zinc-400"></i>
    <input
        className=' w-[50%] text-zinc-400 mx-10 p-3 text-xl outline-none border-none bg-transparent'
     type="text" placeholder='Search' />
    <i class="ri-close-line text-2xl text-zinc-400"></i>


      <div className='absolute w-[50%] h-[50vh] bg-zinc-100 top-[90%] overflow-auto'>
        <Link className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2
         border-zinc-300'>
            <img src="" alt="" />
            <span>Hello Everyone</span>
         </Link>

         <Link className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2
         border-zinc-300'>
            <img src="" alt="" />
            <span>Hello Everyone</span>
         </Link>
         <Link className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2
         border-zinc-300'>
            <img src="" alt="" />
            <span>Hello Everyone</span>
         </Link>
         <Link className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2
         border-zinc-300'>
            <img src="" alt="" />
            <span>Hello Everyone</span>
         </Link>
         <Link className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2
         border-zinc-300'>
            <img src="" alt="" />
            <span>Hello Everyone</span>
         </Link>   
         <Link className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2
         border-zinc-300'>
            <img src="" alt="" />
            <span>Hello Everyone</span>
         </Link>   
         <Link className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2
         border-zinc-300'>
            <img src="" alt="" />
            <span>Hello Everyone</span>
         </Link>
      </div>
    </div>
  )
}

export default Topnav

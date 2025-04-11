import React from 'react'
import Sidenav from './Partials/Sidenav'
import Topnav from './Partials/Topnav'

const Home = () => {
    document.title="PopcornMode | Homepage"
    return (
   <>
    <Sidenav />
    <div className='w-[80%] h-full'>
        <Topnav />
    </div>

   </>
  )
}

export default Home

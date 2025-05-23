import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { asyncloadtv, removetv } from '../store/actions/tvActions'
import Loading from './Loading'
import HorizontalCards from './Partials/HorizontalCards'

const TvDetails = () => {

   const {pathname}=useLocation()
    const navigate=useNavigate();
    const {id}= useParams()
    const  {info}= useSelector(state=>state.tv)
    console.log(info);
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(asyncloadtv(id))
      return ()=>{
        dispatch(removetv());
      }
    },[id]);


    return info ? (
      <div style={{
        background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.4),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
                 info.detail.backdrop_path  })`,
        backgroundPosition: 'top 10%',
        backgroundSize:"cover",
        backgroundRepeat: 'no-repeat'
      }} 
       className='relative w-screen h-[230vh] px-[10%] ' >
  
        {/* part-1 Navigation */}
       
        <nav className='h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl  '>
        <Link 
        onClick={()=>navigate(-1)} className="text-xl hover:text-[#6556CD] ri-arrow-left-line">
  
        </Link>
        <a target="_blank" href={info.detail.homepage}><i className="ri-external-link-line"></i>
        </a>
  
        <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
        <i className="ri-earth-fill"></i>
        </a>
        
        <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>imdb</a>
        </nav>
        
           {/* part-2 poster and details */}
       
        <div className='w-full flex'>
            <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover'  
            src={`https://image.tmdb.org/t/p/original/${
                 info.detail.poster_path || info.detail.backdrop_path }`} alt="" 
  
                 />
          
              <div className='content ml-[5%] text-white'>
                <h1 className='text-5xl font-black  '>{
                  info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title
                }
                
                <small className='text-2xl font-bold text-zinc-200'>
                  ({info.detail.first_air_date.split("-")[0]})
                </small>
                </h1>
  
                  <div className='mt-3 mb-5 flex  items-center gap-x-3 '>
                    <span className="rounded-full text-xl font-semibold bg-yellow-600 text-white w-[6vh] h-[6vh]
                    flex justify-center items-center">
                    {(info.detail.vote_average*10).toFixed()}<sup>%</sup>
                    </span>
                    <h1 className='w-[60px] font-semibold text-2xl leading-6'>User Score</h1>
                    <h1>{info.detail.first_air_date}</h1>
                    <h1>
                      {info.detail.genres.map((g)=>g.name).join(",")}
                    </h1>
                    <h1>
                      {info.detail.runtime}min
                    </h1>
                  </div>
                 
                 
                  <h1 className='text-xl font-semibold italic text-zinc-200'>
                  {info.detail.tagline}
                  </h1>
  
                  <h1 className='text-2xl mt-2 mb-1'>
                    Overview
                  </h1>
                  <p>{info.detail.overview}</p>
  
                  <h1 className='text-2xl mt-5 mb-1'>
                    Tv Translated
                  </h1>
                  <p className='mb-5'>{info.translations.join(", ")}</p>
  
                  <Link className='p-3 bg-[#6556CD] rounded-lg' to={`${pathname}/trailer`}>
                  <i className="text-xl mr-3 ri-play-fill"></i>
                  Play Trailer</Link>
  
              </div>
        
  
    
        </div>
  
  
  
         {/* part-3 Available on platform */}
        <div className='w-[80%] flex flex-col gap-y-5 mt-10 '>
          
          
          {info.watchproviders &&
              info.watchproviders.flatrate &&  (
                <div className='flex gap-x-10 items-center text-white '>
                <h1>Available on platforms</h1>
                {info.watchproviders.flatrate.map((w,i)=>(
                <img 
                  key={i}
                  title={w.provider_name}
                className='w-[6vh] h-[6vh] object-cover rounded-md'
                src={`https://image.tmdb.org/t/p/original/${
                  w.logo_path }`} alt="" 
              />
              ))}
           
           
            
              </div>
              )
  
            }
  
            {info.watchproviders &&
              info.watchproviders.rent &&  (
                <div className='flex gap-x-10 items-center text-white '>
                <h1>Available on Rent</h1>
                {info.watchproviders.rent.map((w,i)=>(
                <img 
                  key={i}
                  title={w.provider_name}
                className='w-[6vh] h-[6vh] object-cover rounded-md'
                src={`https://image.tmdb.org/t/p/original/${
                  w.logo_path }`} alt="" 
              />
              ))}
           
           
            
              </div>
              )
  
            }
  
  
  
  
  
            
          
  
           
            {info.watchproviders &&
              info.watchproviders.buy &&  (
                <div className='flex gap-x-10 items-center text-white '>
                <h1>Available to buy</h1>
                {info.watchproviders.buy.map((w,i)=>(
                <img 
                key={i}
                title={w.provider_name}
                className='w-[6vh] h-[6vh] object-cover rounded-md'
                src={`https://image.tmdb.org/t/p/original/${
                  w.logo_path }`} alt="" 
              />
              ))}
           
           
            
              </div>
              )
  
            }
  
  
          </div>

          {/* part-4 Seasons */}
             <hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500' />
            <h1 className='mb-5 text-3xl font-bold text-white'>Seasons</h1>
            <div className='w-[100%] flex h-[48vh]  overflow-y-hidden mb-5 p-5'>  
              {info.detail.seasons.length > 0 ? info.detail.seasons.map((s,i)=>(
            <div className='w-[15vh] mr-[10%]'>
                  <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] min-w-[14vw] h-[30vh] object-cover'  src={`https://image.tmdb.org/t/p/original/${
               s.poster_path}`} alt="" 

               />
              <h1 className='text-2xl text-zinc-300 mt-3 font-semibold'>   
              {s.name}
            </h1>
            </div>

              )): <h1 className='text-3xl text-white font-black text-center mt-5'>Nothing to show </h1> }

           
            </div>


          
         {/* part-5 Recommendation and similar stuff */}
            <hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500' />
            <h1 className='mb-5 text-3xl font-bold text-white'>Recommendations and Similar Stuff</h1>
            <HorizontalCards 
            data={
              info.recommendations.length > 0 ? info.recommendations : info.similar
              }/>
            
            <Outlet />
        </div>
  
    
    ) : (
      <Loading />
    )
}

export default TvDetails

import React, { useContext } from 'react'
import { TrendingContext } from '../TrendingContext/TrendingContext';


export default function Home() 
{
  let {trendingMovies, trendingTvShow, trendingPerson} = useContext(TrendingContext);
  const imgPath = `https://image.tmdb.org/t/p/w500`

  return (
    <div className='container'>
      <div className='row my-4 pb-5'>
        <div className='col-md-4 mt-3 titleDiv'> {/*Media Screen */}
          <div className='manualBorder w-25 my-3'> </div>
          <h2 className='h3'> trending Movies <br/> to Watch <br/> Right Now </h2>
          <span className='text-muted fw-bold'>Trending Movies To Watch</span>
          <div className='manualBorder  my-3'> </div>
        </div>
        {trendingMovies.slice(0,15).map( (movie,index)=> <div key={index} className="col-md-2 col-sm-4 mt-3 ">  
              <div className='movie'> 
                <img className='w-100' src={imgPath + movie.poster_path} alt="" />
                <h3 className='h6 my-2 text-center'>{movie.title}</h3> 
              </div>  
        </div> )}
      </div>

      <div className='row my-4 pb-5'>
        <div className='col-md-4 mt-3 titleDiv'> 
          <div className='manualBorder w-25 my-3'> </div>
          <h2 className='h3'> trending Series <br/> to Watch <br/> Right Now </h2>
          <span className='text-muted fw-bold'>trending Series to Watch</span>
          <div className='manualBorder  my-3'> </div>
        </div>
        {trendingTvShow.slice(0,15).map( (tvShow,index)=> <div key={index} className="col-md-2 col-sm-4 mt-3 ">  
              <div className='tvShow'> 
                <img className='w-100' src={imgPath + tvShow.poster_path} alt="" />
                <h3 className='h6 my-2 text-center'>{tvShow.name}</h3> 
              </div>  
        </div> )}
      </div>
    
      <div className='row my-4'>
        <div className='col-md-4 mt-3 titleDiv'> 
          <div className='manualBorder w-25 my-3'> </div>
          <h2 className='h3'> trending Actors <br/> to Watch <br/> Right Now </h2>
          <span className='text-muted fw-bold'>trending Actors to Watch</span>
          <div className='manualBorder  my-3'> </div>
        </div>
        {trendingPerson.slice(0,16).map( (person,index)=>  person.profile_path?
          <div key={index} className="col-md-2 col-sm-4 mt-3 ">  
                <div className='person'> 
                  <img className='w-100' src={imgPath + person.profile_path} alt={person.name} />
                  <h3 className='h6 my-2 text-center'>{person.name}</h3> 
                </div>  
          </div> : '' )}

      </div>
    </div>
  )
}

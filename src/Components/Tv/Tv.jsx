import React, { useContext } from 'react'
import { TrendingContext } from '../TrendingContext/TrendingContext';

export default function Movies() 
{
  let {trendingTvShow} = useContext(TrendingContext);
  const imgPath = `https://image.tmdb.org/t/p/w500`;

  return (
    <div className='container'>
      <div className='row my-4 pb-5'>
        <div className='col-md-4 mt-3 titleDiv'> 
          <div className='manualBorder w-25 my-3'> </div>
          <h2 className='h3'> trending Series <br/> to Watch <br/> Right Now </h2>
          <span className='text-muted fw-bold'>trending Series to Watch</span>
          <div className='manualBorder  my-3'> </div>
        </div>
        {trendingTvShow.map( (tvShow,index)=> <div key={index} className="col-md-2 col-sm-4 mt-3 ">  
              <div className='tvShow'> 
                <img className='w-100' src={imgPath + tvShow.poster_path} alt="" />
                <h3 className='h6 my-2 text-center'>{tvShow.name}</h3> 
              </div>  
        </div> )}
      </div>
    </div>
  )
}

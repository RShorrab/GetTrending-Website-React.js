import React, { useContext } from 'react'
import { TrendingContext } from '../TrendingContext/TrendingContext';

export default function Actors() 
{
    let {trendingPerson} = useContext(TrendingContext);
    const imgPath = `https://image.tmdb.org/t/p/w500`;
    return (
        <div className='container'>
            <div className='row my-4'>
                <div className='col-md-4 mt-3 titleDiv'> 
                    <div className='manualBorder w-25 my-3'> </div>
                    <h2 className='h3'> trending Actors <br/> to Watch <br/> Right Now </h2>
                    <span className='text-muted fw-bold'>trending Actors to Watch</span>
                    <div className='manualBorder  my-3'> </div>
                </div>
                {trendingPerson.map( (person,index)=>  person.profile_path?
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
 
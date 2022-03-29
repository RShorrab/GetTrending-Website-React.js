import axios from "axios"
import { createContext, useEffect, useState } from "react"


export let TrendingContext = createContext([]);
export default function TrendingContextProvider(props) 
{
    const [trendingMovies, setTrendingMovies] = useState([]); 
    const [trendingTvShow, setTrendingTvShow] = useState([]); 
    const [trendingPerson, setTrendingPerson] = useState([]); 

    async function getTrending(mediaType, callBack)
    {
        let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=ca75b1e2e2321c7b02ed47b79ca5847f`);
        callBack(data.results);
    }

    useEffect( ()=> 
    {
        getTrending('movie', setTrendingMovies);
        getTrending('tv', setTrendingTvShow);
        getTrending('person', setTrendingPerson); 
    } , []);

    
    return(        
        <TrendingContext.Provider value={{trendingMovies, trendingTvShow, trendingPerson}}>
            {props.children}
        </TrendingContext.Provider>
    )
}

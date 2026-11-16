 import MovieCard from "./MovieCard"
 import {useEffect, useState} from "react"
 import axios from 'axios'
 import Pagination from "./Pagination"
function Movies({handleWatchList,movieObj}) {
  const [movies,setmovies]= useState([])
  const [pageNo,setpageNo]=useState(1)
  const handlePrevious=()=>{
    if(pageNo==1)
    {
      setpageNo(1)
    }  else{
        setpageNo(pageNo-1)

    }
  }
  const handleNext=()=>{
    setpageNo(pageNo+1)
  }
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f634e7a8836dfff39e817e7cdba4c2ee&language=en-US&page=${pageNo}`).then(function(res){
      setmovies(res.data.results)
      console.log(res.data.results)
    })
  },[pageNo])
  return (
    <div>
      <div className="text-2xl font-bold text-center">
      Trending movies
      </div >
      <div className='flex flex-row flex-wrap justify-around m-10 gap-8'>
        {movies.map((movieobj)=>{
                return  <MovieCard movieObj={movieobj} handleWatchList={handleWatchList} poster_path={movieobj.poster_path}name={movieobj.original_title}/>

        })}

        
        </div>
        <Pagination handleNext={handleNext} handlePrevious={handlePrevious} pageNo={pageNo}/>
       </div>
  )
}

export default Movies
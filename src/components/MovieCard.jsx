 
function MovieCard({poster_path,name , handleWatchList ,movieObj}) {
  return (
    <div className='relative h-[40vh] w-[200px] hover:scale-110 duration-300 rounded-xl bg-center bg-cover flex flex-col justify-end hover:cursor-pointer' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
      <div className='absolute top-0 right-0 m-4 flex  h-8 w-8 items-center rounded-2xl'onClick={()=>(handleWatchList(movieObj))}>&#128525;</div>
      <div className='text-white text-xl w-full p-2 text-center bg-gray-900/60'>
        {name}
      </div>
        
    </div>
  )
}

export default MovieCard
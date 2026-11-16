 
function WatchList() {
  return (
    <>


<div className='flex justify-center flex-wrap m-4'>
  <div className='rounded-2xl bg-blue-300 mx-4 h-[3rem] w-[9rem] flex justify-center items-center text-white font-bold'>Action</div>
   <div className='rounded-2xl bg-blue-300 mx-4  h-[3rem] w-[9rem] flex justify-center items-center text-white font-bold'>Action</div>
    <div className='rounded-2xl bg-blue-300 mx-4  h-[3rem] w-[9rem] flex justify-center items-center text-white font-bold'>Action</div>
</div>



       <div className='flex justify-center my-4'>
        <input className='bg-gray-200 p-2 px-4 rounded-xl my-3' type="text" placeholder='search for movie' />
      </div>
      <div className='overflow-hidden rounded-lg border m-8 border-gray-200'>
        <table className='w-full m-2 text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr >
              <td>Name</td>
              <td>rating</td>
              <td>popularity</td>
              <td>genre</td>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b-2'>
              <td className='flex items-center px-6 py-4'>
                <img className='h-[6rem] w-[10rem]' src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN6MBU9VxzNxqU0gzzOsgDR0Mpxn4_6BDHIzD-Xc8YaQ&s=10`} alt="" />
                <div className='mx-4'>The interstellar</div>
              </td>
              <td>8.5</td>
              <td>9</td>
              <td>Sci-fi </td>
              <td><button className='text-red-400 rounded-2xl bg-red-300/16 px-4'>Delete</button></td>
            </tr>
              <tr className='border-b-2'>
              <td className='flex items-center px-6 py-4'>
                <img className='h-[6rem] w-[10rem]' src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN6MBU9VxzNxqU0gzzOsgDR0Mpxn4_6BDHIzD-Xc8YaQ&s=10`} alt="" />
                <div className='mx-4'>The interstellar</div>
              </td>
              <td>8.5</td>
              <td>9</td>
              <td>Sci-fi </td>
              <td><button className='text-red-400 rounded-2xl bg-red-300/16 px-4'>Delete</button></td>
            </tr>
          </tbody>

        </table>
      </div>

      
     
    </>
  )
}

export default WatchList
import React from 'react'

function Pagination({pageNo,handleNext,handlePrevious}) {
  return (
    <div className='bg-gray-400 mt-8 p-4 flex justify-center'>
        <div className='hover:cursor-pointer hover:scale-110' onClick={handlePrevious}><i class="fa-solid fa-arrow-left"></i></div>
        <div className='px-8 text-bold'>{pageNo}</div>
        <div className='hover:cursor-pointer hover:scale-110 ' onClick={handleNext} ><i class="fa-solid fa-arrow-right"></i></div>

    </div>
  )
}

export default Pagination
import React from 'react'

const Card2 = ({ count, name, about }) => {
  return (
    <div className='shadow-[0px_0px_10px_gray] md:w-80 lg:w-95 h-73 p-4 text-center  rounded-2xl'>
      <h2 className='text-[#87BBD8] text-[80px] font-bold'>{count}</h2>
      <h3 className='text-[20px]'>{name}</h3>
      <p className='text-[16px] text-[gray] tracking-wide mt-2'>{about}</p>
    </div>
  )
}

export default Card2

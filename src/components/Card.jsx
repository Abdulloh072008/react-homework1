import React from 'react'

const Card = ({ count, name, about }) => {
  return (
    <div className='shadow-[0px_0px_10px_gray] lg:w-85 p-4 text-center  rounded-2xl'>
      <h2 className='text-[#87BBD8] text-[80px] font-bold'>{count}</h2>
      <h3 className='text-[20px]'>{name}</h3>
      <p className='text-[16px] text-[gray] tracking-wide mt-2'>{about}</p>
    </div>
  )
}

export default Card

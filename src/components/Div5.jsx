import React from 'react'

const Div5 = ({img,name,about,date}) => {
  return (
    <div className='border w-80 rounded-lg'>
      <img className='w-full' src={img} alt="" />
      <div className='p-5'>
        <p className='w-70 text-[18px] font-semibold'>{name}</p>
        <p className='w-70'>{about}</p>
      </div>
      <p className='p-5'>{date}</p>
    </div>
  )
}

export default Div5

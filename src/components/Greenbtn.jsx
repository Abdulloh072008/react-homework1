import React from 'react'


const Greenbtn = ({name}) => {
  return (
    <div className='flex gap-2'>
      <button className='bg-[#07AF91] py-4 md:px-10 px-7 rounded-[5px] text-white'>{name}</button>
    </div>
  )
}

export default Greenbtn

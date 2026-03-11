import React from 'react'

const Table = ({name,about,imgdown}) => {
  return (
    <div className='flex flex-wrap md:flex-nowrap justify-center items-center gap-3 md:justify-between shadow-[0px_0px_7px_gray] py-3 px-10 rounded-[5px] mt-5'>
      <div className='flex items-center gap-2 lg:gap-5 flex-wrap md:flex-nowrap'>
        <p className='text-[20px]  md:text-[16px] text-[blue] m-auto'>{name}</p>
        <p  className='text-[20px] md:text-[16px] text-center'>{about}</p>
      </div>
      <img src={imgdown} alt="" />
    </div>
  )
}

export default Table

import React from 'react'

const Section3map = ({name,about,img1,img2,img3,img4}) => {
  return (
    <div className='max-w-350 w-[90%] m-auto'>
      <div className='flex justify-between'>
        <div >
            <h1 className='text-[40px] text-[green]'>{name}</h1>
            <p className='w-92.5 mt-5 text-[20px]'>{about}</p>
        </div>
        <div className='hidden lg:block'>
            <img className='w-230' src={img1} alt="" />
        </div>
      </div>
      <div className='flex justify-between flex-wrap mt-5 gap-5'>
        <img className='w-99' src={img2} alt="" />
        <img className='w-99' src={img3} alt="" />
        <img className='w-99' src={img4} alt="" />
      </div>
    </div>
  )
}

export default Section3map

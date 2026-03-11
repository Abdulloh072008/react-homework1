import React from 'react'
import rectangul from '../assets/Rectangle 1992.png'

const Section16 = ({name,about,children}) => {
  return (
    <div style={{backgroundImage:`url(${rectangul})`}} className='bg-no-repeat bg-cover text-white mb-15'>
        <div className='bg-[#00000061] flex flex-col gap-5 items-center py-15'>
      <p className='md:text-[40px] text-[27px] font-semibold text-center md:w-190'>{name}</p>
      <p className='text-center md:w-190 text-[20px]'>{about}</p>
      {children}
        </div>
    </div>
  )
}

export default Section16

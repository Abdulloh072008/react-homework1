import React from 'react'

const Section12 = ({children,name}) => {
  return (
    <div className=' max-w-300 w-[90%] m-auto mb-15 flex flex-wrap-reverse justify-center md:text-center lg:text-start gap-4 lg:items-center lg:justify-between shadow-[0px_0px_7px_gray] px-7' >
      {children}
      <p className='w-152 text-[20px] mt-7'>{name}</p>
    </div>
  )
}

export default Section12

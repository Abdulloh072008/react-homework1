import React from 'react'

const Contaner = ({children}) => {
  return (
    <div className='flex items-center justify-center text-center lg:text-start lg:justify-between my-10 flex-wrap-reverse '>
      {children}
    </div>
  )
}

export default Contaner

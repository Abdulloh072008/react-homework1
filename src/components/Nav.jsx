import React from 'react'

const Nav = ({children}) => {
  return (
    <div className='max-w-300 w-[90%] m-auto flex items-center justify-between py-5'>
      {children}
    </div>
  )
}

export default Nav

import React from 'react'
import bgimg from '../assets/uae-4-2048x1367 2.png'

const Header = ({children}) => {
  return (
    <div style={{backgroundImage:`url(${bgimg})`}} className='bg-no-repeat bg-cover'>
        <div className='bg-[#00000074]'>
      {children}
        </div>

const Header = ({ children }) => {
  return (
    <div className='bg-[lightgray]'>
      {children}
    </div>
  )
}

export default Header

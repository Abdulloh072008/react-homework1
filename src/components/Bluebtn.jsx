import React from 'react'

const Bluebtn = ({name , w}) => {
  return (
    <div>
      <button className='bg-linear-to-l from-[#1279B3] to-[#61B5E4] py-4 px-8 text-white rounded-[5px] ' style={{width:w}}>{name}</button>
    </div>
  )
}

export default Bluebtn

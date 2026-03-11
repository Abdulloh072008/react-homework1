import React from 'react'

const Mainsection = ({ children }) => {
    return (
        <div className='bg-[#686868]'>
            <div  className='max-w-350 w-[90%] m-auto py-15'>
                {children}
            </div>
        </div>
    )
}

export default Mainsection

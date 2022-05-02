import React from 'react'

type Props = {}

function SlideFooter({}: Props) {
  return (
    <div className='flex justify-between items-center mt-3'>
        <button className='p-4 bg-orange-600 rounded-lg drop-shadow-lg'>Book Now</button>
        <p>Track Record {'->'}</p>
    </div>
  )
}

export default SlideFooter
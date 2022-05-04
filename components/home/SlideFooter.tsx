import React from 'react'
import Button from '../Button'

type Props = {}

function SlideFooter({}: Props) {
  return (
    <div className='flex justify-between items-center mt-3'>
        <Button text='Book now' />
        <p>Track Record {'->'}</p>
    </div>
  )
}

export default SlideFooter
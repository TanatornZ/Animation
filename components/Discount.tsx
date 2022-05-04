import Image from 'next/image'
import React from 'react'
import Button from './Button'
import TitleSection from './TitleSection'

type Props = {}

function Discount({}: Props) {
  return (
    <div className='mt-16 bg-gradient-to-b from-content-start pt-16 to-content-end  rounded-lg flex flex-col justify-center items-center'>
        <TitleSection title1="50% Discount" title2='On New Products' />
        <div className="my-5"></div>
        <Button text='Go to new' />
        <div className="w-48 h-36 relative my-3">
            <Image src="/images/discount-img.png" layout='fill' alt="Discount" />
        </div>
    </div>  
  )
}

export default Discount
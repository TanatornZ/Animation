import Image from 'next/image'
import React from 'react'
import Button from './Button'
import TitleSection from './TitleSection'

type Props = {}

function Discount({}: Props) {
  return (
    <div className='bg-gradient-to-b from-content-start mt-16 py-10 to-content-end  rounded-3xl flex flex-col md:flex-row-reverse justify-around items-center w-[90%] max-w-3xl mx-auto '>
        <div className="text-center">
          <TitleSection title1="50% Discount" title2='On New Products' />
          <div className="my-5"></div>
          <Button text='Go to new' />
        </div>
        <div className="w-48 h-36 relative my-3">
            <Image src="/images/discount-img.png" layout='fill' alt="Discount" />
        </div>
    </div>  
  )
}

export default Discount
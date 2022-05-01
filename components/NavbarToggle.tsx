import Image from 'next/image'
import React from 'react'
import {MdCancel} from 'react-icons/md'
type Props = {
    setShowMenu:  React.Dispatch<React.SetStateAction<boolean>> ;
    showMenu: boolean
}

function NavbarToggle({ setShowMenu , showMenu}: Props) {

    

  return (
    <div className={`relative bg-gradient-to-b from-body-start to-[#6E7140] w-full z-10 p-5 rounded-b-3xl relative ${showMenu ? '-translate-y-[442px]' : '-translate-y-[0]'} transition-transform duration-300`}>
        <div className="w-28 h-32 absolute top-0 left-0">
            <Image src='/images/nav-img.png' layout='fill' alt='navbar' className='absolute' />
        </div>
        <MdCancel size='40' className='absolute right-5 fill-white' onClick={() => setShowMenu(!showMenu)}/>
        <ul className='flex flex-col justify-center items-center text-white leading-[3rem] text-xl font-bold mt-3'>
            <li>Home</li>
            <li>About</li>
            <li> Candy</li>
            <li>New</li>
            <li className='rounded-full border-2 py-3 px-6 mt-3'>Support</li>
        </ul>
    </div>
  )
}

export default NavbarToggle
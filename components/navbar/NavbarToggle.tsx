import Image from 'next/image'
import React from 'react'
import {MdCancel} from 'react-icons/md'
import NavItem from './NavItem';
type Props = {
    setShowMenu:  React.Dispatch<React.SetStateAction<boolean>> ;
    showMenu: boolean
}

function NavbarToggle({ setShowMenu , showMenu}: Props) {


  return (
    <div className={`absolute bg-gradient-to-b from-body-start to-[#6E7140] w-full z-10 p-5 rounded-b-3xl ${showMenu ? '-translate-y-[0]' : '-translate-y-[442px]'} transition-transform duration-500`}>
        <div className="w-28 h-32 absolute top-0 left-0">
            <Image src='/images/nav-img.png' layout='fill' alt='navbar' className='absolute' />
        </div>
        <MdCancel size='40' className='absolute right-5 fill-white' onClick={() => setShowMenu(!showMenu)}/>
        <ul className='flex flex-col justify-center items-center text-white leading-[3rem] text-xl font-bold mt-3 '>
            <NavItem />
            <li className="rounded-full border-2 px-5 mt-4">Support</li>
        </ul>
    </div>
  )
}

export default NavbarToggle
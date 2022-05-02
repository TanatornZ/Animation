import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Content from '../components/Content'
import Home from '../components/home/Home'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Index() {

  // const [loading , setLoading] = useState<boolean>(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   } , 2500)

  // },[])


  return (
    <div className="bg-gradient-to-r from-body-start to-body-end w-screen h-screen">
      <Navbar />

      <div className='pt-20 px-2'>
          <Home />
      </div>
    </div>
  )
}
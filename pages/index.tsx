import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Content from '../components/Content'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [loading , setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    } , 2500)

  },[])


  return (
    <div className="bg-gradient-to-r from-body-start to-body-end w-screen h-screen max-h-screen max-w-screen ">
      {loading ? <Loader /> : <Navbar />}
    </div>
  )
}
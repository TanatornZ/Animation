import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Content from '../components/Content'
import Loader from '../components/loader'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [loading , setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    } , 2500)

  },[])


  return (
    <div className="bg-slate-400 w-screen h-screen max-h-screen max-w-screen px-36 py-12 flex justify-center items-center">
      {loading ? <Loader /> :<Content />}
    </div>
  )
}
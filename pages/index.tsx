import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import About from '../components/About'
import Category from '../components/category/Category'
import Content from '../components/Content'
import Discount from '../components/Discount'
import Footer from '../components/footer/Footer'
import Home from '../components/home/Home'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import NewArrival from '../components/newArrivals/NewArrival'
import NewLetter from '../components/NewLetter'
import TrickOrTreat from '../components/trickOrtreat/TrickOrTreat'
import styles from '../styles/Home.module.css'

export default function Index() {

  // const [loading , setLoading] = useState<boolean>(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   } , 2500)

  // },[])


  return (
    <div className="bg-gradient-to-r from-body-start to-body-end w-full h-full min-h-screen">
      <Navbar />

      <div className='pt-20 px-5'>
          <Home />
          <Category />
          <About />
          <TrickOrTreat />
          <Discount />
          <NewArrival />
          <NewLetter />
      <Footer />
      </div>

    </div>
  )
}
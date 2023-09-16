import React from 'react'
import { Header } from '../Header/Header'
import { Body } from '../Body/Body'
import { Footer } from '../Footer/Footer'
import './Home.css'


export const Home = () => {
  return (
    <>
      <main>
        <Header/>
        <Body/>
        <Footer/>
      </main>
    </>
  )
}

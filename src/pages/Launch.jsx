import React from 'react'
import LogoSection from '../components/LogoSection.jsx'
import Header from '../components/LaunchHeader.jsx'
import Startup from '../components/Startup.jsx'
import LaunchCards from '../components/LaunchCards.jsx'
import LaunchBanner from '../components/LaunchBanner.jsx'

const Home = () => {
  return (
    <>
      <Header />
      <LogoSection />
      <Startup />
      <LaunchCards />
      <LaunchBanner />
    </>
  )
}

export default Home
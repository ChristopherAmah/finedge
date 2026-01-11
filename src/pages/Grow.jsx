import React from 'react'
import LogoSection from '../components/LogoSection.jsx'
import Header from '../components/GrowHeader.jsx'
import CoreUseCase from '../components/CoreUseCase.jsx'
import GrowCards from '../components/GrowCards.jsx'
import GrowBanner from '../components/GrowBanner.jsx'

const Home = () => {
  return (
    <>
      <Header />
      <LogoSection />
      <CoreUseCase />
      <GrowCards />
      <GrowBanner />
    </>
  )
}

export default Home
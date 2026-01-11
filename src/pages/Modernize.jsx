import React from 'react'
import LogoSection from '../components/LogoSection.jsx'
import Header from '../components/ModernizeHeader.jsx'
import ChallengesFaced from '../components/ChallengesFaced.jsx'
import ModernizeCards from '../components/ModernizeCards.jsx'
import ModernizeBanner from '../components/ModernizeBanner.jsx'

const Home = () => {
  return (
    <>
      <Header />
      <LogoSection />
      <ChallengesFaced />
      <ModernizeCards />
      <ModernizeBanner />
    </>
  )
}

export default Home
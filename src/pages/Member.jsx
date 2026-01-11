import React from 'react'
import LogoSection from '../components/LogoSection.jsx'
import Header from '../components/MemberHeader.jsx'
import MemberCentric from '../components/MemberCentric.jsx'
import MemberCards from '../components/MemberCards.jsx'
import MemberBanner from '../components/MemberBanner.jsx'

const Home = () => {
  return (
    <>
      <Header />
      <LogoSection />
      <MemberCentric />
      <MemberCards />
      <MemberBanner />
    </>
  )
}

export default Home
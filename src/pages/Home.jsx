import React from 'react'
import BankAnywhere from '../components/BankAnywhere.jsx'
import CoreBankingCards from '../components/CoreBankingCards.jsx'
import CoreBankingSection from '../components/CoreBankingSection.jsx'
import Cards from '../components/Cards.jsx'
import LogoSection from '../components/LogoSection.jsx'
import Header from '../components/Header.jsx'

const Home = () => {
  return (
    <>
      <Header />
      <LogoSection />
      <Cards />
      <CoreBankingSection />
      <CoreBankingCards />
      <BankAnywhere />
    </>
  )
}

export default Home
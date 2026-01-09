import React from 'react'
import Header from '../components/ResourceHeader.jsx'
import LogoSection from '../components/LogoSection.jsx'
import ResourceDocumentation from '../components/ResourceDocumentation.jsx'
import CustomerSuccess from '../components/CustomerSuccess.jsx'
import QuestionsAnswered from '../components/QuestionsAnswered.jsx'

const Product = () => {
  return (
    <>
    <Header />
    <LogoSection />
    <ResourceDocumentation />
    <CustomerSuccess />
    <QuestionsAnswered />
    </>
  )
}

export default Product
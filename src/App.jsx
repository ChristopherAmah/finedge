import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import TopBar from './components/TopBar.jsx'
import Footer from './components/Footer.jsx'
import Demo from './components/Demo.jsx'
import Product from './pages/Product.jsx'
import Request from './pages/Request.jsx'
import WhyFinedge from './pages/WhyFinedge.jsx'
import Resources from './pages/Resources.jsx'
import Modernize from './pages/Modernize.jsx'
import Grow from './pages/Grow.jsx'
import Member from './pages/Member.jsx'
import Launch from './pages/Launch.jsx'
import CookiePolicy from './pages/CookiePolicy.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import ScrollToTop from './ScrollToTop.jsx'

function App() {
  return (
    <>
      <TopBar />
         <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/resources&faqs" element={<Resources />} />
        <Route path="/why-finedge" element={<WhyFinedge />} />
        <Route path="/demo" element={<Request />} />
        <Route path="/solutions/modernize-banking" element={<Modernize />} />
        <Route path="/solutions/grow" element={<Grow />} />
        <Route path="/solutions/member" element={<Member />} />
        <Route path="/solutions/launch" element={<Launch />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Demo />
      <Footer />
    </>
  )
}

export default App

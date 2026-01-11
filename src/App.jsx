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

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/resources&faqs" element={<Resources />} />
        <Route path="/why-finedge" element={<WhyFinedge />} />
        <Route path="/demo" element={<Request />} />
        <Route path="/solutions/modernize-banking" element={<Modernize />} />
      </Routes>
      <Demo />
      <Footer />
    </>
  )
}

export default App

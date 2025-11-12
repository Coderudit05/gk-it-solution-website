import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
// import Brands from './pages/Brands.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
     <>
      <Navbar />
      
      <div className="pt-20 min-h-screen bg-[#1A1E31] text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/brands" element={<Brands />} /> */}
          <Route path='/services' element={<Services/>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
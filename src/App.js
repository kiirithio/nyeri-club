import React from 'react'
import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Contact from './components/Contact/Contact';
import Membership from './components/Membership/Membership';
import Homepage from './components/Home/Homepage';
import Gallery from './components/Gallery/Gallery';
import Experience from './components/Experience/experience';
import About from './components/About/About'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/home' element={<Homepage />} />
            <Route path='/about' element={<About />} />
            <Route path='/membership' element={<Membership />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
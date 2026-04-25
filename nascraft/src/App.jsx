import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import { AvailBadge, WhatsAppBtn } from './components/FloatingButtons'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Process from './pages/Process'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import Forum from './pages/Forum'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/about"    element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/process"  element={<Process />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="/booking"  element={<Booking />} />
        <Route path="/forum"    element={<Forum />} />
        <Route path="*"         element={<NotFound />} />
      </Routes>
      <Footer />
      <AvailBadge />
      <WhatsAppBtn />
    </>
  )
}

export default function App() {
  const [ready, setReady] = useState(false)

  return (
    <>
      <div id="noise" />
      <Cursor />
      {!ready && <Preloader onDone={() => setReady(true)} />}
      <div style={{ opacity: ready ? 1 : 0, transition: 'opacity .5s ease' }}>
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Layout />
        </BrowserRouter>
      </div>
    </>
  )
}

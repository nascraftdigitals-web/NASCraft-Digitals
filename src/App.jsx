import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import WorkMarquee from './components/WorkMarquee'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import ThemeToggle from './components/ThemeToggle'
import LiveChat from './components/LiveChat'
import { AvailBadge, WhatsAppBtn } from './components/FloatingButtons'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Process from './pages/Process'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import Forum from './pages/Forum'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
// import Calculator from './pages/Calculator'
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
      <PageTransition>
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/about"    element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/process"  element={<Process />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="/booking"  element={<Booking />} />
        <Route path="/forum"    element={<Forum />} />
        <Route path="/pricing"  element={<Pricing />} />
        <Route path="/blog"     element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        {/* <Route path="/calculator" element={<Calculator />} /> */}
        <Route path="*"         element={<NotFound />} />
      </Routes>
      </PageTransition>
      <WorkMarquee />
      <Footer />
      <AvailBadge />
      <WhatsAppBtn />
      <LiveChat />
    </>
  )
}

export default function App() {
  const [ready, setReady] = useState(false)

  return (
    <ThemeProvider>
      <div id="noise" />
      <ScrollProgress />
      <Cursor />
      {!ready && <Preloader onDone={() => setReady(true)} />}
      <div style={{ opacity: ready ? 1 : 0, transition: 'opacity .5s ease' }}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
      <ThemeToggle />
      <BackToTop />
    </ThemeProvider>
  )
}

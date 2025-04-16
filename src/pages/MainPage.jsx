import React from 'react'
import Navbar from '../components/main/Navbar'
import Hero from '../components/main/Hero'
import FeaturedProduct from '../components/main/FeaturedProduct'
import Footer from '../components/main/Footer'
import About from '../components/main/About'
function MainPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <FeaturedProduct />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default MainPage

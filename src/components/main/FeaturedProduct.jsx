import React from 'react'
import FeaturedProductSwiper from '../main/FeaturedProductSwiper'

function FeaturedProduct() {
  return (
    <>
      <header>
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-12 mb-5 underline underline-offset-8 decoration-[#FFB800]">
          Featured Products
        </h1>
      </header>
      <FeaturedProductSwiper />
    </>
  )
}

export default FeaturedProduct

import React from 'react'
import Navbar from './Navbar'
import HeroCarousel from './Hero'
import ProductsPage from './Products'
import Reviews from './Review'

const index = () => {
  return (
  <>
  <HeroCarousel/>
  <ProductsPage/>
  <Reviews/>
  </>
  )
}

export default index
import React from 'react'
import Navbar from './Navbar/pages'
import HeroCarousel from './Hero/pages'
import ProductsPage from './Products/pages'
import Reviews from './Review/pages'

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
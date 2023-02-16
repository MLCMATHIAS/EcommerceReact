//comando rafce:para crear la extructura rapida
import React from 'react'
import Navbar from '../components/Navbar'
import Anuncios from '../components/Anuncios'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div className='container'>
      <Anuncios/>
      <Navbar/>
      <Slider/>
      <Categories/>   
      <Products/>
      <Newsletter/>
      <Footer/>
    </div >
  )
}

export default Home

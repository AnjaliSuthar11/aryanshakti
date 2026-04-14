import React from 'react'
import Slider from '../components/Slider'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Navbar2 from '../components/Navbar2'
import Navbar3 from '../components/Navbar3'
import Catagories from '../components/Catagories'
import FeaturedProduct from '../components/FeaturedProduct'
import MiddleBanner from '../components/MiddleBanner'
import ServiceDisplay from '../components/ServiceDisplay'
import InstaReel from '../components/InstaReel'
import DisplayReel from '../components/DisplayReel'


const page = () => {
  return (
    <div>
 
     <Slider/>
     <Catagories/>
     <FeaturedProduct/>
     <MiddleBanner/>
     <ServiceDisplay/>
<Products/>
<DisplayReel/>


    </div>
  )
}

export default page

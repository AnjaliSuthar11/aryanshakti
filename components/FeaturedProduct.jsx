import React from 'react'
import Product from './Product'
import Feature from '../Feature'

const FeaturedProduct = () => {
  return (
    <div className='flex flex-col justify-center items-center py-10 px-5'>
<div className='text-center'>
    <h1 className='text-2xl md:text-4xl font-semibold'> FEATURED PRODUCTS</h1>
</div>
    <div className='flex flex-wrap gap-8 justify-center items-center py-10'>
        {Feature.map((item)=>(
            <Product key={item.id} product={item} />

        ))}
    </div>
            
    </div>
  )
}

export default FeaturedProduct

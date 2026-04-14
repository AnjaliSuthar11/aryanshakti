import React from 'react'
import Product from './Product'
import Feature from '../Feature'

const FeaturedProduct = () => {
  return (
    <div className='flex flex-col justify-center items-center p-10'>
<div className='text-center'>
    <h1 className='text-4xl'>Featured Products</h1>
</div>
    <div className='flex flex-wrap gap-10 justify-center items-center p-10'>
        {Feature.map((item)=>(
            <Product key={item.id} product={item} />

        ))}
    </div>
            
    </div>
  )
}

export default FeaturedProduct

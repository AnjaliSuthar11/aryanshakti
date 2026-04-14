"use client"
import Product from './Product'
import products from '../Product'

const Products = () => {

  return (
    <div className='flex flex-col justify-center items-center bg-gray-100 p-10'>

      <div className='flex items-center flex-col gap-2'>
      <h1 className='text-3xl'>Our Products</h1>
      <p className='text-[#7a767e] text-center'>Browse our wide range of certified pharmaceutical products and health essentials.</p>
      </div>

      <div className='flex flex-wrap gap-8 px-4 py-10 justify-center items-center '>
        {products.map((item)=>(
          <Product key={item.id} product={item}/>
        ))}
 
      </div>
    </div>
  )
}

export default Products

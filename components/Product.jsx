"use client"
import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { useApp } from '../context/AppContext';
import products from '../Product';

const Product = ({product}) => {
   const { cart, addToCart, increaseQty, decreaseQty } = useApp();

  const quantity = cart[product.id] || 0;
  return (
    <div className='flex flex-col w-70 rounded-2xl bg-white shadow-md  '> 
      
      {/* Image */}
      <div className='w-full h-60 overflow-hidden rounded-t-2xl'> 
        <img 
          src={product.image} 
          className='w-full h-full object-cover'
        />
      </div>

      {/* Content */}
      <div className='flex flex-col gap-1 px-4 py-2'> 
        <p className='text-sm text-[#7a767e]'>{product.category}</p>
        <h2 className='text-lg font-semibold'>{product.name}</h2>
        <p className='text-sm text-gray-600'>
         {product.description}
        </p>
      </div>

      {/* Bottom */}
      <div className='flex justify-between items-center px-4 py-3'>
        <h2 className='font-semibold'>${product.price}</h2>
         {quantity === 0 ? (
          <button
            onClick={() => addToCart(product.id)}
            className='flex bg-[#1a9f82] px-3 py-2 items-center gap-1 text-white rounded-xl'
          >
            <CiShoppingCart size={20}/>
            Add
          </button>
        ) : (
          <div className='flex items-center gap-3 bg-[#1a9f82] px-3 py-2 text-white rounded-xl'>
            <button onClick={() => decreaseQty(product.id)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => increaseQty(product.id)}>+</button>
          </div>
        )}
      </div>

    </div>
  )
}

export default Product
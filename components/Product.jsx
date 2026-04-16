"use client"
import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { useApp } from '../context/AppContext';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import toast from 'react-hot-toast';

const Product = ({product}) => {
   const { cart, addToCart, increaseQty, decreaseQty, wishlist, toggleWishlist } = useApp();
   const isWishlisted = wishlist.includes(product.id);

  const quantity = cart[product.id] || 0;
  return (
    <div className='flex flex-col w-80 rounded-2xl bg-white shadow-md  '> 
      
      {/* Image */}
      <div className='w-full h-72 overflow-hidden rounded-t-2xl relative'> 
        <img 
          src={product.image} 
          className='w-full h-full object-cover'
        />
        <button
   onClick={() => {
  toggleWishlist(product.id);

  if (isWishlisted) {
    toast("Removed from Wishlist");
  } else {
    toast.success("Added to Wishlist");
  }
}}
    className='absolute top-3 right-3 bg-white p-2 rounded-full shadow'
  >
    {isWishlisted ? (
      <AiFillHeart className='text-red-500' size={20} />
    ) : (
      <AiOutlineHeart size={20} />
    )}
  </button>
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
        <h2 className='font-semibold'> Rs {product.price}</h2>
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
'use client'
import Navbar from '../../components/seller/Navbar'
import Sidebar2 from '../../components/seller/Sidebar2'

import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='flex w-full'>
        <Sidebar2/>
        {children}
      </div>
    </div>
  )
}

export default Layout
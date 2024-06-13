import Discover from '@/Components/Discover'
import Full from '@/Components/Full'
import Hero from '@/Components/Hero'
import Footer from '@/Components/footer/Footer'

import React from 'react'

const page = () => {
  return (
    <div className=''>
      <Hero/>
      <Discover />
      <Full/>
      <Footer/>
    </div>
  )
}

export default page
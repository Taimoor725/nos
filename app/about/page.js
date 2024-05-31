import Navbar from '@/components/Home/Navbar'
import React from 'react'
import Landing from '@/components/about/Landing'
import Intro from '@/components/about/Intro'

function page() {
  return (
    <div className='w-screen h-auto overflow-x-hidden bg-[#0C0C14]'>
      <Navbar/>
      <Landing/>
      <Intro/>
    </div>
  )
}

export default page

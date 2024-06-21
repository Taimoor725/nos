import React from 'react'
import Inserat from '@/components/advertizment/Inserat'
import FrontPage from '@/components/advertizment/FrontPage'

function page() {

  return (
    <div className='flex flex-col w-screen h-auto bg-black overflow-hidden'>
    <FrontPage/>
    <Inserat/>
  </div>
  
  )
}

export default page
    
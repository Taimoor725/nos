import {Navbar} from '@/components/Home/NavbarMenu'
import React from 'react'
import Filter from '@/components/sales/Filter'


function page() {
  

  return (
    <div className='w-screen h-screen overflow-x-hidden bg-[#0C0C14] '>
        <Navbar/>
        <Filter/>

    </div>
  )
}

export default page

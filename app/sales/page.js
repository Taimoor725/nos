import Navbar from '@/components/Home/Navbar'
import React from 'react'
import Filter from '@/components/sales/Filter'
import {NextUIProvider} from "@nextui-org/react";

function page() {
  

  return (
<NextUIProvider>
    <div className='w-screen h-screen overflow-x-hidden bg-[#0C0C14] '>
        <Navbar/>
        <Filter/>

    </div>
</NextUIProvider>
  )
}

export default page

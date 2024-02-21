import Logo from '@/components/Home/Logo'
import { Navbar } from '@/components/Home/NavbarMenu'
import React from 'react'
import {Planets} from '@/components/Agence/planets'

const Page = () => {
  return (
    <div className='bg-black w-screen h-screen'>
      <Logo/>
      <Navbar/>
      <Planets/>
      <div className='pointer-events-none absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 flex flex-col items-center justify-center gap-8'>
        <div className='text-4xl lg:text-8xl font-bold font-next bg-gradient-to-r from-gray-200 to-gray-400 inline-block text-transparent bg-clip-text drop-shadow-md'>
          BE-TAYE
        </div>
        <p className='text-white w-1/2 text-center'>
          this is our agence page. the details about our agency would go over here.
        </p>
      </div>
    </div>
  )
}

export default Page

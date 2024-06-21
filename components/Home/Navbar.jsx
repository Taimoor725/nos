import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (

    <div className='text-white rounded-[16px] font-semibold text-lg items-center left-[50%] p-3 w-[60vw] h-[4rem] flex absolute z-50 custom-NavBar translate-x-[-50%] top-3 justify-around'>
        <div className='hover:scale-110 transition-transform ease-linear'><img src='company_logo.svg ' alt='LOGO' className=' w-8 h-full object-cover '/></div>
        <div className=''><Link href={'/home/'}>HOME</Link></div>
        <div className=''><Link href={'/sales/'}>SALES</Link> </div>
        <div className=''><Link href={'/corrosion/'}>CORROSION</Link></div>
        <div className=''><Link href={'/about/'}>ABOUT</Link></div>
        <div className=''><Link href={'/contact/'}>CONTACT</Link></div>
    </div>

  )
}

export default Navbar

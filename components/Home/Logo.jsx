import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/'><div className={"text-3xl font-bold font-next text-white drop-shadow-md fixed top-12 left-12 z-40  cursor-pointer hover:italic"}>BE-TAYE</div></Link>
  )
}

export default Logo

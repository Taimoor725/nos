"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import "./Navbar.css"

function Navbar() {
  const [active, setActive] = useState(["active", "", "", "", ""])
  return (
    <div className='flex justify-center items-end bg-[#0C0C14] min-h-[20vh]'>
      <div className='navigation text-[blue] w-full  h-[70px] bg-white  flex justify-center items-center rounded-[10px] m-2 relative'>
        <div className='hidden sm:block absolute sm:left-6 md:left-10 lg:left-14 xl:left-20 font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
          Logo
        </div>

        <ul>
          <li className={`${active[0]}`} onClick={() => setActive(['active', "", "", ""])}>
            <a href="#">
              <span className='icon'>
                <ion-icon name="car-sport-outline"></ion-icon>
              </span>
              <span className='text'>Home</span>
            </a>
          </li>

          <li className={`${active[1]}`} onClick={() => setActive(["", "active", "", "", ""])}>
            <a href="#">
              <span className='icon'>
                <ion-icon name="stats-chart-outline"></ion-icon>
              </span>
              <span className='text'>Sales</span>
            </a>
          </li>

          <li className={`${active[2]}`} onClick={() => setActive(["", "", "active", "", ""])}>
            <a href="#">
              <span className='icon'>
                <ion-icon name="construct-outline"></ion-icon>
              </span>
              <span className='text'>Corrosion</span>
            </a>
          </li>


          <li className={`${active[3]}`} onClick={() => setActive(["", "", "", "active", ""])}>
            <a href="#">
              <span className='icon'>
                <ion-icon name="happy-outline"></ion-icon>
              </span>
              <span className='text'>About</span>
            </a>
          </li>


          <li className={`${active[4]}`} onClick={() => setActive(["", "", "", "", "active"])}>
            <a href="#">
              <span className='icon'>
                <ion-icon name="chatbubble-outline"></ion-icon>
              </span>
              <span className='text'>Contact</span>
            </a>
          </li>
          <div className='indicator'></div>
        </ul>

      </div>
    </div>
  )
}

export default Navbar

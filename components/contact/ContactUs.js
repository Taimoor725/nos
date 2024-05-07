"use client"
import React from 'react'

function ContactUs() {
  return (
    <div className='w-1/2 flex flex-col pl-40 text-white gap-20 items-start'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-4xl font-extrabold'>Contact us</h1>
        <p className='text-lg font-light text-gray-400 w-[72%]'>Fill out the form and out team will try to get back to you within 24 hours.</p>
      </div>
      <div className='flex gap-2'>
        {/* <SocialIcons /> */}
        <div className='flex flex-col gap-4 items-start justify-center'>

          <div className='flex justify-center gap-3'>
            <img src="/Contact/envelope.svg" alt="abc" className='w-8 h-8' />
            <div className='flex flex-col gap-2'>
              <h1 className='text-lg font-bold'>General communication</h1>
              <div className='text-sm font-light text-gray-400 w-[80%]'>For general queries, including partnership opportunities, please  <p className='text-[red] underline'>emailexample@email.com</p></div>
            </div>
          </div>

          <div className='flex justify-center gap-3'>
            <img src="/Contact/chat.svg" alt="abc" className='w-8 h-8' />
            <div className='flex flex-col gap-2'>
              <h1 className='text-xl font-bold'>General communication</h1>
              <div className='text-sm font-light text-gray-400 w-[80%]'>We’re here to help! If you have technical issues <p className='text-[red] underline'>contact support</p></div>
            </div>
          </div>

          <div className='flex justify-center gap-3'>
            <img src="/Contact/map-pin.svg" alt="abc" className='w-8 h-8' />
            <div className='flex flex-col gap-2'>
              <h1 className='text-xl font-bold'>Our headquarter</h1>
              <div className='text-sm font-light text-gray-400 w-[80%]'>8502 Preston Rd. Inglewood, Maine 98380 <p className='text-[red] underline'>get directions</p></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactUs






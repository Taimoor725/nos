"use client"
import React from 'react'
import Footer from '../footer';

function ContactForm() {
  return (
    <div className='w-1/2 flex flex-col'>
      <form action="" className='flex flex-col gap-4'>
        <div className='space-y-2'>
          <p className='text-lg text-white'>Full Name</p>
          <div className='w-[80%] p-2 bg-[#282435] border-[0.5px] border-gray-400 rounded-md'><input type="text" className='w-full border-none outline-none bg-[#282435] text-white' /></div>
        </div>

        <div className='space-y-2'>
          <p className='text-lg text-white'>Your Email</p>
          <div className='w-[80%] p-2 bg-[#282435] border-[0.5px] border-gray-400 rounded-md'><input type="text" className='w-full border-none outline-none bg-[#282435] text-white' /></div>
        </div>

        <div className='space-y-2'>
          <p className='text-lg text-white'>Subject</p>
          <div class='w-[80%] p-2 bg-[#282435] border-1 border-gray-400 rounded-md'>
            <select class='w-full border-none outline-none bg-[#282435] text-white p-1'>
              <option value="select 1">select 1</option>
              <option value="select 2">select 2</option>
              <option value="select 3">select 3</option>
            </select>
          </div>
        </div>

        <div className='space-y-2'>
          <p class='text-lg text-white'>Message</p>
          <div class='w-[80%] p-2 bg-[#282435] border-[0.5px] border-gray-400 rounded-md'>
            <textarea class='w-full h-24 border-none outline-none bg-[#282435] text-white ' placeholder='Leave Yor Message'></textarea>
          </div>
        </div>

        <button id="btn" type='submit' className='w-32 h-12'>Submit 
                            <style jsx>{`button {
  padding: 8px 16px; 
  text-transform: uppercase;
  border-radius: 6px; 
  font-size: 14px;
  font-weight: 500;
  color: #ffffff80;
  text-shadow: none;
  background: linear-gradient(45deg, #ff9800, #ff5722); /* Orange gradient */
  cursor: pointer;
  border: none;
  transition: 0.5s ease;
  user-select: none;
}

button:hover,
button:focus {
  color: #ffffff;
  background: #ff5722; /* Orange color */
  text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
  box-shadow: 0 0 5px #ff5722, 0 0 20px #ff5722, 0 0 50px #ff5722,
    0 0 100px #ff5722;
}
`}

                            </style>
                        </button>

      </form>
    </div>
  );
}
export default ContactForm

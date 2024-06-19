"use client"
import React, { useEffect, useRef, useState } from 'react';
import './contact.css';
import CountrySelector from "@/components/accets/DropDown"
import Content from "@/components/contact/Content"

function ContactUs() {
  const [page,setPage]=useState([null,null])
  

  const [screen, setScreen] = useState(0);
  const [translation, setTranslation] = useState(0);

  const USESCROLL = (progressPercentage) => {
    console.log(progressPercentage);
    if (progressPercentage > 65) {
      setScreen(3);
    } else if (progressPercentage > 40) {
      setScreen(2);
    } else if (progressPercentage > 15) {
      setScreen(1);
    } else {
      setScreen(0);
    }
  };

  useEffect(() => {
    setTranslation(40 * screen);
  }, [screen]);



return (

    <div className='flex flex-col w-full h-auto bg-white'>
    <div className='w-full relative'>
      <div className='hidden md:block w-full h-screen'>
        <img src="/Contact/first.avif" alt="loading" className='w-full h-full object-cover' />
      </div>
      <div className='md:hidden w-full h-screen'>
        <img src="/Contact/first_again.avif" alt="loading" className='w-full h-full object-cover' />
      </div>
      <div></div>
      <div className='absolute w-[30%] flex flex-col gap-3 top-[50%] translate-y-[-50%] left-[10%]'>
        <p className='text-2xl font-bold'>Headquarter</p>
        <div className='flex flex-col w-full'>
        <p className='font-extrabold text-5xl'>Ferrari SpA, headquarters and factory</p>
        </div>
        <div className='flex flex-col gap-1'>
        <p className='text-xl font-medium'>ABC USA ABC Street 121212</p>
        <p className='text-xl font-medium'>+1212121212</p>
        </div>
      </div>
    </div>


    <section className='w-screen h-auto flex relative'>
  <div className='md:block  left h-screen w-1/3 sticky top-0 flex'>

  <div className={`absolute w-[4px] h-6 left-[48%] top-[12%] bg-[red] translate-y-[${translation}px] transition-transform duration-[0.5s]`}></div>
      <div className='flex flex-col w-full items-end md:pr-20 md:py-[76px] '>
          <div className='flex flex-col text-black gap-3 font-semibold font-xl'>
          <p>CUSTOMER CARE</p>
          <p>ROAD ASSISTANCE</p>
          <p>ONLINE STORE</p>
          <p>MUSEUMS</p>
          </div>
      </div>
  </div>

  <div className='right h-auto w-2/3'>
      <Content GetValue={USESCROLL}/>
  </div>
</section>

    </div>
  );
}

export default ContactUs;



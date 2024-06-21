"use client";
import React, { useEffect, useState } from 'react';
import './contact.css';
import Content from './Content';

function ContactUs() {
  const [screen, setScreen] = useState(0);
  const [translation, setTranslation] = useState(0);

  const USESCROLL = (progressPercentage) => {
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
    <div className='flex flex-col w-full h-auto bg-black text-white'>
      <div className='w-full relative'>
        <div className='hidden md:block w-full h-screen'>
          <img src="/Contact/first.avif" loading='lazy' alt="loading" className='w-full h-full object-cover' />
        </div>
        <div className='md:hidden w-full h-screen'>
          <img src="/Contact/first_again.avif" loading='lazy' alt="loading" className='w-full h-full object-cover' />
        </div>
        <div></div>
        <div className='absolute w-[30%] flex flex-col gap-3 top-[50%] translate-y-[-50%] left-[10%] text-white'>
          <div className='text-2xl font-bold'>Headquarter</div>
          <div className='flex flex-col w-full'>
            <div className='font-extrabold text-5xl'>Ferrari SpA, headquarters and factory</div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-xl font-medium'>ABC USA ABC Street 121212</div>
            <div className='text-xl font-medium'>+1212121212</div>
          </div>
        </div>
      </div>

      <section className='w-screen h-auto flex relative text-white'>
        <div className='md:block left h-screen w-1/3 sticky top-0 flex'>
          <div
            className='absolute w-[4px] h-6 left-[47%] top-[12%] bg-[red] transition-transform duration-[0.5s] redBar'
            style={{ transform: `translateY(${translation}px)` }}
          ></div>
          <div className='flex flex-col w-full items-end md:pr-20 md:py-[76px] '>
            <div className='flex flex-col gap-3 font-semibold font-xl'>
              <div>CUSTOMER CARE</div>
              <div>ROAD ASSISTANCE</div>
              <div>ONLINE STORE</div>
              <div>MUSEUMS</div>
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

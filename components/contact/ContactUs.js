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
    setTranslation(38 * screen);
  }, [screen]);

  return (
    <div className='flex flex-col w-full h-auto bg-black text-white'>
      <div className='w-full relative'>
        <div className='hidden md:block w-full h-screen'>
          <img src="/Contact/first.avif" loading='lazy' alt="loading" className='w-full h-full object-cover' />
        </div>
        <div className='md:hidden block w-full h-screen'>
          <img src="/Contact/contacts-mob.avif" loading='lazy' alt="loading" className='w-full h-full object-cover' />
        </div>
        {/* <div></div> */}
        <div className='absolute md:w-[30%] w-[50%] flex flex-col gap-3  top-[50%] translate-y-[-50%] left-[10%] text-white'>
          <div className='md:text-2xl text-xl font-bold' data-aos="fade-up" data-aos-delay="50">Headquarter</div>
          <div className='flex flex-col w-full'>
            <div className='font-extrabold text-2xl md:text-5xl w-full' data-aos="fade-up" data-aos-delay="100">Ferrari SpA, headquarters and factory</div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='md:text-xl text-sm font-medium' data-aos="fade-up" data-aos-delay="150">ABC USA ABC Street 121212</div>
            <div className='md:text-xl text-sm font-medium' data-aos="fade-up" data-aos-delay="200">+1212121212</div>
          </div>
        </div>
      </div>

      <section className='w-screen h-auto mt-4 md:mt-0 flex text-white'>
        <div className='md:block left h-screen w-1/3 sticky top-0 flex'>
          
          <div className='xl:flex hidden  w-full justify-end md:pr-20 md:py-[76px] relative gap-1'>
          
          <div className='flex w-1/2 justify-end'>
          <div
            className='w-[4px] h-[5vh] bg-[red] transition-transform duration-[0.5s]'
            style={{ transform: `translateY(${translation}px)` }}
          ></div>
          </div>
            <div className='flex flex-col gap-3 font-semibold font-xl'>
              <div>CUSTOMER CARE</div>
              <div>ROAD ASSISTANCE</div>
              <div>ONLINE STORE</div>
              <div>MUSEUMS</div>
            </div>
          </div>
        </div>

        <div className='right h-auto w-full xl:w-2/3'>
          <Content GetValue={USESCROLL}/>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;

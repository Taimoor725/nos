"use client"
import { useScroll ,motion} from 'framer-motion';
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react';
import CountrySelector from '../accets/DropDown';
import './contact.css';

function Content({GetValue}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
    
  },
)

const [progress, setProgress] = useState(0);

useEffect(() => {
  const unsubscribe = scrollYProgress.onChange((latestValue) => {
    const progressPercentage = latestValue * 100;
    setProgress(progressPercentage);
    GetValue(progressPercentage);
  });

  return () => unsubscribe();
}, [scrollYProgress, GetValue]);



  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCountry_2, setSelectedCountry_2] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [tollFree, setTollFree] = useState('');
  const [intCall, setIntCall] = useState('');
  const [yes, setYes] = useState(false);
  const [yes_2, setYes_2] = useState(false);
  



  const handleCountrySelect = (country, phoneNumber, email, tollFree, intlCall) => {
    setSelectedCountry(country);
    setPhone(phoneNumber);
    setEmail(email);
    selectedCountry === '' ? setYes(false) : setYes(true)
  };




  const handleCountrySelect_2 = (country, phoneNumber, email, tollFree, intlCall) => {
    setSelectedCountry_2(country);
    selectedCountry_2 === '' ? setYes_2(false) : setYes_2(true)
    setTollFree(tollFree);
    setIntCall(intlCall);
  };

  return (
    <motion.div ref={ref}>
      <div className='flex flex-col h-auto gap-3 text-white pt-5 pr-5'>
        <div className='w-full md:h-[65vh] custom-gradient p-3'>
          <CountrySelector onCountrySelect={handleCountrySelect} dis={'CUSTOMER CARE'} />
          {yes && (
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col'>
                <div className='flex mt-3'>
                  <div className='flex flex-col w-1/2 gap-1'><div className='text-lg font-normal'>PHONE NUMBER</div><div className='text-3xl font-bold'>{phone}</div></div>
                  <div className='flex flex-col w-1/2 gap-1'><div className='text-lg font-normal'>EMAIL</div><div className='text-xl font-medium'>{email}</div></div>
                </div>
                <div className='text-[12px] font-light mt-3 w-[90%]'>Our Customer Service is available as follows: From Monday to Friday, from 8:30 to 19:00 (CET). Saturday from 09:00 to 13:00 (CET). Contact our customer care service reserved for Ferrari clients and official dealers to receive information on services available.</div>
              </div>
              <div className='flex items-center'>GET IN TOUCH <MainButton/></div>
            </div>
          )}
        </div>


        <div className='w-full md:h-[65vh] bg-black custom-gradient text-white p-3'>
          <CountrySelector onCountrySelect={handleCountrySelect_2} dis={'ROAD ASSISTAANCE'} />
          {yes_2 && (
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col'>
                <div className='flex mt-3'>
                  <div className='flex flex-col w-1/2 gap-1'><div className='text-lg font-normal'>TOLL FREE NUMBER</div><div className='text-3xl font-bold'>{tollFree}</div></div>
                  <div className='flex flex-col w-1/2 gap-1'><div className='text-lg font-normal'>INTERNATIONAL CALL</div><div className='text-xl font-medium'>{intCall}</div></div>
                </div>
                <div className='text-[12px] font-light mt-3 w-[90%]'>Contact the roadside assistance service for Ferrari Customers and access an exclusive set of services available for your car. INTERNATIONAL FREE PHONE NUMBER 00 800 0000 1947</div>
              </div>
            </div>
          )}
        </div>
        <div className='w-full h-[80vh] md:h-[85vh] bg-black text-white custom-gradient p-3'>
            <div className='flex flex-col gap-5 custom-gradient p-2'>
                <div className='text-[red] text-lg font-light'>ONLINE STORE</div>
                <div className='overflow-hidden w-[45%] h-[30%]'><img src="/Contact/contact.jpeg" alt="loading" className='w-full h-full object-cover hover:scale-125 ease-in-out duration-[5s] transition-transform' /></div>
                <div className='flex flex-col gap-2'>
                    <div className='w-[45%] text-sm'>For information as far as orders and products at the Ferrari Store online are concerned <div className='underline'>customercare@ferraristore.com</div></div>
                    <button className='flex items-center'>VISIT WEBSITE <MainButton/> </button>
                </div>
                {/* <div className='w-[95%] h-[0.3px] bg-white'></div> */}
            </div>
        </div>
        <div className='w-full h-[110vh] overflow-hidden custom-gradient p-3'>
              <div className='text-[red] text-lg font-light mb-5'>MUSEUMS</div>
              <div className='flex md:w-full gap-8 md:max-w-[95%]'>
                    <MusiamCard name={'Museo Ferrari Maranello'} conact={'+910101001'} mail={'contact@gmail.com'} adress={'new street old house no 125'} src={'/Contact/musiam (2).jpeg'}/>
                    <MusiamCard name={'Museo Enzo Ferrari'} conact={'+910101001'} mail={'contact@gmail.com'} adress={'new street old house no 125'} src={'/Contact/musiam (1).jpeg'}/>
              </div>
              {/* <div className='w-[95%] h-[0.3px] bg-white md:mt-8'></div> */}
        </div>
      </div>
    </motion.div>
  )
}

export default Content




const MusiamCard=({src,name,conact,mail,adress})=>{
  return(
    <div className='flex flex-col w-[80%] h-[90%] gap-4 overflow-hidden custom-gradient'>
        <div className='overflow-hidden'><img src={src} alt="musiam" className='w-full h-[25%] object-cover hover:scale-125 ease-in-out duration-[5s] transition-transform'/></div>
        <div className='p-3'>
        <div className='font-semibold text-xl'>{name}</div>
        <div className='flex flex-col w-full'>
          <div className='flex'>Tel <div className='flex-grow justify-end flex'>{conact}</div></div>
            <div className='flex'>Mail <div className='flex-grow justify-end flex '>{mail}</div></div>
            <div className='flex'>Adress <div className='flex-grow justify-end flex '>{adress}</div></div>
        </div>
        <div>OPENING HOURS</div>

        <div className='flex flex-col w-full gap-1'>
            <div className='flex'>April/May <div className='flex-grow justify-end flex '>09.30 - 19.00</div></div>
            <div className='flex'>June/August <div className='flex-grow justify-end flex '>09.00 - 19.00</div></div>
            <div className='flex'>September/October<div className='flex-grow justify-end flex '>09.00 - 19.00</div></div>
            <div className='flex'>November/March<div className='flex-grow justify-end flex '>09.30 - 18.00</div></div>
        <button className='flex justify-start items-center w-[40%]'>
          VISIT WEBSITE <MainButton />
        </button>
        </div>
        </div>
    </div>
  )
}



const MainButton = () => {
  return (
    <button className="button">
      <div className="button-box">
        <span className="button-elem">
          <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
            ></path>
          </svg>
        </span>
        <span className="button-elem">
          <svg viewBox="0 0 46 40">
            <path
              d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
            ></path>
          </svg>
        </span>
      </div>
    </button>
  );
};
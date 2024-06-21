// This the main file for the adv page

"use client";
import { faTriangleExclamation, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import JobType from './JobType';
import ContractType from './ContractType';
import JobLocation from './JobLocation';
import LanguageRequired from './LanguageRequired';
import SalaryDiscription from './SalaryDiscription';
import JobDiscription from './JobDiscription';
import JobAdvantages from './JobAdvantages';
import Footer from './Footer';
import { useRouter } from "next/navigation";

function Inserat() {
  const router=useRouter();
  const imgRef = useRef();
  const logoRef = useRef();
  const [image, setImage] = useState();
  const [logo, setLogo] = useState();

  const imageHandler = () => {
    imgRef.current.click();
  };

  const selectImage = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  
  const logoHandler = () => {
    logoRef.current.click();
  };

  const selectLogo = (event) => {
    const file = event.target.files[0];
    setLogo(file);
  };

  return (
    <div className='flex flex-col items-center overflow-auto gap-5'>
      <div className='w-4/6 h-auto flex flex-col custom-gradient items-center gap-4 border-[1px] rounded-md shadow-xl'>
        <div className='flex w-[95%] bg-[#FFFCE6] items-start p-4 rounded-lg gap-3 text-[#977402] mt-5'>
          <FontAwesomeIcon icon={faTriangleExclamation} className='w-8' />
          <div className=' font-light text-sm'>Nachdem Sie thre Bestellung aufgegeben haben, wird ihre Stellenanzeige automatisch veröffentlicht, sobald unser Support-Team Ihr Konto erfolgreich verifiziert hat.</div>
        </div>
        <div className='flex w-[95%] h-80 bg-[#E6E6EA] justify-end items-end rounded-lg p-[5px] relative'>
          {image ? <img src={URL.createObjectURL(image)} className='flex justify-center items-center w-full h-full object-cover z-0 rounded-sm' /> : <></>}
          <button className=' absolute m-2 flex w-48 h-8 bg-white gap-3 rounded-md p-1 justify-center items-center z-50 hover:bg-slate-300' onClick={imageHandler}>
            <input type='file' ref={imgRef} style={{ display: "none" }} onChange={selectImage} />
            <div className='w-4'><FontAwesomeIcon icon={faUpload} /></div>
            <div className='text-sm'>Neues Bild hochladen</div>
          </button>
        <div className='absolute w-40 h-48 bg-[#F9F9FA] rounded-md flex justify-end items-end left-5 top-56'>
          {logo ? <img src={URL.createObjectURL(logo)} className='flex justify-center items-center w-full h-full object-cover z-0 rounded-sm p-2' /> :<p className='w-full h-full text-sm font-sans font-bold top-[50%] absolute'>Neues Logo hochladen</p>}
          <button className='w-12 h-12 rounded-full border-[2px] bg-white cursor-pointer border-black absolute flex justify-center items-center left-32 top-[82%]' onClick={logoHandler}><FontAwesomeIcon icon={faUpload} />
            <input type='file' ref={logoRef} style={{ display: "none" }} onChange={selectLogo} />
          </button>
        </div>
        </div>
    {/* it is the last div of white contaner    <div>lorem2000</div> */}
        <div className='mt-24'></div>
        <JobType/>
        <JobLocation/>
        <ContractType/>
    </div>
    </div>

  );
}

export default Inserat;

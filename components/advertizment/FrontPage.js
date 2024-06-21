import React from 'react';
import MainButton from '../accets/MainButton';


function FrontPage() {
  return (
    <div className="relative w-screen h-screen">
      <div className="w-full h-full mb-4">
        <video
          src="/videos/seconf_intro.mp4"
          className="w-full h-full object-cover z-0 overflow-hidden"
          autoPlay
          muted
          loop
        />
      </div>
      <div className="w-full h-full bg-opacity-50 bg-black font-bold flex flex-col text-white absolute top-0 left-0 justify-center items-center text-center">
        <div className="text-2xl mb-2">Sports Cars</div>
        <div className="text-6xl mb-4">ALLUMEZ LE MOTEUR</div>
        <div className="flex text-lg items-center space-x-2">
          <span>DECOUVREZ LA GAMME FERRARI</span>
          <MainButton/>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;

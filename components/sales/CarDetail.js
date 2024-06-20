'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { faDownload, faLocation, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';



function CarDetail({ data, onClick }) {
  const [mainImg, setMainImg] = useState(data.imageUrl[0]);

  const handleImgClick = (value) => {
    setMainImg(value);
  };

  return (

    <div className='flex flex-col w-[85vw] h-auto gap-2 text-white'>
      <button
        className='w-[15%] py-2 font-bold text-blue-500 flex items-center mt-2 hover:scale-105'
        onClick={onClick}
      >
        <ion-icon name="chevron-back-outline"></ion-icon>Zurück zur Übersicht
      </button>
      <div className='flex w-full h-auto gap-2'>
        <div className='w-1/2 h-full flex flex-col gap-3'>
          {/* first half */}
          <div className='font-medium text-4xl text-white'>{data.name}</div>
          <img
            src={mainImg}
            alt="Car"
            className='object-cover w-full h-full'
          />
          <div className='grid grid-cols-4 gap-2 w-full'>
            {data.imageUrl.slice(1).map((value, index) => (
              <img
                key={index}
                src={value}
                alt='Car detail'
                className='object-cover cursor-pointer'
                onClick={() => handleImgClick(value)}
              />
            ))}
          </div>
          <div className='flex h-auto w-[100%] '>
            {/* 1st half Down part */}
            <FinalDetails data={data} />
          </div>
        </div>

        <div className='w-1/2 h-full flex flex-col px-16 relative '>
          {/* 2nd half */}
          <CarInfo data={data} />
          <div className='flex flex-col w-full h-[31.5%] absolute px-16 bottom-0 left-0 py-3 gap-4 rounded-md custom-gradient'>
            <p className='font-light text-4xl'>Energiedaten</p>
            <div className='flex flex-col gap-1'>
            <div className='flex text-xl'>
              CO₂ Emission (kombiniert)
              <div className='flex-grow flex justify-end font-bold text-white'>{data.CombineCO2}</div>
            </div>
            <div className='flex text-xl'>
              Euro-Norm
              <div className='flex-grow flex justify-end font-bold text-white'>{data.EuroNorm}</div>
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetail;




const FinalDetails = ({ data }) => {
  return (
    <div className='h-[55vh] w-full flex p-3 flex-col text-[#ddd8d8] gap-4 mt-2  custom-gradient
    
    
    
    
    
    
     rounded-md'>
      <div className='text-4xl font-light'> FAHRZEUGDATEN </div>
      <div className='flex flex-col gap-1'>
        <div className='flex text-xl'>
          Aufbau
          <div className='flex-grow flex justify-end font-bold text-white'>{data.type}</div>
        </div>
        <div className='flex text-xl'>
          Farbe
          <div className='flex-grow flex justify-end font-bold text-white'>{data.color}</div>
        </div>
        <div className='flex text-xl'>
          Anzahl
          <div className='flex-grow flex justify-end font-bold text-white'>{data.noOfSeats}</div>
        </div>
        <div className='flex text-xl'>
          Inverkehrsetzung
          <div className='flex-grow flex justify-end font-bold text-white'>{data.market}</div>
        </div>
        <div className='flex text-xl'>
          Getriebe
          <div className='flex-grow flex justify-end font-bold text-white'>{data.transmition}</div>
        </div>
        <div className='flex text-xl'>
          Kilometerstand
          <div className='flex-grow flex justify-end font-bold text-white'>{data.kilometer}</div>
        </div>
        <div className='flex text-xl'>
          Kraftstofftyp
          <div className='flex-grow flex justify-end font-bold text-white'>{data.fuelType}</div>
        </div>
        <div className='flex text-xl'>
          Motorleistung in PS
          <div className='flex-grow flex justify-end font-bold text-white'>{data.power}</div>
        </div>
        <div className='flex text-xl'>
          Garantie
          <div className='flex-grow flex justify-end font-bold text-white'>{data.guarantee}</div>
        </div>
      </div>
    </div>
  )
}



const CarInfo = ({ data }) => {
  return (

    <div className='flex flex-col w-full h-full gap-3 text-white'>
      <div className='flex items-center font-bold text-3xl'>{data.price}</div>
      <div className='flex p-2 flex-col text-[#ddd8d8]'>
        <div className='flex'>
          Inverkehrsetzung
          <div className='flex-grow flex justify-end font-bold text-white'>{data.market}</div>
        </div>
        <div className='flex'>
          Getriebe
          <div className='flex-grow flex justify-end font-bold text-white'>{data.transmition}</div>
        </div>
        <div className='flex'>
          Kilometerstand
          <div className='flex-grow flex justify-end font-bold text-white'>{data.kilometer}</div>
        </div>
        <div className='flex'>
          Kraftstofftyp
          <div className='flex-grow flex justify-end font-bold text-white'>{data.fuelType}</div>
        </div>
        <div className='flex'>
          Motorleistung in PS
          <div className='flex-grow flex justify-end font-bold text-white'>{data.power}</div>
        </div>
        <div className='flex'>
          <div className='flex flex-col'>
            CO₂ Emissions
            <p>(Treibstoff- und Stromproduktion)</p>
          </div>
          <div className='text-white font-bold flex-grow flex justify-end'>{data.CO2}</div>
        </div>
        <div className='flex'>
          CO₂ Emission (kombiniert)
          <div className='flex-grow flex justify-end font-bold text-white'>{data.CombineCO2}</div>
        </div>
      </div>
      <Button color='primary' size='md' className='text-[22px]'>
        Anfrege sender
      </Button>
      <div className='w-full h-[0.3px] bg-slate-400 mt-10'></div>
      <Button className='mt-4' color='danger'><div className='flex w-full h-full justify-center items-center gap-2 text-white'><FontAwesomeIcon icon={faDownload} className='w-5 h-5' /><div className='text-xl'>Download PDF</div></div></Button>
      <div className='w-full h-[0.3px] bg-slate-400 mt-10'></div>
      <div className='flex flex-col w-full gap-2'>
        <div className='flex flex-col gap-3 font-light'><p className='text-xl font-bold'>Lhr Handler</p><p className='text-xl'>{data.deler}</p></div>
        <div className='flex items-center text-xl font-light gap-3'><FontAwesomeIcon icon={faLocation} className='w-7 h-7' />{data.adress}</div>
        <div className='flex items-center text-xl font-light gap-3'><FontAwesomeIcon icon={faPhone} className='w-7 h-7' />{data.phone}</div>
      </div>
    </div>
  )
}
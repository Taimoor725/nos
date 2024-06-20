import React from 'react';

function CarCardHorizontal({ data,onClick}) {
  return (
      <div className='w-full h-[43vh] border-[0.3px] border-[gray] shadow-[gray] shadow-md flex' onClick={onClick}>
      <img src={data.imageUrl[0]} alt="car" className='h-full object-cover' />
      <div className='flex flex-col flex-grow p-4 gap-2'>
        <div className='flex'>
          <span className='font-medium text-xl'>{data.name}</span>
          <div className='flex-grow'></div>
          <span className='font-bold text-lg'>{data.price}</span>
        </div>

        <div className='w-full flex justify-center my-2'>
            <div className='w-full h-[2px] bg-[#cfc9c9]'></div>
        </div>

        <div className='flex justify-between '>
          <div className='flex flex-col w-[35%] text-[#c9c7c7] gap-1'>
            <div className='flex'>Inverkehrsetzung <p className='flex flex-grow justify-end font-bold text-xl text-white'>{data.market}</p></div>
            <div className='flex'>Kilometer <p className='flex flex-grow  justify-end font-bold text-xl text-white'>{data.kilometer}</p></div>
            <div className='flex'>Motorleistung in PS <p className='flex flex-grow  justify-end font-bold text-xl text-white'>{data.power}</p></div>
            <div className='flex'>CO₂ Emission (kombiniert) <p className='flex flex-grow  justify-end font-bold text-xl text-white'>{data.CO2}</p></div>
          </div>
          <div className='flex flex-col w-[35] text-[#c9c7c7] gap-1'>
            <div className='flex'>Getriebe <p className='flex flex-grow  justify-end font-bold text-xl text-white'>{data.transmition}</p></div>
            <div className='flex'>Kraftstofftyp <p className='flex flex-grow  justify-end font-bold text-xl text-white'>{data.fuelType}</p></div>
            <div className='flex text-sm gap-5 items-center'>CO₂ Emissions (Treibstoff- und Stromproduktion)
              <p className='flex flex-grow  justify-end font-bold text-xl text-white'>{data.CombineCO2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCardHorizontal;

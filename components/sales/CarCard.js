import React from 'react';

function CarCard({ data, onClick }) {
  return (
    <div 
      className='gap-2 w-full :h-[82vh] flex flex-col overflow-hidden cursor-pointer custom-gradient'
      onClick={onClick}
    >
      <div className='overflow-hidden md:h-[30%] w-full'>
        <img 
          src={data.imageUrl[0]} 
          alt={data.name} 
          className="object-cover w-full h-full hover:scale-110 transition-transform ease-in-out duration-[1s]" 
        />
      </div>

      <div className='p-3'>
        <p>{data.name}</p>
        <p className='font-bold text-xl'>{data.price}</p>
      </div>
      <div className='w-full flex justify-center items-center'>
        <div className='w-[95%] h-1 bg-white'></div>
      </div>
      <div className='flex p-2 flex-col text-[#c9c7c7]'>
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
      </div>
  );
}

export default CarCard;

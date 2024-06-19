import React from 'react';

function CarCard({ data, onClick }) {
  return (
    <div 
      className='gap-3 w-full h-[93vh] shadow-md border-[1px] border-[gray] shadow-black flex flex-col overflow-hidden cursor-pointer'
      onClick={onClick}
    >
      <div className='overflow-hidden'>
        <img 
          src={data.imageUrl[0]} 
          alt={data.name} 
          className="object-cover hover:scale-110 transition-transform ease-in-out duration-[1s]" 
        />
      </div>
      <div className='p-2'>
        <p>{data.name}</p>
        <p className='font-bold text-xl'>{data.price}</p>
      </div>
      <div className='w-full flex justify-center items-center'>
        <div className='w-[95%] h-1 bg-black'></div>
      </div>
      <div className='flex p-2 flex-col text-[#4f4b4b]'>
        <div className='flex'>
          Inverkehrsetzung 
          <div className='flex-grow flex justify-end font-bold text-black'>{data.market}</div>
        </div>
        <div className='flex'>
          Getriebe 
          <div className='flex-grow flex justify-end font-bold text-black'>{data.transmition}</div>
        </div>
        <div className='flex'>
          Kilometerstand 
          <div className='flex-grow flex justify-end font-bold text-black'>{data.kilometer}</div>
        </div>
        <div className='flex'>
          Kraftstofftyp 
          <div className='flex-grow flex justify-end font-bold text-black'>{data.fuelType}</div>
        </div>
        <div className='flex'>
          Motorleistung in PS 
          <div className='flex-grow flex justify-end font-bold text-black'>{data.power}</div>
        </div>
        <div className='flex'>
          <div className='flex flex-col'>
            CO₂ Emissions 
            <p>(Treibstoff- und Stromproduktion)</p>
          </div> 
          <div className='text-black font-bold flex-grow flex justify-end'>{data.CO2}</div>
        </div>
        <div className='flex'> 
          CO₂ Emission (kombiniert)
          <div className='flex-grow flex justify-end font-bold text-black'>{data.CombineCO2}</div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;

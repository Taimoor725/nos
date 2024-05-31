import React from 'react';

const CarCard = ({carName , price , dis,src}) => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-orange-800 to-orange-600">
            <img src={src} alt="SUV" className='object-cover' />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {carName}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {dis}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button type="button" className="select-none rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          {price}
        </button>
      </div>
    </div>
  );
};

function SUV({carName ,price,dis,src}) {
  return (
    <div>
      <CarCard carName={carName} price={price} dis={dis} src={src}/>
    </div>
  );
}

export default SUV;

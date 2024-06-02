import React from 'react'
import SUV from '@/components/sales/SUV'

function AllCars({carData}) {
  return (
    <div className='md:grid md:grid-cols-4 flex flex-col items-center px-4 gap-5' >
      {carData.map((car, index) => (
        <SUV
          key={index}
          carName={car.carName}
          src={car.src}
          price={car.price}
          dis={car.dis}
          model={car.model}
          tunning={car.lastRepair}
        />
      ))}
    </div>
  );
}

export default AllCars;



 

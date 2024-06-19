import React, { useState } from 'react';

function CarDetail({ data }) {

    const [mainImg,setImg]=useState(data.imageUrl[0])

    const ImgHandler=(value)=>{
        setImg(value);
    }
  return (
    <div className='flex flex-col w-[85vw] h-auto bg-green-500'>
      <div className='flex w-full h-screen bg-red-500'>
        <div className='w-1/2 h-full flex flex-col bg-pink-500 '>
          <div>{data.name}</div>
          <img 
            src={mainImg}
            alt="Car" 
            className='object-cover w-[88%] h-[55%]' 
          />
          <div className='grid grid-cols-4 gap-2 w-[88%]'>
            {data.imageUrl.slice(1, data.imageUrl.length).map((value, index) => (
              <img 
                key={index} 
                src={value} 
                alt='Car detail' 
                className='object-cover' 
                onClick={()=>ImgHandler(value)}
              />
            ))}
          </div>
        </div>
        <div className='w-1/2 h-full'></div>
      </div>
    </div>
  );
}

export default CarDetail;

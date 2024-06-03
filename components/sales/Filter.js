"use client"
import React, { useState } from 'react';
import { CarCard, Selection } from "@/components/accets/Selection"
import ImageSlider from '@/components/accets/ImageSlider';
import { useRouter } from 'next/navigation';
import AllCars from '@/components/sales/AllCars';
import { Pagination } from "@nextui-org/react";
import Footer from '../footer';


const Filter = () => {
  const [cardActive, setCardActive] = useState(true);
  const [car, setCar] = useState([false, false, false, false, false, false, false, false])



  const [postPerPage, setPostPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  let lastPostIndex = currentPage * postPerPage;
  let firstPostIndex = lastPostIndex - postPerPage;
  return (
    <div>
      <div className='relative md:p-5 md:block gap-3 flex flex-col md:min-h-[10rem] '>
        <ImageSlider />
        <div className='md:absolute md:w-[85%] w-[95%] m-[10px] bottom-10 left-[50%] md:translate-x-[-50%] md:z-10 bg-white md:border-t-8  md:border-white  md:border-t-[#0C0C14] rounded-[20px]'>
          <div className='relative p-3 w-full h-auto items-center md:justify-end flex flex-col md:flex-row border-[0.5px]  gap-3 md:gap-4'>
            <div className='w-full md:w-1/4'><Selection name={"Companies"} data={Companies} /></div>
            <div className='w-full md:w-1/4'><Selection name={"Model"} data={Models} /></div>
            <div className='w-full md:w-1/4'><Selection name={"Fuel"} data={Types} /></div>
            <div className='w-full md:w-1/4'><Selection name={"Drive Type"} data={driveTypes} /></div>
            <div className='w-full md:w-1/4'><Selection name={"Gear Type"} data={gearTypes} /></div>
            <div className='w-full md:w-1/4'><Selection name={"Construction"} data={construction} /></div>
          </div>
        </div>
      </div>
      <div className='text-white text-2xl font-extrabold p-5 flex w-full'>
        Popular Cars Types
        {(car[0] || car[1] || car[2] || car[3] || car[4] || car[5] || car[6] || car[7]) && (
          <div className='flex flex-grow justify-end'>
            <button
              className='flex justify-center items-center carBTN md:w-[8rem] w-[5rem] text-xs max-h-[2rem] md:p-3 bg-gradient-to-tr from-orange-600 to-orange-400 md:text-sm rounded-lg '
              onClick={() => {
                setCardActive(true);
                setCar([false, false, false, false, false, false, false, false]);
              }}
            > 
              GO BACK
            </button>
          </div>
        )}
      </div>
      {cardActive && (
        <div className='grid grid-cols-2 px-1 md:grid-cols-4 md:gap-4 md:px-12'>
          <CarCard src={"/sales/suv.svg"} name={"SUV"} onClick={() => { setCardActive(false); setCar([true, false, false, false, false, false, false, false]) }} />
          <CarCard src={"/sales/wagon.svg"} name={"WAGON"} onClick={() => { setCardActive(false); setCar([false,true, false, false, false, false, false, false]) } }/>
          <CarCard src={"/sales/sedan.svg"} name={"SADAN"} onClick={() => { setCardActive(false); setCar([false, false,true,false, false, false, false, false]) }} />
          <CarCard src={"/sales/compact.svg"} name={"COMPACT"} onClick={() => { setCardActive(false); setCar([false, false, false, true, false, false, false, false]) }} />
          <CarCard src={"/sales/convertible.svg"} name={"CONVERTIBLE"} onClick={() => { setCardActive(false); setCar([false, false, false, false, true, false, false, false]) }} />
          <CarCard src={"/sales/coupe.svg"} name={"COUPE"} onClick={() => { setCardActive(false); setCar([false, false, false, false, false, true, false, false]) }} />
          <CarCard src={"/sales/crossover.svg"} name={"CROSSOVER"} onClick={() => { setCardActive(false); setCar([false, false, false, false, false, false, true, false]) }} />
          <CarCard src={"/sales/pickup.svg"} name={"PICKUP"} onClick={() => { setCardActive(false); setCar([false, false, false, false, false, false, false, true]) }} />
        </div>
      )}


      {car[0] && (<>
        <AllCars carData={SUVdata.slice(firstPostIndex, lastPostIndex)}/>
        <div className='w-full flex justify-center items-center pt-2 md:h-[3.5rem] '>
          <div className="flex flex-wrap gap-4 items-center">
            <Pagination total={10} initialPage={1} color={"warning"} onChange={(page) => setCurrentPage(page)} />
          </div>
        </div>
      </>
      )}

      {car[1] && (<>
        <AllCars carData={WAGANdata.slice(firstPostIndex, lastPostIndex)} />
        <div className='w-full flex justify-center items-center pt-2 md:h-[3.5rem] '>
          <div className="flex flex-wrap gap-4 items-center">
            <Pagination total={10} initialPage={1} color={"warning"} onChange={(page) => setCurrentPage(page)} />
          </div>
        </div>
      </>
      )}

      {car[2] && (<>
        <AllCars carData={SUVdata.slice(firstPostIndex, lastPostIndex)} />
        <div className='w-full flex justify-center items-center pt-2 md:h-[3.5rem] '>
          <div className="flex flex-wrap gap-4 items-center">
            <Pagination total={10} initialPage={1} color={"warning"} onChange={(page) => setCurrentPage(page)} />
          </div>
        </div>
      </>
      )}

      {car[3] && (<>
        <AllCars carData={SUVdata.slice(firstPostIndex, lastPostIndex)} />
        <div className='w-full flex justify-center items-center pt-2 md:h-[3.5rem] '>
          <div className="flex flex-wrap gap-4 items-center">
            <Pagination total={10} initialPage={1} color={"warning"} onChange={(page) => setCurrentPage(page)} />
          </div>
        </div>
      </>
      )}

      {car[4] && (<>
        <AllCars carData={SUVdata.slice(firstPostIndex, lastPostIndex)} />
        <div className='w-full flex justify-center items-center pt-2 md:h-[3.5rem] '>
          <div className="flex flex-wrap gap-4 items-center">
            <Pagination total={10} initialPage={1} color={"warning"} onChange={(page) => setCurrentPage(page)} />
          </div>
        </div>
      </>
      )}

      {car[5] && (<>
        <AllCars carData={SUVdata.slice(firstPostIndex, lastPostIndex)} />
        <div className='w-full flex justify-center items-center pt-2 md:h-[3.5rem] '>
          <div className="flex flex-wrap gap-4 items-center">
            <Pagination total={10} initialPage={1} color={"warning"} onChange={(page) => setCurrentPage(page)} />
          </div>
        </div>
      </>
      )}

      {car[6] && (<>
        <AllCars carData={SUVdata.slice(firstPostIndex, lastPostIndex)} />
        <div className='w-full flex justify-center items-center pt-2 md:h-[3.5rem] '>
          <div className="flex flex-wrap gap-4 items-center">
            <Pagination total={10} initialPage={1} color={"warning"} onChange={(page) => setCurrentPage(page)} />
          </div>
        </div>
      </>
      )}

      {car[7] && (<>
        <AllCars carData={SUVdata.slice(firstPostIndex, lastPostIndex)} />
        <div className='w-full flex justify-center items-center pt-2 md:h-[3.5rem] '>
          <div className="flex flex-wrap gap-4 items-center">
            <Pagination total={10} initialPage={1} color={"warning"} onChange={(page) => setCurrentPage(page)} />
          </div>
        </div>
      </>
      )}

      <Footer />
    </div>

  );
}

export default Filter;






const WAGANdata = [
  { carName: 'WAGAN 8', src: '/sales/WAGAN/5d4eb686-487f-4322-88ca-d015d5bb0df8.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.',model:'2017',lastRepair:'2 Month ago'},
  { carName: 'WAGAN 7', src: '/sales/WAGAN/96548bd5-fb31-4570-b31a-517e2ebe5408.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.',model:'2002',lastRepair:'2 Month ago' },
  { carName: 'WAGAN 6', src: '/sales/WAGAN/wagan_1.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.',model:'2014',lastRepair:'2 Month ago'},
  { carName: 'WAGAN 5', src: '/sales/WAGAN/wagan_2.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.',model:'2011' ,lastRepair:'2 Month ago'},
  { carName: 'WAGAN 4', src: '/sales/img_4.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.',model:'2011' ,lastRepair:'2 Month ago'},
  { carName: 'WAGAN 3', src: '/sales/img_3.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.',model:'2010' ,lastRepair:'2 Month ago'},
  { carName: 'WAGAN 2', src: '/sales/img_2.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.',model:'2005' ,lastRepair:'2 Month ago'},
  { carName: 'WAGAN 1', src: '/sales/img_1.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.',model:'2015' ,lastRepair:'2 Month ago'},
  { carName: 'WAGAN 8', src: '/sales/img_1.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.',model:'1990' ,lastRepair:'2 Month ago'},
  { carName: 'WAGAN 7', src: '/sales/img_3.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.',model:'2000' ,lastRepair:'2 Month ago'},
  { carName: 'WAGAN 6', src: '/sales/img_2.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.',model:'2010', lastRepair:'2 Month ago'},
  { carName: 'WAGAN 5', src: '/sales/img_1.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.',model:'2022' ,lastRepair:'2 Month ago'},
  { carName: 'WAGAN 4', src: '/sales/img_4.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.',model:'2024' ,lastRepair:'2 Month ago'},
  { carName: 'WAGAN 3', src: '/sales/img_3.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.',model:'2020' ,lastRepair:'2 Month ago'},
];

const SUVdata = [
  { carName: 'SUV 8', src: '/sales/img_1.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.' ,model:'1990',lastRepair:'2 Month ago'},
  { carName: 'SUV 7', src: '/sales/img_3.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.' ,model:'2002',lastRepair:'2 Month ago'},
  { carName: 'SUV 6', src: '/sales/img_2.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.' ,model:'2021',lastRepair:'2 Month ago'},
  { carName: 'SUV 5', src: '/sales/img_1.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.' ,model:'2020',lastRepair:'2 Month ago'},
  { carName: 'SUV 4', src: '/sales/img_4.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.' ,model:'2020',lastRepair:'2 Month ago'},
  { carName: 'SUV 3', src: '/sales/img_3.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.' ,model:'2022',lastRepair:'2 Month ago'},
  { carName: 'SUV 2', src: '/sales/img_2.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.' ,model:'2010',lastRepair:'2 Month ago'},
  { carName: 'SUV 1', src: '/sales/img_1.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.' ,model:'2023',lastRepair:'2 Month ago'},
  { carName: 'SUV 8', src: '/sales/img_1.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.' ,model:'2024',lastRepair:'2 Month ago'},
  { carName: 'SUV 7', src: '/sales/img_3.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.' ,model:'2020',lastRepair:'2 Month ago'},
  { carName: 'SUV 6', src: '/sales/img_2.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.' ,model:'2017',lastRepair:'2 Month ago'},
  { carName: 'SUV 5', src: '/sales/img_1.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.' ,model:'2014',lastRepair:'2 Month ago'},
  { carName: 'SUV 4', src: '/sales/img_4.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.' ,model:'2010',lastRepair:'2 Month ago'},
  { carName: 'SUV 3', src: '/sales/img_3.png', price: '1000$', dis: 'Lorem  voluptates sequi debitis ad, nobis commodi voluptatem  beatae quae impedit porro tempore.' ,model:'2000',lastRepair:'2 Month ago'},
];


const Companies = [
  { label: "Toyota", value: "toyota", description: "Japanese automotive manufacturer" },
  { label: "Honda", value: "honda", description: "Japanese multinational conglomerate known for manufacturing automobiles, motorcycles, and power equipment" },
  { label: "Ford", value: "ford", description: "American multinational automaker" },
  { label: "BMW", value: "bmw", description: "German multinational company which produces luxury vehicles and motorcycles" },
  { label: "Tesla", value: "tesla", description: "American electric vehicle and clean energy company" }
];


const Models = [
  { label: "All", value: "All", description: "All Models" },
]


const Types = [
  { label: "Gasoline/Petrol Cars", value: "gasoline_petrol", description: "These cars are powered by internal combustion engines that run on gasoline or petrol." },
  { label: "Diesel Cars", value: "diesel", description: "Diesel cars are powered by diesel fuel, a type of liquid fuel derived from crude oil." },
  { label: "Hybrid Cars", value: "hybrid", description: "Hybrid cars use a combination of a gasoline/petrol engine and an electric motor, offering improved fuel efficiency and reduced emissions." },
  { label: "Electric Cars", value: "electric", description: "Electric cars are powered entirely by electricity stored in batteries, producing zero emissions and offering environmentally friendly transportation." },
  { label: "Plug-in Hybrid Cars", value: "plug_in_hybrid", description: "Plug-in hybrid cars have both a gasoline/petrol engine and an electric motor. They can be charged by plugging into an external power source and offer longer electric-only driving ranges compared to regular hybrids." },
  { label: "Hydrogen Fuel Cell Cars", value: "hydrogen_fuel_cell", description: "These cars use hydrogen gas as fuel and generate electricity through a chemical reaction with oxygen in the air. They emit only water vapor as a byproduct and are considered zero-emission vehicles." }
];



const driveTypes = [
  { label: "Front-Wheel Drive (FWD)", value: "fwd", description: "In front-wheel drive cars, power is transmitted to the front wheels. This configuration is common in compact and midsize cars, offering good traction and fuel efficiency." },
  { label: "Rear-Wheel Drive (RWD)", value: "rwd", description: "Rear-wheel drive cars transmit power to the rear wheels. This setup is common in sports cars and larger vehicles, offering better handling and balance." },
  { label: "All-Wheel Drive (AWD)", value: "awd", description: "All-wheel drive cars distribute power to all four wheels, providing enhanced traction and stability in various road conditions. AWD is common in SUVs and performance cars." },
  { label: "Four-Wheel Drive (4WD)", value: "4wd", description: "Four-wheel drive cars send power to all four wheels, usually with the ability to switch between two-wheel and four-wheel drive modes. 4WD is commonly found in off-road vehicles and trucks." },
  { label: "Part-Time Four-Wheel Drive", value: "part_time_4wd", description: "Part-time four-wheel drive systems allow drivers to manually engage four-wheel drive when needed for off-road or slippery conditions. Vehicles with this drive type often have a rear-wheel drive mode for regular driving." },
  { label: "Selectable All-Wheel Drive", value: "selectable_awd", description: "Selectable all-wheel drive systems enable drivers to switch between two-wheel drive and all-wheel drive modes based on driving conditions. This setup is common in crossover SUVs and some trucks." }
];

const gearTypes = [
  { label: "Manual Transmission", value: "manual", description: "In manual transmission cars, the driver manually shifts gears using a gear stick and clutch pedal. This type of transmission offers greater control and is preferred by driving enthusiasts." },
  { label: "Automatic Transmission", value: "automatic", description: "Automatic transmission cars shift gears automatically, without requiring driver input. This type of transmission is convenient and easy to use, making it popular in daily driving." },
  { label: "Continuously Variable Transmission (CVT)", value: "cvt", description: "CVT uses a system of pulleys and belts to provide seamless gear shifts without distinct gear ratios. It offers smooth acceleration and improved fuel efficiency." },
  { label: "Dual-Clutch Transmission (DCT)", value: "dct", description: "DCT uses two separate clutches for odd and even gears, allowing for lightning-fast gear changes without interrupting power delivery. It combines the convenience of automatic transmission with the performance of manual transmission." },
  { label: "Semi-Automatic Transmission", value: "semi_automatic", description: "Semi-automatic transmission cars require the driver to manually shift gears but without the need for a clutch pedal. It offers greater control than automatic transmission while being easier to operate than manual transmission." }
];

const construction = [
  { "label": "Sedan", "value": "sedan", "description": "Typically characterized by four doors and a separate trunk, sedans offer a balance of comfort, practicality, and fuel efficiency." },
  { "label": "SUV (Sport Utility Vehicle)", "value": "suv", "description": "Known for their spacious interiors, high ground clearance, and optional all-wheel-drive capabilities, SUVs are versatile vehicles suitable for various terrains and lifestyles." },
  { "label": "Hatchback", "value": "hatchback", "description": "Featuring a rear door that opens upwards, providing access to the cargo area, hatchbacks are compact yet offer more cargo space compared to sedans, making them practical for urban driving." },
  { "label": "Coupe", "value": "coupe", "description": "Characterized by their sleek and sporty designs, often with two doors and a sloping roofline, coupes prioritize style and performance over practicality, typically offering seating for two to four passengers." },
  { "label": "Convertible", "value": "convertible", "description": "Featuring retractable roofs that can be opened or closed to allow for open-air driving, convertibles offer a unique driving experience and are popular in sunny climates." },
  { "label": "Wagon", "value": "wagon", "description": "Offering a larger cargo area compared to sedans thanks to their extended roofline and rear cargo area, wagons are practical choices for families or individuals needing extra storage space." },
  { "label": "Minivan", "value": "minivan", "description": "Designed with spacious interiors and multiple seating rows, minivans are ideal for large families or transporting passengers, prioritizing passenger comfort and convenience." },
  { "label": "Truck", "value": "truck", "description": "Versatile vehicles designed for hauling cargo or towing trailers, trucks come in various configurations, including compact trucks, full-size trucks, and heavy-duty trucks, offering different levels of payload and towing capacity." },
  { "label": "Electric Vehicle (EV)", "value": "ev", "description": "Powered by electric motors and batteries, electric vehicles produce zero tailpipe emissions, offering environmentally friendly transportation options and becoming increasingly popular." },
  { "label": "Hybrid Vehicle", "value": "hybrid", "description": "Combining an internal combustion engine with an electric motor and battery pack, hybrid vehicles offer improved fuel efficiency and reduced emissions compared to traditional gasoline-powered vehicles." }
]

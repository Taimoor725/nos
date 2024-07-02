'use client'
import FilterDropDown from '@/components/accets/FilterDropDown';
import { useEffect, useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import CarCard from './CarCard'
import { Pagination } from '@nextui-org/react';
import CarCardHorizontal from './CarCardHorizontal'
import CarDetail from './CarDetail'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFilter, faL } from '@fortawesome/free-solid-svg-icons';


export default function Filter() {

  const [resultCount, setResultCount] = useState(0);
  const [currentPage, setPage] = useState(1);
  const [postPerPage, setPosts] = useState(8);
  // for grid and list display
  const [grid, setGrid] = useState([false, true]);
  const [Detail, setDetail] = useState(false)
  const [selectCar, setCar] = useState('')


  
  // its responsivness is done
  const Selector = () => {
    return (
      <div className="w-[85%] md:min-h-full h-full rounded-md flex flex-col text-white custom-gradient pb-3">
        <div className="w-full font-medium text-xl p-3">FILTERN NACH</div>
        <div className=" grid-cols-4 px-3 gap-2 md:grid hidden">
          <FilterDropDown label={'Marken'} data={data.eingen} />
          <FilterDropDown label={'Model'} data={data.model} />
          <FilterDropDown label={'Price'} data={data.price} />
          <FilterDropDown label={'Select'} data={data.anti} />
          <FilterDropDown label={'GetRiBert'} data={data.geartpe} />
        </div>



        <div className="px-3 gap-2 md:hidden block mb-2 w-full">
        <Mobile_filter/>
      </div>
      </div>
    );
  };




  useEffect(() => {
    if (grid[0] === true) {
      setPosts(3);
      const set = 'setPage(1)'
    } else {
      setPosts(8);
      const set = 'setPage(1)'

    }

    const updatePosts = () => {
      console.log(window.innerWidth);
      if (window.innerWidth < 700) {
        setPosts(3);
      } else {
        setPosts(8);
      }
    };

    updatePosts();
    window.addEventListener('resize', updatePosts);


    return () => {
      window.removeEventListener('resize', updatePosts);
    };

  }, [grid]);

  let lastPostIndex = currentPage * postPerPage;
  let firstPostIndex = lastPostIndex - postPerPage;
  let SlicedCarsData = CarsData.slice(firstPostIndex, lastPostIndex);


  const detailHandler = (value) => {
    setGrid([false, false])
    setCar(value)
    setDetail(true)
  }


  const detailHandlerInvers = () => {
    setGrid([false, true])
    setDetail(false)
  }



  const Results = () => {


    return (
      <div className='flex flex-col w-[85%] h-auto'>

        {/* Live Search REsult Bar */}
        {!Detail && (<div className='w-full h-[10vh] flex'>
          <div className='flex items-center gap-2'><p className='font-bold text-3xl'>{resultCount}</p><p className='font-medium text-3xl'>Ergebnisse</p></div>
          <div className='flex-grow flex justify-end items-center gap-3'>
            <div className='md:block hidden'><img src="/sales/list-grey.png" alt="list" className='object-cover md:w-8 md:h-[30px] cursor-pointer hover:scale-105' onClick={() => setGrid([true, false])} /></div>
            <div className='md:block hidden'><img src="/sales/grid-black.svg" alt="list" className='fill-white object-cover md:w-8 md:h-[30px] cursor-pointer hover:scale-105' onClick={() => setGrid([false, true])} /></div>
            <div className='md:block hidden'><DropDown data={data.filter} /></div>
          </div>
        </div>)}


        {/* Results itSelf */}
        {grid[1] && (
          <div className='md:grid flex flex-col grid-cols-4 gap-4'>
            {SlicedCarsData.map((value, indev) => (
              <CarCard data={value} onClick={() => detailHandler(value)} />
            ))}
          </div>)}


        {grid[0] && (
          <div className='w-full grid grid-cols-1 gap-4 overflow-hidden'>
            {SlicedCarsData.map((car, index) => (
              <CarCardHorizontal key={index} data={car} onClick={() => detailHandler(car)} />
            ))}
          </div>
        )
        }



        {Detail && (
          <CarDetail data={selectCar} onClick={detailHandlerInvers} />
        )}
      </div>
    );
  }



  return (
    <div className="w-screen h-auto flex flex-col overflow-x-hidden text-white items-center">

      {/* first screen  */}
      <div className='w-full relative  text-white'>
        <div className='hidden md:block w-full h-screen'>
          <img src="/Contact/first.avif" alt="loading" className='w-full h-full object-cover' />
        </div>
        <div className='md:hidden w-full h-screen'>
          <img src="/Contact/first_again.avif" alt="loading" className='w-full h-full object-cover' />
        </div>
        <div></div>
        <div className='absolute w-[30%] flex flex-col gap-3 top-[50%] translate-y-[-50%] left-[10%]'>
          <p className='text-2xl font-bold'>Headquarter</p>
          <div className='flex flex-col w-full'>
            <p className='font-extrabold md:text-5xl text-3xl'>Ferrari SpA, headquarters and factory</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-xl font-medium'>ABC USA ABC Street 121212</p>
            <p className='text-xl font-medium'>+1212121212</p>
          </div>
        </div>
      </div>
      {/* Filter */}
      {!Detail && (<div className="w-full h-auto flex py-[5vh] justify-center">
        <Selector />
      </div>)}

      {/* Results */}
      <div className='w-full h-auto flex justify-center'>
        <Results />
      </div>
      <div className='flex w-[85%] justify-center p-4'>{!Detail && (<Pagination total={(CarsData.length / postPerPage) + 1} initialPage={1} onChange={(page) => setPage(page)} />)}</div>
    </div>
  );
}


const data = {
  model: ['1 SERIE', '-118', '-120', '-M135', 'Z SERIES', 'X SERIES', 'i3', '-X1'],
  eingen: ['DISEL', 'ELECTRIC', 'HYBRID'],
  price: ['10,000', '20,000', '50,000', '100,000', '200,000'],
  anti: ['A', 'B', 'C', 'D'],
  geartpe: ['Manual', 'AutoMatic', 'Other'],
  filter: ['Preis', 'KM', 'Jahrgang', 'Mark', 'PS']
};


function DropDown({ data }) {
  const [selected, setSelected] = useState('')
  const Handler = (e) => {
    setSelected(e.target.value)
  }
  return (
    <select name="" id="filtr" onChange={Handler} value={selected} className='w-full p-[12px] text-sm border-[1px] border-[gray] text-black'>
      <option value="" disabled >Neueste Angebote zuerst</option>
      {data.map((data) => (
        <option value={data}>{data}</option>
      ))}
    </select>
  )
}

export function Mobile_filter() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className='w-full flex gap-2 text-[blue]' onPress={onOpen}><FontAwesomeIcon icon={faFilter} className='w-6 h-6 text-[blue]'/>Open Filter</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Filter</ModalHeader>
              <ModalBody>
                  
                      <FilterDropDown label='Marken' data={data.eingen} />
                      <FilterDropDown label='Model' data={data.model} />
                      <FilterDropDown label='Price' data={data.price} />
                      <FilterDropDown label='Select' data={data.anti} />
                      <FilterDropDown label='GetRiBert' data={data.geartpe} />
            </ModalBody>
          <ModalFooter>
            <Button color="primary" onPress={onClose}>
              Apply
            </Button>
          </ModalFooter>
        </>
          )}
      </ModalContent>
    </Modal >
    </>
  );
}


const CarsData = [
  {
    imageUrl: ['/sales/cars/car (1).jpeg', '/sales/cars/car (3).jpeg', '/sales/cars/car (4).jpeg', '/sales/cars/car (2).jpeg', '/sales/cars/car (5).jpeg', '/sales/cars/car (6).jpeg', '/sales/cars/car (7).jpeg', '/sales/cars/car (8).jpeg'],
    name: 'BMW 128ti Steptronic',
    price: "CHF 52'900,-",
    market: "Neu",
    transmition: 'Automat sequentiell',
    kilometer: '10',
    fuelType: 'Benzin',
    power: '265 PS',
    CO2: '36g/km',
    CombineCO2: '158 g/km',
    deler: 'Zuchwil/Solothurn, Autoverkehr AG Zuchwil',
    adress: 'Old Street New House 125',
    phone: '+912912320392',
    guarantee: 'Yes',
    type: 'SUV',
    color: 'Red',
    noOfSeats: 5
  },
  {
    imageUrl: ['/sales/cars/car (4).jpeg', '/sales/cars/car (2).jpeg', '/sales/cars/car (3).jpeg', '/sales/cars/car (1).jpeg', '/sales/cars/car (5).jpeg', '/sales/cars/car (6).jpeg', '/sales/cars/car (7).jpeg', '/sales/cars/car (8).jpeg'],
    name: 'Audi A4 Avant',
    price: "CHF 45'300,-",
    market: "Neu",
    transmition: 'Automat',
    kilometer: '0',
    fuelType: 'Diesel',
    power: '190 PS',
    CO2: '95g/km',
    CombineCO2: '110 g/km',
    deler: 'Zuchwil/Solothurn, Autoverkehr AG Zuchwil',
    adress: 'Old Street New House 125',
    phone: '+912912320392',
    guarantee: 'Yes',
    type: 'SUV',
    color: 'Blue',
    noOfSeats: 5
  },
  {
    imageUrl: ['/sales/cars/car (5).jpeg', '/sales/cars/car (2).jpeg', '/sales/cars/car (3).jpeg', '/sales/cars/car (4).jpeg', '/sales/cars/car (1).jpeg', '/sales/cars/car (6).jpeg', '/sales/cars/car (7).jpeg', '/sales/cars/car (8).jpeg'],
    name: 'Toyota Prius',
    price: "CHF 30'500,-",
    market: "Neu",
    transmition: 'Automat',
    kilometer: '0',
    fuelType: 'Hybrid',
    power: '122 PS',
    CO2: '70g/km',
    CombineCO2: '82 g/km',
    deler: 'Zuchwil/Solothurn, Autoverkehr AG Zuchwil',
    adress: 'Old Street New House 125',
    phone: '+912912320392',
    guarantee: 'Yes',
    type: 'Off Road',
    color: 'Green',
    noOfSeats: 5
  },
  {
    imageUrl: ['/sales/cars/car (3).jpeg', '/sales/cars/car (1).jpeg', '/sales/cars/car (2).jpeg', '/sales/cars/car (4).jpeg', '/sales/cars/car (5).jpeg', '/sales/cars/car (6).jpeg', '/sales/cars/car (7).jpeg', '/sales/cars/car (8).jpeg'],
    name: 'Tesla Model 3',
    price: "CHF 55'000,-",
    market: "Neu",
    transmition: 'Automat',
    kilometer: '0',
    fuelType: 'Elektro',
    power: '283 PS',
    CO2: '0g/km',
    CombineCO2: '0 g/km',
    deler: 'Zuchwil/Solothurn, Autoverkehr AG Zuchwil',
    adress: 'Old Street New House 125',
    phone: '+912912320392',
    guarantee: 'Yes',
    type: 'Sedan',
    color: 'White',
    noOfSeats: 5
  },
  {
    imageUrl: ['/sales/cars/car (8).jpeg', '/sales/cars/car (1).jpeg', '/sales/cars/car (2).jpeg', '/sales/cars/car (3).jpeg', '/sales/cars/car (4).jpeg', '/sales/cars/car (5).jpeg', '/sales/cars/car (6).jpeg', '/sales/cars/car (7).jpeg'],
    name: 'Ford Mustang GT',
    price: "CHF 75'000,-",
    market: "Gebraucht",
    transmition: 'Automat',
    kilometer: '15,000',
    fuelType: 'Benzin',
    power: '450 PS',
    CO2: '220g/km',
    CombineCO2: '250 g/km',
    deler: 'Zuchwil/Solothurn, Autoverkehr AG Zuchwil',
    adress: 'Old Street New House 125',
    phone: '+912912320392',
    guarantee: 'No',
    type: 'Sports',
    color: 'Yellow',
    noOfSeats: 4
  },
  {
    imageUrl: ['/sales/cars/car (1).jpeg', '/sales/cars/car (2).jpeg', '/sales/cars/car (3).jpeg', '/sales/cars/car (4).jpeg', '/sales/cars/car (5).jpeg', '/sales/cars/car (6).jpeg', '/sales/cars/car (7).jpeg', '/sales/cars/car (8).jpeg'],
    name: 'Porsche 911 Carrera',
    price: "CHF 120'000,-",
    market: "Gebraucht",
    transmition: 'Automat',
    kilometer: '8,000',
    fuelType: 'Benzin',
    power: '385 PS',
    CO2: '180g/km',
    CombineCO2: '200 g/km',
    deler: 'Zuchwil/Solothurn, Autoverkehr AG Zuchwil',
    adress: 'Old Street New House 125',
    phone: '+912912320392',
    guarantee: 'No',
    type: 'Sports',
    color: 'Black',
    noOfSeats: 4
  },
  {
    imageUrl: ['/sales/cars/car (4).jpeg', '/sales/cars/car (1).jpeg', '/sales/cars/car (2).jpeg', '/sales/cars/car (3).jpeg', '/sales/cars/car (5).jpeg', '/sales/cars/car (6).jpeg', '/sales/cars/car (7).jpeg', '/sales/cars/car (8).jpeg'],
    name: 'BMW 128ti Steptronic',
    price: "CHF 52'900,-",
    market: "Neu",
    transmition: 'Automat sequentiell',
    kilometer: '10',
    fuelType: 'Benzin',
    power: '265 PS',
    CO2: '36g/km',
    CombineCO2: '158 g/km',
    deler: 'Zuchwil/Solothurn, Autoverkehr AG Zuchwil',
    adress: 'Old Street New House 125',
    phone: '+912912320392',
    guarantee: 'Yes',
    type: 'SUV',
    color: 'Red',
    noOfSeats: 5
  },
  {
    imageUrl: ['/sales/cars/car (5).jpeg', '/sales/cars/car (1).jpeg', '/sales/cars/car (2).jpeg', '/sales/cars/car (3).jpeg', '/sales/cars/car (4).jpeg', '/sales/cars/car (6).jpeg', '/sales/cars/car (7).jpeg', '/sales/cars/car (8).jpeg'],
    name: 'Audi A4 Avant',
    price: "CHF 45'300,-",
    market: "Neu",
    transmition: 'Automat',
    kilometer: '0',
    fuelType: 'Diesel',
    power: '190 PS',
    CO2: '95g/km',
    CombineCO2: '110 g/km',
    deler: 'Zuchwil/Solothurn, Autoverkehr AG Zuchwil',
    adress: 'Old Street New House 125',
    phone: '+912912320392',
    guarantee: 'Yes',
    type: 'SUV',
    color: 'Blue',
    noOfSeats: 5
  },
  {
    imageUrl: ['/sales/cars/car (6).jpeg', '/sales/cars/car (1).jpeg', '/sales/cars/car (2).jpeg', '/sales/cars/car (3).jpeg', '/sales/cars/car (4).jpeg', '/sales/cars/car (5).jpeg', '/sales/cars/car (7).jpeg', '/sales/cars/car (8).jpeg'],
    name: 'Mercedes-Benz C 200',
    price: "CHF 60'700,-",
    market: "Neu",
    transmition: 'Automat',
    kilometer: '5',
    fuelType: 'Benzin',
    power: '204 PS',
    CO2: '120g/km',
    CombineCO2: '140 g/km',
    deler: 'Zuchwil/Solothurn, Autoverkehr AG Zuchwil',
    adress: 'Old Street New House 125',
    phone: '+912912320392',
    guarantee: 'Yes',
    type: 'Sedan',
    color: 'Gray',
    noOfSeats: 5
  }
]; 
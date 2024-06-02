import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const CarCard = ({ carName, price, dis, src, onOpen }) => {
  return (
    <div className="relative flex md:w-76 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-32 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-orange-800 to-orange-600">
        <img src={src} alt="SUV" className='object-cover hover:scale-105' />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {carName}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {dis}
        </p>
      </div>
      <div className="p-6 pt-0 flex">
        <button type="button" className="select-none rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 py-3 px-10 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          {price}
        </button>
        
        <div className='flex flex-grow justify-end items-center'>
          <button 
            type="button" 
            className="select-none rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={onOpen}
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

function SUV({ carName, price, dis, src ,model,tunning}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <CarCard carName={carName} price={price} dis={dis} src={src} onOpen={onOpen} />
      
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-2xl">{carName}</ModalHeader>
          <ModalBody>
          <div className=' flex flex-col gap-2'>
          <div className='flex gap-[50%]'>
            <div className='flex flex-col'><p className='font-extrabold text-xl'>Model</p><p>{model}</p></div>
            <div className='flex flex-col'><p className='font-extrabold text-xl'>Last Work</p><p>{tunning}</p></div>
          </div>

          <div className='flex flex-col gap-1'>
            <p className='font-extrabold text-xl'>Details</p>
            <p className='text-sm font-light'>{dis}</p>
            <p className='text-lg font-bold'>Price: {price}</p>
          </div>
            
          </div>
            <img src={src} alt={carName} className="w-full h-auto" />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            {/* <Button color="primary" onPress={onClose}>
              Action
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default SUV;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, ModalContent } from "@nextui-org/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function JobLocation() {
  
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [address, setAddress] = useState('Enter your Address');
  const [tempValue, setTempValue] = useState('');

  const handleAddressChange = (e) => {
    setTempValue(e.target.value);
  };

  const formHandler = () => {
    setAddress(tempValue);
    if(tempValue !== ''){
      toast.success('Adress Added Successfully But still make sure Address is correct' , {autoClose:2000})
      onOpenChange(false); 
      
      
  }
    else{
      setAddress('Enter a Valid Address')
      toast.error("Address cant be empty, And also make sure you enter the right address" , {autoClose:2000});
    }
  };

  return (
    <div className='w-[95%] flex flex-wrap gap-5 mt-16 text-white custom-gradient p-3'>
      <div className='flex flex-wrap gap-2'>
        <p className='flex flex-wrap text-xl font-bold'>Arbeitsplatz</p>
        <p className='flex flex-wrap text-sm font-light'>
          Der Standort hilft uns, Ihre Stellenanzeige an die relevantesten Bewerber:innen zu übermitteln. Je nachdem, wo sie arbeiten können oder wollen.
        </p>
      </div>
      <div className='flex w-full flex-col flex-wrap gap-3'>
        <p className='text-xl font-bold flex flex-wrap'>Arbeitsplatz</p>
        <div className='w-1/2 p-2 border-[2px] border-white rounded-lg flex flex-wrap text-black'>
          <div className='flex items-center gap-2 text-white'>{tempValue && <FontAwesomeIcon icon={faLocationDot} className='text-white'/>}{address}</div>
        </div>
        <button onClick={onOpen} className='flex w-1/4 p-2 border-[2px] rounded-lg font-semibold text-sm justify-center items-center'>
          <FontAwesomeIcon icon={faPlus} />
          <p className='flex-grow justify-center flex'>Adresse hinzufügen</p>
        </button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-white">Enter Your Address</ModalHeader>
                <ModalBody>
                  <input
                    type="text"
                    className='w-full border-[1px] flex items-center p-2 border-[gray] outline-none'
                    placeholder='Enter Your Address'
                    value={tempValue}
                    onChange={handleAddressChange}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={formHandler}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
                    <ToastContainer position='top-center' pauseOnFocusLoss='false' pauseOnHover/>
    </div>
  );
}

export default JobLocation;

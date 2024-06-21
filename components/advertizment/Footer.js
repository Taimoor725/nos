import { faComment, faMessage, faRegistered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";

function Footer() {
  return (
    <div className='w-full h-auto p-7 flex flex-wrap black-[red]'>      
        <div className='w-1/2 flex flex-col gap-2'>
            <div className='flex flex-wrap items-center gap-2'>
                <FontAwesomeIcon icon={faRegistered} className='w-4'/>
                <p className='font-semibold text-sm'>2024 JobCloud AG</p>
            </div>      
            <div className='flex text-[gray] gap-3'>
                <button className='underline font-light text-xs'>Impressum</button>
                <button className='underline font-light text-xs'>AGB</button>
                <button className='underline font-light text-xs'>Datenschutzerklärung</button>
                <button className='underline font-light text-xs'>Cookie-Finstellungen</button>
                <button className='underline font-light text-xs'>Hilfecenter</button> 
                <button className='underline font-light text-xs'>Kontakt</button>
            </div>

        </div>
        <div className='flex w-1/2 justify-end items-center'>
            {/* <Message/> */}
            <button className='flex justify-center items-center  w-10 h-10 bg-black text-white rounded-full'>
                <FontAwesomeIcon icon={faComment} className='min-w-[80%]'/>
            </button>
        </div>
    </div>
  )
}

export default Footer



// import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";
// const Message=()=>{
   
//       const {isOpen, onOpen, onOpenChange} = useDisclosure();
//       const [modalPlacement, setModalPlacement] = React.useState("auto");
    
//       return (
//         <div className="flex flex-col gap-2">
//           <Button onPress={onOpen} className="w-10 h-10 rounded-lg text-white bg-black flex justify-center items-center"
//           size='sm'
//           radius='full'>
//           <FontAwesomeIcon icon={faMessage}/></Button>
//           <RadioGroup
//             label="Select modal placement"
//             orientation="horizontal"
//             value={modalPlacement}
//             onValueChange={setModalPlacement}
//           >
//             <Radio value="auto">auto</Radio>
//             <Radio value="top">top</Radio>
//             <Radio value="bottom">bottom</Radio>
//             <Radio value="center">center</Radio>
//             <Radio value="top-center">top-center</Radio>
//             <Radio value="bottom-center">bottom-center</Radio>
//           </RadioGroup>
//           <Modal 
//             isOpen={isOpen} 
//             placement={modalPlacement}
//             onOpenChange={onOpenChange} 
//           >
//             <ModalContent>
//               {(onClose) => (
//                 <>
//                   <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
//                   <ModalBody>
//                     <p> 
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                       Nullam pulvinar risus non risus hendrerit venenatis.
//                       Pellentesque sit amet hendrerit risus, sed porttitor quam.
//                     </p>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                       Nullam pulvinar risus non risus hendrerit venenatis.
//                       Pellentesque sit amet hendrerit risus, sed porttitor quam.
//                     </p>
//                   </ModalBody>
//                   <ModalFooter>
//                     <Button color="danger" variant="light" onPress={onClose}>
//                       Close
//                     </Button>
//                     <Button color="primary" onPress={onClose}>
//                       Action
//                     </Button>
//                   </ModalFooter>
//                 </>
//               )}
//             </ModalContent>
//           </Modal>
//         </div>
//       );
//     }
    











import { faCircleExclamation, faClock, faFile, faFlag, faLocation, faPencil, faTriangleExclamation, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Footer from '../Footer'

function Preview() {
  return (
    <div className='flex flex-col items-center overflow-auto gap-5'>
      <div className='w-4/6 h-auto flex flex-col bg-white items-center gap-4 border-[1px] rounded-md shadow-xl'>
        <Card />
        <Card1 />
        <Card2 />
        <div className='w-[95%] flex items-start gap-5 flex-col'>
          <div className='text-lg font-semibold'>Exit Void Kadriov</div>
          <div className='font-bold text-xl'>dsad</div>
        </div>
        <JobDetails />
        <div className='font-light text-lg flex w-[95%] justify-start'>dsadasdsad</div>
        <div className='w-[95%] h-[2px] bg-gray-200 mt-12'></div>
        <JobDetails2/>
      </div>
      <Footer/>
    </div>
  )
}

export default Preview


const Card = () => {
  return (
    <div className='flex w-[95%] flex-col pt-10'>
      <div className='flex item-center'>
        <p className='font-bold text-xl flex items-center'>Vorschau</p>
        <div className='flex-grow flex justify-end'>
          <button className='flex justify-end items-center w-[20%] p-2 border-[2px] gap-2 rounded-sm'>
            <FontAwesomeIcon icon={faPencil} className='w-5' />
            <p className='font-semibold text-lg'>Bearbeiten</p>
          </button>
        </div>
      </div>
    </div>
  )
}

const Card1 = () => {
  return (
    <div className='w-[95%] p-2 bg-[#F0F4FF] flex items-center gap-2'>
      <FontAwesomeIcon icon={faCircleExclamation} className='w-5' />
      <p className='text-xs font-light flex flex-wrap'>Je nachdem, auf welcher Plattform Ihre Stellenanzeige veröffentlicht wird, kann sie unterschiedlich aussehen.</p>
    </div>
  )
}

const Card2 = () => {
  return (
    <div className='w-[95%] p-3 bg-[#FFFCE6] flex items-center gap-2'>
      <FontAwesomeIcon icon={faTriangleExclamation} className='w-5' />
      <p className='text-xs font-light flex flex-wrap'>Nachdem Sie Ihre Bestellung aufgegeben haben, wird Ihre Stellenanzeige automatisch veröffentlicht, sobald unser Support-Team Ihr Konto erfolgreich verifiziert hat.</p>
    </div>
  );
};


const JobDetails = () => {
  return (
    <div className='flex  w-[95%] text-sm justify-between'>
      <div className='flex flex-col w-[33%] gap-4 justify-center'>
        <div className='flex items-center gap-2'><FontAwesomeIcon icon={faFile} className='w-4'/><div>Vertrag: {`Permanent`}</div></div>
        <div className='flex items-center gap-2'><FontAwesomeIcon icon={faWallet} className='w-5'/><div>Lohn:{`Permanent`}</div></div>
      </div>

      <div className='flex flex-col w-[33%] justify-center gap-4'>
        <div className='flex items-center gap-2'><FontAwesomeIcon icon={faClock} className='w-5'/><div>Pensum:  {`Permanent`}</div></div>
        <div className=' flex items-center gap-2'><FontAwesomeIcon icon={faLocation} className='w-5'/><div>Arbeitsort: {`Permanent`}</div></div>
      </div>

      <div className='flex flex-col w-[33%]'>
        <div className='flex items-center gap-2'><FontAwesomeIcon icon={faFlag} className='w-5'/><div>Sprache: {`Permanent`}</div></div>
      </div>
    </div>
  )
}


const JobDetails2=()=>{
  return(
    <div className='flex justify-start w-[95%] pb-10'>
    <div className='flex flex-col w-full gap-5'>
      <div className=' flex flex-col gap-2'>
          <div className='flex flex-wrap text-xl font-bold'>Erforderliche Fähigkeiten</div>
          <div className='flex bg-[#E6E6EA] w-[10%] justify-center items-center p-1 text-sm rounded-sm'>{`DDS-CAD`}</div>
      </div>
      <div className='w-full h-[2px] bg-gray-200'></div>

      <div className='flex flex-col gap-2'>
          <div className='flex flex-wrap text-xl font-bold'>Vorteile</div>
          <div className='flex bg-[#E6E6EA] w-[37%] p-1 text-xs font-basic rounded-sm'>{`Weiter- und Fortbildungsbudget pro Mitarbeitenden`}</div>
      </div>
    </div>
    </div>
  )
}
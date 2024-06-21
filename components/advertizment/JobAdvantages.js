import React, { useState } from 'react'
import SelectBar from '../SelectioBar'
import {Textarea} from "@nextui-org/react";


function JobAdvantages() {
  return (
    <div className='w-4/6 h-auto bg-white flex flex-col flex-wrap pl-5 rounded-md border-[1px] shadow-xl'>
        <div className='flex flex-col text-wrap text-lg'>
            <Advantages/>
            <div className='w-[95%] h-[2px] bg-gray-200 mt-12'></div>
            <Traning data={data}/>
            <div className='w-[95%] h-[2px] bg-gray-200 mt-12'></div>
            <Experiance/>
        </div>
    </div>
  )
}

export default JobAdvantages



const Advantages=()=>{
    return(
    <div className='flex flex-col flex-wrap gap-4 pt-16'>
    <div className='font-bold text-xl'>Vorteile</div>
    <div className='font-light text-sm'>Geben Sie hier die Vorteile an, die Ihr Unternehmen bietet</div>
    <Textarea
    label="Vorteil hinzufügen"
    // placeholder="Enter your description"
    className="max-w-xs shadow-xl rounded-lg border-black border-[0.3px] "
    color='warning'
    fullWidth="true"
  />
  </div>
  ) 
}

const Traning=()=>{
    return(
        <div className='flex flex-col gap-4 pt-16'>
            <div className='flex flex-wrap font-bold text-xl'>
                Ausbildung
            </div>
            <div className='flex flex-wrap font-light text-sm'>
                Geben Sie hier an welche Art von Abschluss die Bewerber:innen haben sollten.
            </div>
            {/* <div className='w-[37%] border-[2px] rounded-lg'></div> */}
            <fieldset className="border-[2px] w-[47%]  rounded-[12px] flex flex-wrap">
                <legend className=' text-sm font-semibold'><p>Ausbildung</p></legend>
                <SelectBar data={data} placeholder="Select"/>
             </fieldset>
        </div>
    )
}




const Experiance=()=>{
    return(
        <div className='flex flex-col flex-wrap gap-4 py-10'>
            <p className='font-bold text-lg flex flex-wrap'>Berufserfahrung</p>
            <p className='font-light text-sm flex flex-wrap'>Geben Sie hier an wie viele Jahre Erfahrung die Bewerber:innen in dieser Position haben sollten</p>
            <fieldset className="border-[2px] w-[47%]  rounded-[12px] flex flex-wrap">
                <legend className=' text-sm font-semibold'><p>Berufserfahrung</p></legend>
                <SelectBar data={data1} placeholder="Select"/>
             </fieldset>
        </div>

    )
}



const data=[
    {label: "Genral Secondry School", value: "Genral Secondry School"},
      {label: "Heigh School", value: "Heigh School"},
      {label: "Collage", value: "Collage"},
      {label: "University", value: "University"},
 ]


 const data1=[
    {label: "NO Experiance Required", value: "NO Experiance Required"},
    {label: "6 Months", value: "6 Months"},
      {label: "1 Year", value: "1 Year"},
      {label: "2 Year", value: "2 Year"},
      {label: "2.5 Years", value: "2.5 Years"},
      {label: "3 Years", value: "3 Years"},

 ]

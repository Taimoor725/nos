import React from 'react'
import SelectBar from '../SelectioBar'
// import { Value } from '@radix-ui/react-select'

function LanguageRequired() {
  return (
    <div className='w-[95%] flex flex-col mt-16 text-black pl-5 gap-8'>
      <div className='flex flex-col gap-3'>
        <p className='font-xl font-bold flex- flex-wrap'>Sprachkenntnisse</p>
        <p className='font-sm font-light flex- flex-wrap'>Geben Sie an, welche Sprachen für diese Stelle erforderlich sind und welches Mindestniveau akzeptiert wird.</p>
      </div>
      <div className='flex w-full  items-center gap-3 flex-wrap '>
            <fieldset className='w-[45%] border-[2px] rounded-md'>
            <legend className='font-semibold text-sm'>Sprache*</legend>
            <SelectBar placeholder={"Select"} data={data1} type={"multiple"}/>
            </fieldset>

            <fieldset className='w-[45%] border-[2px] rounded-md'>
            <legend className='font-semibold text-sm'>Niveau*</legend>
            <SelectBar placeholder={"Select"} data={data}/>
            </fieldset>
      </div>
    </div>
  )
}

export default LanguageRequired




const data1=[
    {label:"English",value:"English"},
    {label:"Germen",value:"Germen"},
    {label:"French",value:"French"},
    {label:"Chines",value:"Chines"},
    {label:"Urdu",value:"Urdu"},
    {label:"Pershine",value:"Pershine"},
    {label:"Arabic",value:"Arabic"},
]

const data=[
    {label:"Bignner",value:"Bignner"},
    {label:"Mideocar",value:"Mideocar"},
    {label:"Advance",value:"Advance"},
    {label:"Profecinal",value:"Profecinal"},
]
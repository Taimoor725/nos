import React from 'react'
import SelectBar from '../SelectioBar'
import DoubleSidedSlider from './DoubleSidedSlider'

function ContractType() {
  return (
    <div className='flex flex-col w-[95%] flex-wrap gap-10 mt-16 text-white custom-gradient p-3'>
        <div className='flex flex-col gap-3'>
            <p className='font-bold  text-lg flex-wrap'>Arbeitsvertrag</p>
            <p className='font-light  text-sm flex-wrap'>Geben Sie hier die Art des Vertrags den Sie für diese Stelle anbieten und die Arbeitsbelastung an.</p>
        </div>      
        <div>
            <fieldset className='border-[2px] h-auto rounded-lg w-[47%]'>
                <legend className='font-semibold text-sm '>Vertragsart</legend>
                <SelectBar placeholder={"Select"} data={data}/>
            </fieldset>
        </div>
        <div className='flex flex-col gap-3'>
            <p className='text-xl font-bold'>Arbeitspensum *</p>
            <DoubleSidedSlider/>
        </div>

    </div>

  )
}

export default ContractType

const data=[
{label: "parmanent employ", value: "parmanent employ"},
  {label: "Contract employ", value: "Contract employ"},
  {label: "Employ for six months", value: "Employ for six months"},
  {label: "Employ for one Year", value: "Employ for one Year"}
]
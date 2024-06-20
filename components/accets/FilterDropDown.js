"use client"
import React from 'react'
import { useState } from 'react'

function FilterDropDown({label,data}) {
    const [selected,setSelected]=useState('')
    const Handler=(e)=>{
        setSelected(e.target.value)
    }
  return (
    <div className='flex flex-col text-black'>
        <label htmlFor="filter" className='text-xl font-bold text-white'>{label}</label>
        <select name="" id="filtr" onChange={Handler} value={selected} className='w-full px-2 py-3 border-[1px] border-[gray]'>
            <option value="" disabled >Alle</option>
            {data.map((data)=>(
                <option value={data}>{data}</option>
            ))}
        </select>
    </div>
  )
}

export default FilterDropDown


"use client"
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'

const Navbar = ({ SecondPage ,backButtonAddress}) => {
    const [roundedtabsCol, setCol] = useState("bg-white")
    const router = useRouter();

    useEffect(() => {
        if (SecondPage === true) {
            setCol("bg-black text-white");
        } else {
            setCol("bg-white text-[gray]");
        }
    }, [SecondPage]);

    return (
        <div className='flex flex-col gap-7'>
            <div className='w-screen bg-white p-2'>
                <button className='w-auto h-auto p-2 text-sm rounded-md hover:bg-[#f3f8ff8d] underline' onClick={() => router.push(backButtonAddress)}>{`< Zurück zu den Jobinseraten`}</button>
            </div>
            <div className='flex justify-center items-end w-full h-12 gap-8'>
                <div className='flex justify-center flex-col items-center'>
                    <div className='text-white flex justify-center items-center w-10 h-10 border-black border-[2px] rounded-full bg-black'>1</div>
                    <div className='text-sm'>Inserat</div>
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <div className={`w-10 h-10 border-[gray] border-[2px] rounded-full flex justify-center items-center ${roundedtabsCol}`}>2</div>
                    <div className='text-sm'>Vorschau</div>
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <div className='w-10 h-10 border-[gray] text-[gray] border-[2px] rounded-full flex justify-center items-center'>3</div>
                    <div className='text-sm'>Publikation</div>
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <div className='w-10 h-10 border-[gray] text-[gray] border-[2px] rounded-full flex justify-center items-center'>4</div>
                    <div className='text-sm'>Abschliessen</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

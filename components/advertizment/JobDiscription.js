import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {Select, SelectItem} from "@nextui-org/react";
import InputField from './InputFIeld/InputField.js'
import { data } from 'autoprefixer';

function JobDiscription() {
  return (
    <div className='w-4/6 h-auto bg-white flex flex-col flex-wrap pl-5 rounded-md shadow-xl py-16'>
        <div className='flex flex-col gap-5'>
            <div className='text-xl font-bold text-black'>
            Stellenbeschreibung *
            </div>
            <Card/>
            <div className='flex flex-col flex-wrap'>
            <p className='text-xs font-light flex flex-wrap p-2'>
                Um Datenschutzbedenken zu vermeiden, sollten Sie der Stellenbezeichnung keine persönlichen Informationen hinzufügen. Durch die Nutzung von ChatGPT stimmen Sie den Nutzungsbedingungen von OpenAl zu. Die Nutzungsbedingungen finden Sie hier:
            </p>
            <a href="https://beta.openai.com/terms" target="_blank" className="underline cursor-pointer">
                https://beta.openai.com/terms
             </a>
            </div>
            <div><InputField/></div>

            <div className='w-[95%] h-[2px] bg-gray-200 mt-12'></div>
            <Card_1/>
            <Skills/>
            
        </div>
    </div>
  )
}

export default JobDiscription




const Card=()=>{
    return(
      <div className='flex w-[95%] bg-[#F0F4FF] h-[10rem] p-2 rounded-sm gap-2 justify-center items-center' >
        <FontAwesomeIcon icon={faStar} className='text-yellow pt-1'/>
        <div>
        <p className='text-lg font-semibold flex flex-wrap'>Mit der Kl erstellen Sie eine Stellenbeschreibung mit nur einem Klick!</p>
        <p className='flex flex-wrap text-sm font-light'> Brauchen Sie Inspiration oder wollen Sie Zeit sparen? Lassen Sie ChatGPT, ein KI-gestütztes Tool
Entwurf generieren von OpenAl, eine Stellenbeschreibung für Sie erstellen, die auf den von Ihnen angegebenen Informationen basiert. Bitte beachten Sie, dass Sie für den Inhalt verantwortlich sind. Überprüfen und ändern Sie ihn bei Bedarf, um sicherzustellen, dass er korrekt ist und Ihren Anforderungen entspricht.</p>
        </div>
        <button className='font-semibold text-white bg-[#19327A] text-xs min-w-32 h-10 rounded-md'>Entwurf generieren</button>
      </div>
    )
}


const Card_1=()=>{
  return(
    <div className='w-full h-auto flex flex-col gap-4 pt-16'>
      <p className='font-bold text-xl flex flex-wrap'>Fähigkeiten</p>
      <div className='font-light text-sm flex flex-wrap flex-shrink-10'>
        Fügen Sie Fähigkeiten hinzu, über welche die Bewerber:innen verfügen sollen (sowohl obligatorische als auch optionale).
      </div>
    </div>
  )
}





const Skills=()=>{
  return (
    <div className='flex items-center pl-2 w-1/2 h-12 border-[1.5px] rounded-sm'>
      <input type="text" placeholder='Kompetenzen auswählen' className='border-none outline-none w-full h-auto'/>
    </div>
  );
}


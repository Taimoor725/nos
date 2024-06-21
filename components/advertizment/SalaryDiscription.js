import React from 'react'
import RadioButtonGroup from '../accets/RadioButtonGroup'
import CheckBoX from '../accets/CheckBoX'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

function SalaryDiscription() {
  return (
    <div className='flex flex-col w-[95%] pl-5 flex-wrap gap-7 my-16 '>
      <div>
        <p className='flex flex-wrap font-bold text-lg'>Lohn</p>
        <p className='font-light flex flex-wrap  text-sm'>Geben Sie hier den finanziellen Ausgleich an, den die Bewerber erwarten können. Die Angabe dieser Informationen und ihre Sichtbarkeit in der Stellenanzeige sind obligatorisch, wenn Sie die Stelle kostenlos ausschreiben.</p>
      </div>
      <div className='gap-3 flex flex-col'>
        <RadioButtonGroup data={data0} label={"Summe pro"}/>
        <RadioButtonGroup label={"Angabe als"} data={data1}/>
      </div>

      <div className='flex flex-wrap w-full gap-3 items-center'>
        <p className='text-lg font-semibold'>Startet bei</p>
        <div className='flex w-1/4 rounded-lg border-[2px] p-2'>
            <input type="number" className='border-none outline-none w-[85%] appearance-none'/>
            <div>CHF</div>
        </div>
      </div>
      <CheckBoX label={"Keine Lohnangabe im Jobinserat anzeigen."}/>
      <Card icon={faCircleExclamation} color={"#FFFCE6"} height={50} content={"Sie müssen Gehaltsangaben machen und sich dafür entscheiden, diese in Ihrer Stellenanzeige anzuzeigen, wenn Sie kostenlos veröffentlichen möchten."}/>
      <div className='flex items-center'>
        <FontAwesomeIcon icon={faCircleExclamation}/>
        <div className='flex text-sm'>
            <p>Benötigen Sie Hilfe um das ideale Gehalt zu definieren?</p>
            <p className='underline text-[blue] cursor-pointer'> Sehen Sie, wie unser Partner Kienbaum, Köln Ihnen helfen kann</p> 
          </div>

      </div>
    </div>
  ) 
}

export default SalaryDiscription


const data0=[
    {value:"Jahr",label:"Jahr"},
    {value:"Monat",label:"Monat"},
    {value:"Woche",label:"Woche"},
    {value:"Stunde",label:"Stunde"},
]


const data1=[
    {value:"Lohnband",label:"Lohnband"},
    {value:"Mindestlohn",label:"Mindestlohn"},
    {value:"Exakte Lohnsumme",label:"Exakte Lohnsumme"},

]


const Card=({height,color,content ,icon,position})=>{
  return(
    <div className={`flex w-full bg-[${color}] p-[${height}px] p-2 rounded-sm ${position} gap-2`}>
      <FontAwesomeIcon icon={icon} className='text-yellow pt-1'/>
      <p className='text-sm font-semibold'>{content}</p>
    </div>
  )
}
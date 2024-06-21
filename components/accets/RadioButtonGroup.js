import React from "react";
import {RadioGroup, Radio} from "@nextui-org/react";

export default function RadioButtonGroup({data,label}) {
  return (
    <RadioGroup className="flex flex-wrap"
      orientation="horizontal">
      <p className="font-semibold text-lg">{label}</p>
      { 
        data.map((data)=><Radio key={data.value} value={data.value}><p className="text-sm font-light">{data.label}</p></Radio>)

      }
    </RadioGroup>
  );
}

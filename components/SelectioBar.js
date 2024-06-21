import React from "react";
import { Select, SelectItem } from "@nextui-org/react";


export default function SelectBar({ data, placeholder,type,placement ,label}) {
  return (
    <Select
    size="sm"
    radius="none"
    selectionMode={type}
    placeholder={placeholder}
    label={label}
    labelPlacement={placement}

  
      className="w-full"
      style={{ backgroundColor: "white", color:'black' , padding: "5px",height: "40px", border:"none" ,outline:"none" }}
    >
      {data.map((data) => (
        <SelectItem
          className=" p-2 hover:bg-gray-500"
          key={data.value}
          value={data.value}

        >
          {data.label}
        </SelectItem>
      ))}
    </Select>
  );
}

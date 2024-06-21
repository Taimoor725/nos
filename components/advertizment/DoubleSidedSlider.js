import React from "react";
import {Slider} from "@nextui-org/react";

export default function DoubleSidedSlider() {
  return (
    <Slider
      size="md"
      label="Work Load (%)" 
    //   name="Work Load"
      step={1} 
      minValue={10} 
      maxValue={100} 
      defaultValue={[10, 100]} 
    //   formatOptions={{style: "currency", currency: "%"}}
        showTooltip="true"
      className="max-w-md"
    />
  );
}

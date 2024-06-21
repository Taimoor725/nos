import React from "react";
import {Checkbox} from "@nextui-org/react";

export default function CheckBoX({label}) {
  return (
    <Checkbox defaultSelected><p className="font-semibold">{label}</p></Checkbox>
  );
}

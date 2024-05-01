"use client"

import { NextUIProvider, Spinner } from "@nextui-org/react";
import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
        <img src="/Home/whiteLogo.png" alt="loading..." className="w-[60%] h-[50%]"/>
    </div>
  );
};

export default Loading;

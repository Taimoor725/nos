"use client"

import { NextUIProvider, Spinner } from "@nextui-org/react";
import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center relative">
  <div className="w-[10rem] h-[10rem] border-black border-[4px] rounded-full border-t-white animate-spin"></div>
  <img src="/Home/whiteLogo.png" alt="loading..." className="w-[10%] h-[10%] absolute inset-0 m-auto" />
</div>

  );
};

export default Loading;

"use client"

import { NextUIProvider, Spinner } from "@nextui-org/react";
import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <NextUIProvider>
        <Spinner />
      </NextUIProvider>
    </div>
  );
};

export default Loading;

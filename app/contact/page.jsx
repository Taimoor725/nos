import React from "react";
import ParticlesScene from "@/components/contact/particles";
import Logo from "@/components/Home/Logo";
import { Navbar } from "@/components/Home/NavbarMenu";
import Footer from "@/components/footer";
import { Button, Input } from "@nextui-org/react";

const Page = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <Logo />
      <Navbar />
      <ParticlesScene />

      <div className="flex w-screen absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 items-center justify-around">
        <p className="text-5xl font-bold bg-gradient-to-r from-gray-200 to-gray-500 inline-block text-transparent bg-clip-text drop-shadow-md mb-4">
          Let's work <br/> together
        </p>
        <div className="z-30  flex flex-col gap-8 text-white items-center justify-center ">
          <Input placeholder="Name" className="" />
          <Input placeholder="Email" className="" />
          <Button>subscribe</Button>
        </div>
      </div>
      <div className=""></div>
      <Footer />
    </div>
  );
};

export default Page;

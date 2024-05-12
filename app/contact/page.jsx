import React from "react";
import { Navbar } from "@/components/Home/NavbarMenu";
import Footer from "@/components/footer";
import ContactUs from "@/components/contact/ContactUs"
import ContactForm from "@/components/contact/ContactForm"
import MapComponent from "@/components/contact/Map"

const Page = () => {
  return (
    <div className="w-screen h-auto bg-[#1F1B2D] flex flex-col">
      <Navbar />
      <div className="flex w-full items-center gap-10 pt-52 pb-20">
          <ContactUs/>
          <ContactForm/>
      </div>

    </div>
  );
};

export default Page;

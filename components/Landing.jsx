"use client";
// evry thing is update nowpnpm install --no-frozen-lockfile

import React from "react";
import { FloatingNav } from "./Home/Navbar";
import { WavyBackground } from "./Home/WavyBackground";
import Logo from "./Home/Logo";
import Navbar from "./Home/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import { ParallaxScroll } from "./Home/parallex-scroll";
import { StickyScroll } from "./Home/sticky-scroll-reveal";
import { BackgroundBeams } from "./Home/background-beams";
import { HeroParallax } from "./Home/hero-parallex";
import { TeamSlider } from "./Home/infinity-scroll";
import { TextGenerateEffect } from "./Home/text-reveal";
import Footer from "./footer";
import Loading from "@/app/loading"
import { Suspense } from "react";
import ImagePreenter from "@/components/Home/ImagePreenter"
import MainButton from "@/components/accets/MainButton"
import Partners from "./accets/Partners";

const Landing = () => {

  const content = [
    {
      title: "Trust",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    },
    {

      title: "Best Service",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    },
    {

      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    },
  ];
  const images = [
    "/Home/traning.jpg",
    "/Home/esports.jpeg",
    "/Home/dark.jpg",
    "/Home/1 (2).jpeg",
    "/Home/endurance.jpg",
    "/Home/1 (3).jpeg",
    "/Home/formula_1.jpg",
    "/Home/1 (4).jpeg",
    "/Home/dark_2.jpg",
    "/Home/traning.jpg",
  ];
  const products = [
    {
      title: "Digital Dynamo",
      link: "https://digitaldynamo.com",
      thumbnail: images[0],
      description:
        "Lorem ipsum dolor sit amet,, reiciendis? Id consequuntur, reprehenderit doloribus fac."
    },
    {
      title: "Marketing Maven",
      link: "https://marketingmaven.io",
      thumbnail: images[1],
      description:
        "Lorem ipsum dolor sit amet,, reiciendis? Id consequuntur, reprehenderit doloribus fac."


    },
    {
      title: "Brand Brilliance",
      link: "https://brandbrilliance.co",
      thumbnail: images[2],
      description:
        "Lorem ipsum dolor sit amet,, reiciendis? Id consequuntur, reprehenderit doloribus fac."

    },
    {
      title: "Creative Catalyst",
      link: "https://creativecatalyst.biz",
      thumbnail: images[3],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum error reiciendis aliquid ut non eaque voluptates? Suscipit, reiciendis? Id consequuntur, reprehenderit doloribus facere ipsa possimus ut quod obcaecati itaque optio."

    },
    {
      title: "Strategy Summit",
      link: "https://strategysummit.com",
      thumbnail: images[4],
      description:
        "Lorem ipsum dolor sit amet,, reiciendis? Id consequuntur, reprehenderit doloribus fac."

    },
    {
      title: "Content Crafters",
      link: "https://contentcrafters.io",
      thumbnail: images[5],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum error reiciendis aliquid ut non eaque voluptates? Suscipit, reiciendis? Id consequuntur, reprehenderit doloribus facere ipsa possimus ut quod obcaecati itaque optio."

    },
    {
      title: "Social Sphere",
      link: "https://socialsphere.net",
      thumbnail: images[6],
      description:
        "Lorem ipsum dolor sit amet,, reiciendis? Id consequuntur, reprehenderit doloribus fac."

    },
    {
      title: "SEO Synergy",
      link: "https://seosynergy.org",
      thumbnail: images[7],
      description:
        "Lorem ipsum dolor sit amet,, reiciendis? Id consequuntur, reprehenderit doloribus fac."

    },
    {
      title: "Analytics Ace",
      link: "https://analyticsace.com",
      thumbnail: images[8],
      description:
        "Lorem ipsum dolor sit amet,, reiciendis? Id consequuntur, reprehenderit doloribus fac."


    },
    {
      title: "Conversion Connoisseur",
      link: "https://conversionconnoisseur.io",
      thumbnail: images[9],
      description:
        "Lorem ipsum dolor sit amet,, reiciendis? Id consequuntur, reprehenderit doloribus fac."

    },
    {
      title: "Email Excellence",
      link: "https://emailexcellence.biz",
      thumbnail: images[10],
      description:
        "Lorem ipsum dolor sit amet,, reiciendis? Id consequuntur, reprehenderit doloribus fac."

    },
  ];





  return (
    <NextUIProvider>
      <section className="w-full overflow-x-hidden">
        <div className="w-screen h-screen relative overflow-hidden">
          <video
            src="/videos/intro.mp4"
            className="w-full h-full object-cover z-0 overflow-hidden"
            autoPlay
            muted
            loop

          />
          <div className="flex flex-col items-center text-center w-[40%] gap-4 text-white h-[20rem] absolute z-10 bottom-10 left-[30%] translate-x-[-50%] justify-center" data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <p className="text-lg font-bold" data-aos="fade-up" data-aos-delay="50">Sports Cars</p>
            <p className="text-4xl font-extrabold" data-aos="fade-up" data-aos-delay="100">STARTEN SIE DEN MOTOR</p>
            <div className="flex text-xs font-semibold items-center" data-aos="fade-up" data-aos-delay="150"><p>ENTDECKEN SIE DIE FERRARI BAUREIHE</p>
              <MainButton />
            </div>
          </div>
        </div>
        <StickyScroll content={content} />
        <HeroParallax products={products} />
        <ImagePreenter />
        <Partners />
      </section>
    </NextUIProvider>
  );
};

export default Landing;






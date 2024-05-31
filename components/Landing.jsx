"use client";
// evry thing is update nowpnpm install --no-frozen-lockfile

import React from "react";
import { FloatingNav } from "./Home/Navbar";
import { WavyBackground } from "./Home/WavyBackground";
import Logo from "./Home/Logo";
import  Navbar  from "./Home/Navbar";
import { Button, NextUIProvider, Slider } from "@nextui-org/react";
import { ParallaxScroll } from "./Home/parallex-scroll";
import { StickyScroll } from "./Home/sticky-scroll-reveal";
import { BackgroundBeams } from "./Home/background-beams";
import { HeroParallax } from "./Home/hero-parallex";
import { TeamSlider } from "./Home/infinity-scroll";
import { TextGenerateEffect } from "./Home/text-reveal";
import Footer from "./footer";
import Loading from "@/app/loading"
import { Suspense } from "react";

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
  const team = [
    {
      name: "Jack",
      image: "/team/team_3.webp",
    },
    {
      name: "Jason",
      image: "/team/team_2.webp",
    },
    {
      name: "Robert",
      image: "/team/team_3.webp",
    },
    {
      name: "Jackson",
      image: "/team/team_2.webp",
    },
    {
      name: "Michael",
      image: "/team/team_3.webp",
    },
    {
      name: "Emily",
      image: "/team/team_2.webp",
    },
    {
      name: "Olivia",
      image: "/team/team_3.webp",
    },
    {
      name: "William",
      image: "/team/team_2.webp",
    },
    {
      name: "Sophia",
      image: "/team/team_3.webp",
    },
    {
      name: "John",
      image: "/team/team_2.webp",
    },
    {
      name: "Emma",
      image: "/team/team_3.webp",
    },
    {
      name: "Liam",
      image: "/team/team_2.webp",
    },
  ];
  
  


  return (
    <NextUIProvider>
    <section className="overflow-x-hidden w-full">
      <Suspense fallback={<p>loading.......</p>}>
      <Navbar />
      <Logo />
      {/* <OptionsComponent/> */}
      <div className="w-screen h-screen relative">
        <div className="absolute w-full h-full z-10 flex flex-col items-center justify-center text-white gap-8">
          <div className="text-4xl lg:text-8xl font-bold font-next bg-gradient-to-r from-gray-200 to-gray-500 inline-block text-transparent bg-clip-text drop-shadow-md">
            {/* <img src="logo.png" alt="..." className="absolute"/> */}
            <div className="flex gap-9"><p>A</p>
            <p>C</p>
            <p>N</p>
            </div>
            <p className="text-xl">AUTOCENTER NIEDERBIPP AG</p>
          </div>
          <p className="w-1/2 text-center hidden md:text-md lg:flex text-gray-100 capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatem exercitationem et, quod corporis hic vitae corrupti quia obcaecati error molestiae perferendis fuga earum iure nesciunt explicabo doloremque expedita sunt.
          </p>
          <NextUIProvider>
            <div className="flex gap-x-8 z-10">
              <Button
                color="primary"
                className="bg-gradient-to-tr from-gray-300 to-gray-500 shadow-lg"
              >
                nos expertises
              </Button>
              <Button>nous découvrir</Button>
            </div>
          </NextUIProvider>
        </div>
        <video
          src="/videos/intro.mp4"
          className="w-full h-full object-cover absolute"
          autoPlay
          muted
          loop
    
        />
      </div>
      <StickyScroll content={content} />
      {/* <ParallaxScroll images={images} className="h-screen"/> */}
      <HeroParallax products={products} />
      <div className="flex flex-col bg-black">
        <div className="p-10 w-2/3">
          <TextGenerateEffect
            words="
Rencontrez nos experts, une équipe diversifiée de professionnels passionnés par l'innovation. Chacun apporte une expertise unique pour répondre aux besoins variés de nos clients, assurant ainsi une approche holistique de la communication digitale. 
          "
          />
        </div>
        <TeamSlider items={team} />
      </div>

      <div className="h-screen w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-600  text-center font-sans font-bold">
            Contactez-nous
          </h1>

          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Besoin d'informations ou de discuter de vos projets en marketing
            digital ? Contactez-nous ! Notre équipe est là pour vous aider à
            trouver des solutions adaptées à vos besoins. Remplissez le
            formulaire ou appelez-nous dès maintenant.
          </p>
          <input
            type="text"
            placeholder="hi@manuarora.in"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 px-4 bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
        <BackgroundBeams />
      </div>
      <Footer />
      </Suspense>
    </section>
    </NextUIProvider>
  );
};

export default Landing;

"use client";
import React from "react";
import { FloatingNav } from "./Home/Navbar";
import { WavyBackground } from "./Home/WavyBackground";
import Logo from "./Home/Logo";
import { Navbar } from "./Home/NavbarMenu";
import { Button, NextUIProvider } from "@nextui-org/react";
import { ParallaxScroll } from "./Home/parallex-scroll";
import { StickyScroll } from "./Home/sticky-scroll-reveal";
import { BackgroundBeams } from "./Home/background-beams";
import { HeroParallax } from "./Home/hero-parallex";
import { TeamSlider } from "./Home/infinity-scroll";
import { TextGenerateEffect } from "./Home/text-reveal";
import Footer from "./footer";
import { EvervaultCard } from "./Home/evervault-card";
import Loading from "@/app/loading"
import { Suspense } from "react";

const Landing = () => {
  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
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
    "/Home/formula_1.jpg",
    "/Home/traning.jpg",
    "/Home/formula_1.jpg",
    "/Home/traning.jpg",
    "/Home/formula_1.jpg",
    "/Home/traning.jpg",
    "/Home/formula_1.jpg",
    "/Home/traning.jpg",
    "/Home/formula_1.jpg",
  ];
  const products = [
    {
      title: "Digital Dynamo",
      link: "https://digitaldynamo.com",
      thumbnail: images[0],
    },
    {
      title: "Marketing Maven",
      link: "https://marketingmaven.io",
      thumbnail: images[1],
    },
    {
      title: "Brand Brilliance",
      link: "https://brandbrilliance.co",
      thumbnail: images[2],
    },
    {
      title: "Creative Catalyst",
      link: "https://creativecatalyst.biz",
      thumbnail: images[3],
    },
    {
      title: "Strategy Summit",
      link: "https://strategysummit.com",
      thumbnail: images[4],
    },
    {
      title: "Content Crafters",
      link: "https://contentcrafters.io",
      thumbnail: images[5],
    },
    {
      title: "Social Sphere",
      link: "https://socialsphere.net",
      thumbnail: images[6],
    },
    {
      title: "SEO Synergy",
      link: "https://seosynergy.org",
      thumbnail: images[7],
    },
    {
      title: "Analytics Ace",
      link: "https://analyticsace.com",
      thumbnail: images[8],
    },
    {
      title: "Conversion Connoisseur",
      link: "https://conversionconnoisseur.io",
      thumbnail: images[9],
    },
    {
      title: "Email Excellence",
      link: "https://emailexcellence.biz",
      thumbnail: images[10],
    },
  ];
  const team = [
    {
      name: "ABDULLAH",
      image: "/team/team_3.webp",
    },

    {
      name: "ABDULLAH",
      image: "/team/team_2.webp",
    },
    {
      name: "ABDULLAH",
      image: "/team/team_3.webp",
    },
    {
      name: "ABDULLAH",
      image: "/team/team_2.webp",
    },
    {
      name: "ABDULLAH",
      image: "/team/team_3.webp",
    },

    {
      name: "ABDULLAH",
      image: "/team/team_2.webp",
    },
    {
      name: "ABDULLAH",
      image: "/team/team_3.webp",
    },
    {
      name: "ABDULLAH",
      image: "/team/team_2.webp",
    },
    {
      name: "ABDULLAH",
      image: "/team/team_3.webp",
    },

    {
      name: "ABDULLAH",
      image: "/team/team_2.webp",
    },
    {
      name: "ABDULLAH",
      image: "/team/team_3.webp",
    },
    {
      name: "ABDULLAH",
      image: "/team/team_2.webp",
    },
  ];
  return (
    <>
      <Suspense fallback={Loading}>
      <Navbar />
      <Logo />
      <div className="w-screen h-screen relative">
        <div className="absolute w-full h-full z-10 flex flex-col items-center justify-center text-white gap-8">
          <h1 className="text-4xl lg:text-8xl font-bold font-next bg-gradient-to-r from-gray-200 to-gray-500 inline-block text-transparent bg-clip-text drop-shadow-md">
            FERRARI
          </h1>
          <p className="w-1/2 text-center hidden md:text-md lg:flex text-gray-100 capitalize">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo earum sed ex quis, consequatur quidem sit tenetur ea itaque aliquam inventore iste sint pariatur. Iure at quasi eius ipsam corporis ab voluptatum asperiores architecto.
          </p>
          <NextUIProvider>
            <div className="flex gap-x-8 z-10">
              <Button
                color="primary"
                className="bg-gradient-to-tr from-gray-300 to-gray-500 text-black shadow-lg"
              >
                nos expertises
              </Button>
              <Button>nous découvrir</Button>
            </div>
          </NextUIProvider>
        </div>
        <video
          src="/videos/intro.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
    
        />
      </div>
      {/* <StickyScroll content={content} /> */}
      {/* <div className="bg-black h-screen"><ParallaxScroll images={images} className="h-screen"/></div> */}
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
      {/* <Footer /> */}
      </Suspense>
    </>
  );
};

export default Landing;

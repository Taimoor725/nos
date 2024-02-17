'use client'
import React from "react";
import { FloatingNav } from "./Navbar";
import { WavyBackground } from "./WavyBackground";
import { SparklesCore } from "./Sparkles";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { BackgroundBeams } from "./background-beams";
import { GoogleGeminiEffect } from "./gemini";
import { useScroll, useTransform } from "framer-motion";

const Landing = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
 
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
 
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
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <FloatingNav navItems={navItems} />
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          NOS EXPERTISE
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          BE-TAYE, votre agence en marketing digital, accompagne les entreprises
          de toutes tailles et de tous secteurs grâce à son expertise en
          acquisition et création. Nos consultants web passionnés conçoivent et
          mettent en œuvre votre stratégie digitale avec pour objectif la
          performance et la rentabilité. Nous vous accompagnons dans la
          réalisation de vos objectifs de visibilité et d'expansion à travers
          des stratégies numériques innovantes et sur mesure.
        </p>
      </WavyBackground>

      <div className="w-full absolute inset-0 h-screen z-10 top-0 left-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="">
    <div
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
            title="NOS EXPERTISE"
            description="made by high-haseeb"
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
      </div>

      <div className="w-screen h-auto relative">
        <div className="absolute bottom-1/2 right-1/2 translate-x-[50%] translate-y-[50%] text-white text-4xl font-bold z-10">made by haseeb</div>
      <video src="/bg.mp4" className="w-screen h-full" autoPlay muted loop />
      </div>
      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Join the waitlist
          </h1>
          <p></p>

          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Welcome to NOS EXPERTISE. We're currently in private beta. Sign up to join the waitlist and be the first to know when we launch.
          </p>
          <input
            type="text"
            placeholder="hi@manuarora.in"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
        <BackgroundBeams />
      </div>

    </>
  );
};

export default Landing;

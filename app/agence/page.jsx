import Logo from "@/components/Home/Logo";
import { Navbar } from "@/components/Home/NavbarMenu";
import React from "react";
import SvgMask from "@/components/Agence/svg-mask";
import { Meteors } from "@/components/Agence/meteors";
import { InfiniteMovingCards } from "@/components/Agence/Slider";
import { TextGenerateEffect } from "@/components/Home/text-reveal";
import { BackgroundGradient } from "@/components/Agence/background-gradient";
import Footer from "@/components/footer";
import { TeamSlider } from "@/components/Home/infinity-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAirbnb,
  faAmazon,
  faFacebook,
  faGithub,
  faGoogle,
  faInstagram,
  faPaypal,
  faPinterest,
  faPlaystation,
  faSoundcloud,
  faSpotify,
  faThreads,
  faTiktok,
  faYahoo,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { TypewriterEffectSmooth } from "@/components/Agence/typewriter";
import Link from "next/link";

const Page = () => {
  const images = [
    "https://images.unsplash.com/photo-1606164510427-0dff1bcb27d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1503198515498-d0bd9ed16902?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrJTIwJTI2JTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1635248677595-17a15f7a1972?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwJTI2JTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1496672254107-b07a26403885?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwJTI2JTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1440899046124-38241f9fe54d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwJTI2JTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1538898780761-268f71f67675?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwJTI2JTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1575223066808-141f62f353d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJsYWNrJTIwJTI2JTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1571844437758-9e7bb9a5fdf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJsYWNrJTIwJTI2JTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1500238969924-795042f75b7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJsYWNrJTIwJTI2JTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1571844437758-9e7bb9a5fdf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJsYWNrJTIwJTI2JTIwd2hpdGV8ZW58MHx8MHx8fDA%3D",
  ];
  const items = [
    {
      name: "Client 1",
      image: images[0],
    },

    {
      name: "Client 2",
      image: images[1],
    },
    {
      name: "Client 3",
      image: images[2],
    },
    {
      name: "Client 4",
      image: images[3],
    },
    {
      name: "Client 5",
      image: images[4],
    },
    {
      name: "Client 7",
      image: images[0],
    },
    {
      name: "Client 6",
      image: images[7],
    },
  ];

  const team = [
    {
      name: "Haseeb",
      image: "/team/team_3.webp",
    },

    {
      name: "Haseeb",
      image: "/team/team_2.webp",
    },
    {
      name: "Haseeb",
      image: "/team/team_3.webp",
    },
    {
      name: "Haseeb",
      image: "/team/team_2.webp",
    },
    {
      name: "Haseeb",
      image: "/team/team_3.webp",
    },

    {
      name: "Haseeb",
      image: "/team/team_2.webp",
    },
    {
      name: "Haseeb",
      image: "/team/team_3.webp",
    },
    {
      name: "Haseeb",
      image: "/team/team_2.webp",
    },
    {
      name: "Haseeb",
      image: "/team/team_3.webp",
    },

    {
      name: "Haseeb",
      image: "/team/team_2.webp",
    },
    {
      name: "Haseeb",
      image: "/team/team_3.webp",
    },
    {
      name: "Haseeb",
      image: "/team/team_2.webp",
    },
  ];
  return (
    <div className="bg-black">
      <div className="bg-black w-screen h-screen">
        <Logo />
        <Navbar />
        <SvgMask />
        <Meteors number={50} className="z-50" />
      </div>

      <div className="flex flex-col gap-8 bg-black py-10">
        <TextGenerateEffect
          words="Notre agence tire son inspiration de la vision novatrice de Charles Darwin, et nous nous engageons à guider nos clients dans la transformation digitale de leur communication d'entreprise. Fondée avec passion, l'Agence Darwin est le partenaire idéal pour redéfinir et dynamiser votre présence digitale. Notre équipe dévouée allie créativité et expertise technique pour propulser votre communication vers de nouveaux sommets"
          className="bg-black w-4/5 p-10"
        />
        <InfiniteMovingCards items={items} direction="right" />
      </div>
      <div className="w-screen h-screen flex items-center justify-around bg-black">
        <div className="w-1/3 h-80">
          <BackgroundGradient className="rounded-3xl h-80 bg-black p-10 text-center flex flex-col items-center justify-center">
            <p className="text-white text-xl">
              Chez Agence Darwin, nous croyons en la collaboration transparente,
              l'adaptabilité et la recherche constante de l'excellence. Notre
              approche personnalisée garantit que chaque client bénéficie d'une
              solution sur mesure pour évoluer avec succès dans le monde
              numérique en constante évolution
            </p>
          </BackgroundGradient>
        </div>

        <div className="w-1/3 h-80">
          <BackgroundGradient className="rounded-3xl h-80 bg-black p-10 text-center flex flex-col items-center justify-center">
            <p className="text-white text-xl">
              Votre réussite est notre priorité. Nous travaillons main dans la
              main avec nos clients, comprenant leurs besoins uniques pour créer
              des solutions qui vont au-delà des attentes et stimulent une
              véritable évolution dans leur communication
            </p>
          </BackgroundGradient>
        </div>
      </div>

      <div className="flex flex-col bg-black text-white gap-8">
        <div className="font-bold text-5xl ml-10">
          une équipe royale pour faire le point
        </div>
        <TeamSlider items={team} />
      </div>
      <div className="my-40 flex flex-col gap-20">
      <div className="text-5xl text-white font-bold ml-10">
          vous êtes en
          <br />
          bonne compagnie.{" "}
        </div>
        <div className="grid grid-cols-6 grid-rows-3 text-sm gap-8 bg-black text-white items-center justify-items-center ">
          <FontAwesomeIcon icon={faFacebook} className="w-20 h-20" />
          <FontAwesomeIcon icon={faInstagram} className="w-20 h-20" />
          <FontAwesomeIcon icon={faPaypal} className="w-20 h-20" />
          <FontAwesomeIcon icon={faAirbnb} className="w-20 h-20" />
          <FontAwesomeIcon icon={faSpotify} className="w-20 h-20" />
          <FontAwesomeIcon icon={faYoutube} className="w-20 h-20" />

          <FontAwesomeIcon icon={faThreads} className="w-20 h-20" />
          <FontAwesomeIcon icon={faGoogle} className="w-20 h-20" />
          <FontAwesomeIcon icon={faYahoo} className="w-20 h-20" />
          <FontAwesomeIcon icon={faAmazon} className="w-20 h-20" />
          <FontAwesomeIcon icon={faPlaystation} className="w-20 h-20" />
          <FontAwesomeIcon icon={faPinterest} className="w-20 h-20" />

          <FontAwesomeIcon icon={faSoundcloud} className="w-20 h-20" />
          <FontAwesomeIcon icon={faInstagram} className="w-20 h-20" />
          <FontAwesomeIcon icon={faSpotify} className="w-20 h-20" />
          <FontAwesomeIcon icon={faGithub} className="w-20 h-20" />
          <FontAwesomeIcon icon={faTiktok} className="w-20 h-20" />
          <FontAwesomeIcon icon={faYoutube} className="w-20 h-20" />
        </div>
      </div>
      <TypewriterEffectSmoothDemo/>
      <Footer />
    </div>
  );
};

const TypewriterEffectSmoothDemo = () => {
  const words = [
    {
      text: "prêt",
    },
    {
      text: "à",
    },
    {
      text: "faire",
    },
    {
      text: "le",
    },
    {
      text: "point ?",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href={'/contact'}>
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Contact Us
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Page;


"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
// import { Image } from "@nextui-org/react";

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
  }[];
}) => {
  const images = [
    "Home/traning.jpg",
    "Home/1st (1).jpeg",
    "Home/new (3).jpg",
    "Home/new (4).jpg",
    "Home/esports.jpeg",
    "Home/1 (3).jpeg",
    "Home/endurance.jpg",
    "Home/1 (4).jpeg",
    "Home/1 (5).jpeg",
  ];
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  const backgroundColors = ["var(--black)", "var(--gray-900)", "var(--slate-800)","var(--slate-700)","var(--black)"];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-screen overflow-y-auto flex justify-center relative space-x-10  p-10 scrollba"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className=" text-slate-300 max-w-sm mt-10 flex flex-col gap-2"
              >
                {item.description}
                <div><Button/></div>
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div className="hidden lg:block h-full w-2/3 rounded-lg bg-white sticky top-10 overflow-hidden hover:translate-y-[-50] ease-linear">
        <img src={images[activeCard]} className="object-cover rounded-lg w-full h-full" />
      </motion.div>
    </motion.div>
  );
};




const Button = () => {
  return (
    <a href="#" className="fancy" role="button">
      <span className="top-key"></span>
      <span className="text">Read More</span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>

      <style jsx>{`
        .fancy {
          background-color: transparent;
          border: 2px solid white; /* Changed border color to white */
          border-radius: 0;
          box-sizing: border-box;
          color: black; /* Changed text color to black */
          cursor: pointer;
          display: inline-block;
          float: right;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin: 0;
          outline: none;
          overflow: visible;
          padding: 1.25em 2em;
          position: relative;
          text-align: center;
          text-decoration: none;
          text-transform: none;
          transition: all 0.3s ease-in-out;
          user-select: none;
          font-size: 13px;
        }

        .fancy::before {
          content: " ";
          width: 1.5625rem;
          height: 2px;
          background: white; /* Changed background color to white */
          top: 50%;
          left: 1.5em;
          position: absolute;
          transform: translateY(-50%);
          transform-origin: center;
          transition: background 0.3s linear, width 0.3s linear;
        }

        .fancy .text {
          font-size: 1.125em;
          line-height: 1.33333em;
          padding-left: 2em;
          display: block;
          text-align: left;
          transition: all 0.3s ease-in-out;
          text-transform: uppercase;
          text-decoration: none;
          color: white; /* Changed text color to white */
        }

        .fancy .top-key {
          height: 2px;
          width: 1.5625rem;
          top: -2px;
          left: 0.625rem;
          position: absolute;
          background: black; /* Changed background color to black */
          transition: width 0.5s ease-out, left 0.3s ease-out;
        }

        .fancy .bottom-key-1 {
          height: 2px;
          width: 1.5625rem;
          right: 1.875rem;
          bottom: -2px;
          position: absolute;
          background: black; /* Changed background color to black */
          transition: width 0.5s ease-out, right 0.3s ease-out;
        }

        .fancy .bottom-key-2 {
          height: 2px;
          width: 0.625rem;
          right: 0.625rem;
          bottom: -2px;
          position: absolute;
          background: black; /* Changed background color to black */
          transition: width 0.5s ease-out, right 0.3s ease-out;
        }

        .fancy:hover {
          color: black; /* Changed hover text color to black */
          background: white; /* Changed hover background color to white */
        }

        .fancy:hover::before {
          width: 0.9375rem;
          background: black; /* Changed hover background color to black */
        }

        .fancy:hover .text {
          color: black; /* Changed hover text color to black */
          padding-left: 1.5em;
        }

        .fancy:hover .top-key {
          left: -2px;
          width: 0px;
        }

        .fancy:hover .bottom-key-1,
        .fancy:hover .bottom-key-2 {
          right: 0;
          width: 0;
        }
      `}</style>
    </a>
  );
};


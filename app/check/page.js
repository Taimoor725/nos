"use client"
import { NextUIProvider, Spinner } from "@nextui-org/react";
import React from "react";

const page = () => {
    return (
        <div className="wrapper bg-black w-screen h-screen">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
            <style jsx>{
                `.wrapper {
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    background-color: #000;
                    z-index: 9999; /* Ensure it's above other content */
                }

                .circle {
                    width: 40px; /* Adjust the size of the balls */
                    height: 40px; /* Adjust the size of the balls */
                    position: absolute;
                    border-radius: 50%;
                    background-color: #fff;
                    transform-origin: 50%;
                    animation: circle7124 .5s alternate infinite ease;
                } 
                  @keyframes circle7124 {
                    0% {
                      top: 60px;
                      height: 5px;
                      border-radius: 50px 50px 25px 25px;
                      transform: scaleX(1.7);
                    }
                  
                    40% {
                      height: 20px;
                      border-radius: 50%;
                      transform: scaleX(1);
                    }
                  
                    100% {
                      top: 0%;
                    }
                  }
                  
                  .circle:nth-child(2) {
                    left: 45%;
                    animation-delay: .2s;
                  }
                  
                  .circle:nth-child(3) {
                    left: auto;
                    right: 15%;
                    animation-delay: .3s;
                  }
                  
                  .shadow {
                    width: 20px;
                    height: 4px;
                    border-radius: 50%;
                    background-color: rgba(0,0,0,0.9);
                    position: absolute;
                    top: 62px;
                    transform-origin: 50%;
                    z-index: -1;
                    left: 15%;
                    filter: blur(1px);
                    animation: shadow046 .5s alternate infinite ease;
                  }
                  
                  @keyframes shadow046 {
                    0% {
                      transform: scaleX(1.5);
                    }
                  
                    40% {
                      transform: scaleX(1);
                      opacity: .7;
                    }
                  
                    100% {
                      transform: scaleX(.2);
                      opacity: .4;
                    }
                  }
                  
                  .shadow:nth-child(4) {
                    left: 45%;
                    animation-delay: .2s
                  }
                  
                  .shadow:nth-child(5) {
                    left: auto;
                    right: 15%;
                    animation-delay: .3s;
                  }
                  `
            }
    </style>
</div>

    );
};

export default page;

"use client"
import React from 'react'
import { useEffect, useState } from 'react'

export default function Intro() {
    return (
        <div className='w-screen h-[100vh] flex flex-col items-center overflew-x-hidden gap-3'>
            <h1 className='text-5xl text-white pt-[10%] font-extrabold'>We are new and growing fast</h1>
            <div className='flex w-full gap-3 justify-center'>
                <CardComponent data={introdata[0]} />
                <CardComponent data={introdata[1]} />
                <CardComponent data={introdata[2]} />
            </div>
        </div>
    )
}



const introdata = [
    {
        icon: "/About/car.svg",
        titel: "1 MLN Cars",
        discription: "Fringilla vivamus arcu faucibus malesuada. Dui aenean suspendisse a aliquet id gravida ut. Lorem lacinia sed mauris erat at nisl.",
    },
    {
        icon: "/About/building.svg",
        titel: "5 Brachies ",
        discription: "Porttitor bibendum pharetra volutpat est. Vitae tortor magna gravida non lacus. Arcu auctor malesuada dui congue",
    },
    {
        icon: "/About/flag.svg",
        titel: "2 Countries",
        discription: "Duis tortor, vel nisi, leo vulputate sed quis. Ultrices arcu, amet aliquam id massa egestas ut. Dui, sed risus cursus magna dolor.",
    }
];


const CardComponent = ({ data }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [iconColor, setIconColor] = useState(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsPlaying(true);
        }, 1000); // Delay animation start by 1 second
        return () => clearTimeout(timeout);
    }, []);

    const iconHandle = () => {
        setIconColor("bg-[#1F1B2D]");
    }

    const iconHandle_2 = () => {
        setIconColor(null);
    }

    return (
        <div className={`e-card ${isPlaying ? 'playing' : ''} relative w-96 mx-4`} onMouseEnter={iconHandle} onMouseLeave={iconHandle_2}>
            <div className="image"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="infotop text-2xl font-extrabold">
                <div className={`w-16 h-16 rounded-xl flex justify-center items-center absolute left-1/2 translate-x-[-50%] bottom-[80%] ${iconColor} p-1`}><img src={data.icon} alt="loading" className='w-full h-full' /></div>
                <br />
                {data.titel}
                <br />
                <div className="name text-xs font-bold">{data.discription}</div>
            </div>
            <style jsx>{`
                .e-card {
                    background: transparent;
                    box-shadow: 0px 8px 28px -9px rgba(0,0,0,0.45);
                    position: relative;
                    height: 400px;
                    border-radius: 16px;
                    overflow: hidden;
                }

                .wave {
                    position: absolute;
                    width: 540px;
                    height: 700px;
                    opacity: 0.6;
                    left: 0;
                    top: 0;
                    margin-left: -50%;
                    margin-top: -70%;
                    background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
                }

                .infotop {
                    text-align: center;
                    font-size: 20px;
                    position: absolute;
                    top: 5.6em;
                    left: 0;
                    right: 0;
                    color: rgb(255, 255, 255);
                    font-weight: 600;
                }

                .name {
                    font-size: 14px;
                    font-weight: 100;
                    position: relative;
                    top: 1em;
                    text-transform: lowercase;
                }

                .wave:nth-child(2),
                .wave:nth-child(3) {
                    top: 210px;
                }

                .playing .wave {
                    border-radius: 40%;
                    animation: wave 3000ms infinite linear;
                }

                .wave {
                    border-radius: 40%;
                    animation: wave 55s infinite linear;
                }

                .playing .wave:nth-child(2) {
                    animation-duration: 4000ms;
                }

                .wave:nth-child(2) {
                    animation-duration: 50s;
                }

                .playing .wave:nth-child(3) {
                    animation-duration: 5000ms;
                }

                .wave:nth-child(3) {
                    animation-duration: 45s;
                }

                @keyframes wave {
                    0% {
                        transform: rotate(0deg);
                    }

                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
};

"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Footer from '../footer';


export default function Intro() {

    const faqData = [
        { question: 'What is Lorem Ipsum?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { question: 'Why do we use it?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
        { question: 'Where does it come from?', answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.' },
        { question: 'How much does it cost to sell a car on Finder?', answer: 'The cost varies depending on the package you choose. Visit our pricing page for more details.' },
        { question: 'How do I take the best pictures of my car?', answer: 'Follow our guidelines on our website for tips on taking high-quality photos of your vehicle.' },
        { question: 'Why do we use it?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },

    ];
    return (
        <div className='w-screen h-auto'>
            <div className='w-screen h-screen flex flex-col items-center overflew-x-hidden gap-3'>
                <h1 className='text-5xl text-white pt-[10%] font-extrabold'>We are new and growing fast</h1>
                <div className='flex w-full gap-3 justify-center'>
                    <CardComponent data={introdata[0]} />
                    <CardComponent data={introdata[1]} />
                    <CardComponent data={introdata[2]} />
                </div>
            </div>
            <div className='w-screen h-screen relative overflow-hidden'>
                <CustomComponent />
                <img src="/About/hero-img.png" alt="car" className='absolute z-10 w-[35%] h-auto object-cover top-1/2 right-[5%]' />
                <h1 className='absolute object-cover top-[25%] right-28 w-60 text-center font-extrabold text-3xl'>Easy way to deal in Vehicals</h1>
                <AboutUs />
            </div>
            <AboutUs_2 />
            <Partner/>
            <div className='w-full h-full text-white mt-[5%] flex gap-4'>
                <div className='flex flex-col gap-8 pl-8 w-1/2 z-0'>
                    <h1 className='w-full text-4xl font-extrabold'>FAQS</h1>
                    <p className='text-lg w-[70%] font-light'>Have you any questions about an buying or selling car? Check out Help Center for all the details.</p>
                    <div>
                        <button id="btn">Help Center
                            <style jsx>{`button {
  padding: 8px 16px; /* Smaller padding */
  text-transform: uppercase;
  border-radius: 6px; /* Smaller border radius */
  font-size: 14px; /* Smaller font size */
  font-weight: 500;
  color: #ffffff80;
  text-shadow: none;
  background: linear-gradient(45deg, #ff9800, #ff5722); /* Orange gradient */
  cursor: pointer;
  border: none; /* Remove border */
  transition: 0.5s ease;
  user-select: none;
}

button:hover,
button:focus {
  color: #ffffff;
  background: #ff5722; /* Orange color */
  text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
  box-shadow: 0 0 5px #ff5722, 0 0 20px #ff5722, 0 0 50px #ff5722,
    0 0 100px #ff5722;
}
`}

                            </style>
                        </button>
                    </div>
                    <img src="/About/03.png" alt="car" className='object-cover w-full' />
                </div>
                <div className='w-1/2 mt-4'><Accordion data={faqData} /></div>
            </div>
            <Footer />
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
                <div className="name text-xs font-bold p-3">{data.discription}</div>
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

function CustomComponent() {
    return (
        <div className='w-full h-full absolute top-[20%] left-[75%]'>
            <div className="relative flex justify-center h-[500px] w-[300px]  border-4 border-black rounded-2xl bg-gray-50" style={{ boxShadow: '5px 5px 2.5px 6px rgb(209, 218, 218)' }}>
                <span className="border border-black bg-black w-20 h-2 rounded-br-xl rounded-bl-xl"></span>

                <span className="absolute -right-2 top-14  border-4 border-black h-7 rounded-md"></span>
                <span className="absolute -right-2 bottom-36 border-4 border-black h-10 rounded-md"></span>
            </div>
        </div>
    );
}

const AboutUs = () => {
    return (
        <div className='absolute w-1/3 h-full flex flex-col text-white top-[40%] left-[15%] gap-3'>
            <h1 className='text-5xl font-extrabold'>Personalized search</h1>
            <p className='font-light text-lg'>Ante senectus sed at lacus. Sed pellentesque dapibus nunc, cursus hendrerit at faucibus ornare lectus. Sed vitae congue mauris consectetur. Cursus tristique et porta eget sapien vivamus turpis. Ultrices vitae eget mattis varius ipsum adipiscing id. Neque, sagittis cursus aliquam volutpat tristique viverra amet amet</p>
        </div>
    )
}

const AboutUs_2 = () => {
    return (
        <div className='w-[100%] h-[60%] flex px-8 ml-20 mt-10 text-white gap-10 items-center'>
            <img src="/About/01.jpg" alt="car" className='object-cover w-[40%] rounded-xl' />
            <div className='w-1/2 text-center flex flex-col gap-3'>
                <h1 className='text-4xl font-extrabold'>Attractive selling conditions</h1>
                <p className='font-light text-lg'>In risus quam diam urna, pretium at. Platea nulla malesuada elit, enim lacus quam. Rhoncus, tincidunt mauris quis fames in. A egestas sem quisque urna et imperdiet. Blandit dolor diam urna amet semper elementum ipsum et. Nulla mi ipsum quis et id tempor amet.</p>
            </div>
        </div>
    )
}


const Accordion = ({ data }) => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="accordion-container w-[85%] rounded-lg">
            {data.map((item, index) => (
                <div key={index} className="accordion">
                    <button
                        className={`accordion-button ${openIndex === index ? 'bg-gray-200' : 'bg-white'}`}
                        onClick={() => handleToggle(index)}
                    >
                        {item.question}
                    </button>
                    {openIndex === index && (
                        <div className="accordion-content">
                            <p>{item.answer}</p>
                        </div>
                    )}
                </div>
            ))}
            <style jsx>{`
          .accordion-container {
            margin: 1rem 0;
          }
    
          .accordion {
            border: 1px solid #e2e8f0;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
          }
    
          .accordion-button {
            width: 100%;
            padding: 0.5rem 1rem;
            text-align: left;
            cursor: pointer;
          }
    
          .accordion-button:hover {
            background-color: #edf2f7;
          }
    
          .accordion-content {
            padding: 1rem;
            border-top: 1px solid #e2e8f0;
          }
        `}</style>
        </div>
    );
};


const Partner=()=>{
    return(
        <div className='w-full h-auto flex flex-col items-center mt-16 gap-4'>
            <h1 className='text-4xl font-bold text-white'>Our partners</h1>
            <div className='w-full flex justify-center gap-5'>
                <img src="/About/partner/cargil.svg" alt="Partner" className='text-gray-300'/>
                <img src="/About/partner/build.svg" alt="Partner" />
                <img src="/About/partner/real-seguros.svg" alt="Partner" />
                <img src="/About/partner/chase.svg" alt="Partner" />
                <img src="/About/partner/pentel.svg" alt="Partner" />
                <img src="/About/partner/provert.svg" alt="Partner" />
            </div>
        </div>
    )
}





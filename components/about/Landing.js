"use client"
import gsap from 'gsap';
import React, { useRef, useEffect,useState } from 'react';

function Landing() {
    const imgRef = useRef(null);
    const textref=useRef(null);
    const disRef=useRef(null);

    useEffect(() => {
        gsap.to(imgRef.current, {
            duration: 0.5, // Increase duration for smoother animation
            y: -80,
            ease: 'power2.out', // Use a smooth easing function
            onComplete: () => {
                gsap.to(textref.current, {
                    duration: 0.5, // Increase duration for smoother animation
                    y: -50,
                    ease: 'power2.out', // Use a smooth easing function
                    // onComplete: () => {
                    //     gsap.to(textref.current, {
                    //         duration: 0.5, // Increase duration for smoother animation
                    //         y: -100,
                    //         ease: 'power2.out' // Use a smooth easing function
                    //     });
                    // }
                });
            }
        });       
    }, []);
    return (
        <div className='w-screen h-[100vh]  relative'>
            <img 
                src="/About/1st.jpg" 
                alt="car" 
                className='w-[70%] h-[70%] absolute left-0 bottom-[-5%]' 
                ref={imgRef}
            />
            <div className='absolute right-[5%] bottom-[35%] text-white w-[30%] flex flex-col gap-3' ref={textref}>
                <h1 className='text-5xl font-extrabold'>About us</h1>
                <p className='text-lg font-semibold text-slate-400' ref={disRef}>We believe that car buying and selling should be straight-forward and enjoyable, not time-consuming, complicated or stressful.</p>        
                <div><ExploreButton/></div>
            </div>
        </div>
    );
}

export default Landing;
















const ExploreButton = () => {
    const [isButtonActive, setIsButtonActive] = useState(false);
  
    return (
      <button className="button" onClick={() => setIsButtonActive(!isButtonActive)}>
        <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
        Explore
        <style jsx>{`
          .button {
            width: 110px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
            background: linear-gradient(160deg, rgb(255, 171, 20), rgb(255, 99, 71));
            border-radius: 30px;
            color: rgb(19, 19, 19);
            font-weight: 600;
            border: none;
            position: relative;
            cursor: pointer;
            transition-duration: .2s;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.116);
            padding-left: 8px;
          }
  
          .svgIcon {
            height: 25px;
            transition-duration: 1.5s;
          }
  
          .button:hover {
            background: linear-gradient(160deg, rgb(255, 201, 71), rgb(255, 99, 71));
            transition-duration: .5s;
          }
  
          .button:active {
            transform: scale(0.97);
            transition-duration: .2s;
          }
  
          .button:hover .svgIcon {
            transform: rotate(250deg);
            transition-duration: 1.5s;
          }
        `}</style>
      </button>
    );
  };
  

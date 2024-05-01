"use client"
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Loading = () => {
  const imgRef = useRef();
  
  useEffect(() => {
    const loadingScreen = () => {
      gsap.to(imgRef.current, { rotationY: "+=360", duration: 2, repeat: -1 }); // Set repeat to -1 to keep rotating indefinitely
    };
    const loadingComplete = () => {
      gsap.killTweensOf(imgRef.current); // Stop the rotation animation when loading is complete
    };

    loadingScreen(); // Start the rotation animation
    // Simulating loading completion after 5 seconds
    const loadingCompleteTimeout = setTimeout(() => {
      loadingComplete(); // Stop the rotation animation after 5 seconds
    }, 5000);

    return () => {
      clearTimeout(loadingCompleteTimeout); // Clean up timeout on component unmount
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <img
        src="/Home/whiteLogo.png"
        alt="loading..."
        className="w-[60%]"
        ref={imgRef}
      />
    </div>
  );
};

export default Loading;

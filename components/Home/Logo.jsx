"use client"
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

const Logo = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      gsap.to(imgRef.current, { rotationY: '+=360', duration: 3 });
    };
    window.addEventListener('scroll', handleClick);
  }, []);

  return (
    <Link href='/'>
      <div
        className="text-3xl font-bold font-next text-white drop-shadow-md fixed top-12 left-12 z-40 cursor-pointer"
      >
        <img
          src="/Home/whiteLogo.png"
          alt="."
          className="w-32 h-16"
          ref={imgRef}
        />
      </div>
    </Link>
  );
};

export default Logo;

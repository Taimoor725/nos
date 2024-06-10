"use client"
import React, { useEffect } from 'react';
import Landing from '@/components/about/Landing';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Page() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className='w-screen h-auto overflow-x-hidden'>
      <Landing />
    </div>
  );
}

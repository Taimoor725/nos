"use client"
import React, { useState } from 'react';
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='bg-black max-w-screen overflow-x-hidden'>
      <footer className="footer">
        <div className='w-full p-4
         text-2xl font-light flex justify-center items-end' >LOGO AND ADRESS</div>
        <div className="container mt-12">
          <div className="flex justify-around">
            <div className=" text-center">
              <h3  data-aos="fade-up">RACING</h3>
              <ul className='flex flex-col gap-2 mt-5'>
                <li data-aos="fade-up" data-aos-delay="50">Scuderia Ferrari HP</li>
                <li data-aos="fade-up" data-aos-delay="100">Charles Leclero</li>
                <li data-aos="fade-up" data-aos-delay="150">Carlos Sainz</li>
                <li data-aos="fade-up" data-aos-delay="200">Hypercar</li>
                <li data-aos="fade-up" data-aos-delay="250">GT Series</li>
              </ul>
            </div>


            <div className=" text-center">
              <h3 data-aos="fade-up" data-aos-delay="50">SPORTS CARS</h3>
              <ul className='flex flex-col gap-2 mt-5'>
                <li data-aos="fade-up" data-aos-delay="100">Range</li>
                <li data-aos="fade-up" data-aos-delay="150">Configure your Ferrari</li>
                <li data-aos="fade-up" data-aos-delay="200">MyFerrari</li>
                <li data-aos="fade-up" data-aos-delay="250">Pre-owned</li>
                <li data-aos="fade-up" data-aos-delay="300">Dealers</li>
              </ul>
            </div>
            <div className=" text-center">
              <h3 data-aos="fade-up" data-aos-delay="100">COLLECTIONS</h3>
              <ul className='flex flex-col gap-2 mt-5'>
                <li data-aos="fade-up" data-aos-delay="150">Men</li>
                <li data-aos="fade-up" data-aos-delay="200">Women</li>
                <li data-aos="fade-up" data-aos-delay="250">Kids</li>
                <li data-aos="fade-up" data-aos-delay="300">Shoes</li>
                <li data-aos="fade-up" data-aos-delay="350">Eyewear</li>

              </ul>
            </div>
            <div className=" text-center">
              <h3 data-aos="fade-up" data-aos-delay="150">EXPERIENCES</h3>
              <ul className='flex flex-col gap-2 mt-5'>
                <li data-aos="fade-up" data-aos-delay="200">Corse Clienti</li>
                <li data-aos="fade-up" data-aos-delay="250">Ferrari Esports Series</li>
                <li data-aos="fade-up" data-aos-delay="300">Ristorante Cavallino</li>
                <li data-aos="fade-up" data-aos-delay="350">Ferrari Museums</li>
                <li data-aos="fade-up" data-aos-delay="400">Ferrari World Abu Dhabi</li>
              </ul>
            </div>
            <div className=" text-center">
              <h3 data-aos="fade-up" data-aos-delay="200">ABOUT US</h3>
              <ul className='flex flex-col gap-2 mt-5'>
                <li data-aos="fade-up" data-aos-delay="250">Corporate</li>
                <li data-aos="fade-up" data-aos-delay="300">Sustainability</li>
                <li data-aos="fade-up" data-aos-delay="350">Media Centre</li>
                <li data-aos="fade-up" data-aos-delay="400">News</li>
                <li data-aos="fade-up" data-aos-delay="450">Magazine</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className='w-full h-[1px] bg-gray-600 mt-3'></div>
      <div className='bg-black text-white mt-20 px-20'>
        <SocialMedias />
      </div>
      <div className='w-full flex md:h-[10rem] justify-center items-center border-t-1 border-t-gray-600 mt-3 text-white'>
          <div className=' w-2/3   text-xs text-center'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ullam inventore? Quidem unde repellendus non minima quis, exercitationem, possimus, cum dolor quaerat nobis nam dolores consequuntur beatae animi. Fugit ratione quae porro adipisci dignissimos dolor dolores, ullam officiis sit cum explicabo, commodi numquam asperiores alias inventore. Omnis voluptas impedit totam, dolore ipsam eligendi nulla sapiente corporis iusto magni qui optio possimus maiores, quod quas illo! Esse nisi ea repellat quia natus. Neque cum quae ipsa pariatur quis, tempora dolorem voluptatibus fugit saepe aperiam iure consequatur eum esse vel. Vero commodi mollitia et officia obcaecati totam provident cumque aperiam culpa cum?
          </div>
      </div>
      <div className='w-full p-3 font-light text-xl text-white flex justify-center items-center'><img src="/Layer 1_logo.png" alt="Logo" className='w-32 h-auto' /></div>
       
    </div>
  );
};

export default Footer;




const SocialMedias = () => {
  const [rotations, setRotations] = useState([false, false, false, false, false]);
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const data = [
    { name: "FACEBOOK", src: <ion-icon name="logo-facebook" style={{ width: "24px", height: "24px" }}></ion-icon> },
    { name: "INSTAGRAM", src: <ion-icon name="logo-instagram" style={{ width: "24px", height: "24px" }}></ion-icon> },
    { name: "LINKEDIN", src: <FontAwesomeIcon icon={faLinkedin} style={{ width: "24px", height: "24px" }} /> },
    { name: "TICTOK", src: <FontAwesomeIcon icon={faTiktok} style={{ width: "24px", height: "24px" }} /> },
    { name: "X    ", src: <FontAwesomeIcon icon={faXTwitter} style={{ width: "24px", height: "24px" }} /> },
  ];

  const handleIconClick = (index) => {
    setRotations(rotations.map((isRotated, i) => (i === index ? !isRotated : isRotated)));
    setClicked(clicked.map((isClicked, j) => (j === index ? !isClicked : isClicked)));
  };

  return (
    <div>
      <div className='w-full grid grid-cols-4 gap-7'>
        {data.map((value, index) => (
          <div key={index} className='flex flex-col items-start gap-4 mb-4'>
            <div className='flex items-center gap-16'>
              <div className='flex gap-2'>
                {value.src}
                <p>{value.name}</p>
              </div>
              <div
                onClick={() => handleIconClick(index)}
                className={`flex justify-end w-[32px] h-[32px] items-center transition-transform transform ${rotations[index] ? '-rotate-45' : ''}`}
              >
                <ion-icon name="add-outline" style={{ width: '32px', height: '32px' }}></ion-icon>
              </div>
            </div>
            {/* Social media dropdown */}
            
            
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                clicked[index] ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className=' rounded shadow-md'>
                <div className='flex flex-col gap-2'>
                  <a href="#">ABC</a>
                  <a href="#">ABC Company</a>
                  <a href="#">ABC Shows</a>
                  <a href="#">ABC Events</a>
                  <a href="#">ABC Network</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};






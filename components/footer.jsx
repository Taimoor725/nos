"use client"
import React, { useState } from 'react';
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='bg-black'>
      <footer className="footer">
        <div className='w-full p-4 text-2xl font-light flex justify-center items-end'>LOGO AND ADRESS</div>
        <div className="container mt-12">
          <div className="flex justify-around">
            <div className=" text-center">
              <h3>RACING</h3>
              <ul className='flex flex-col gap-2 mt-5'>
                <li>Scuderia Ferrari HP</li>
                <li>Charles Leclero</li>
                <li>Carlos Sainz</li>
                <li>Hypercar</li>
                <li>GT Series</li>
              </ul>
            </div>


            <div className=" text-center">
              <h3>SPORTS CARS</h3>
              <ul className='flex flex-col gap-2 mt-5'>
                <li>Range</li>
                <li>Configure your Ferrari</li>
                <li>MyFerrari</li>
                <li>Pre-owned</li>
                <li>Dealers</li>
              </ul>
            </div>
            <div className=" text-center">
              <h3>COLLECTIONS</h3>
              <ul className='flex flex-col gap-2 mt-5'>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Shoes</li>
                <li>Eyewear</li>

              </ul>
            </div>
            <div className=" text-center">
              <h3>EXPERIENCES</h3>
              <ul className='flex flex-col gap-2 mt-5'>
                <li>Corse Clienti</li>
                <li>Ferrari Esports Series</li>
                <li>Ristorante Cavallino</li>
                <li>Ferrari Museums</li>
                <li>Ferrari World Abu Dhabi</li>
              </ul>
            </div>
            <div className=" text-center">
              <h3>ABOUT US</h3>
              <ul className='flex flex-col gap-2 mt-5'>
                <li>Corporate</li>
                <li>Sustainability</li>
                <li>Media Centre</li>
                <li>News</li>
                <li>Magazine</li>
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
      <div className='w-full p-3 font-light text-xl text-white flex justify-center items-center'>LOGO</div>
       
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






import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faCog, faShoppingCart, faCar, faUsers, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-white text-black max-h-screen/2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <div className="flex items-center mb-4 md:mb-0">
            <FontAwesomeIcon icon={faCar} className="text-3xl text-red-500 mr-2" />
            <span className="text-lg font-semibold">AUTOCENTER NIEDERBIPP AG</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-xl"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="text-xl"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="text-xl"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="text-xl"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#" className="text-xl"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Company</h2>
            <ul>
              <li><a href="#"><FontAwesomeIcon icon={faHome} /> Home</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faInfoCircle} /> About us</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faEnvelope} /> Contact us</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Services</h2>
            <ul>
              <li><a href="#"><FontAwesomeIcon icon={faCog} /> Maintenance</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faShoppingCart} /> Buy a car</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faCar} /> Rent a car</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faUsers} /> Test drives</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Resources</h2>
            <ul>
              <li><a href="#"><FontAwesomeIcon icon={faFileAlt} /> FAQs</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faFileAlt} /> Blog</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faFileAlt} /> Gallery</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faFileAlt} /> Testimonials</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 md:order-2">
            <p>&copy; {new Date().getFullYear()} <a href="#">AUTOCENTER NIEDERBIPP AG</a>. All rights reserved</p>
          </div>
          <div>
            <a href="#" className="mr-4">Privacy policy</a>
            <a href="#">Terms & condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

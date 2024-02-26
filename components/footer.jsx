import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer= (props) => {
  return (
      <div className="inline-flex w-screen h-[3rem] pb-4 bg-black text-gray-400 self-end items-center justify-around text-sm" {...props}>
        <p>BE-TAYE</p>
        <div className="w-1/2 flex text-gray-400  h-6 gap-4  ">
          <FontAwesomeIcon icon={faInstagram}  />
          <FontAwesomeIcon icon={faFacebook}  />
          <FontAwesomeIcon icon={faLinkedin}  />
          <FontAwesomeIcon icon={faGithub}  />
        </div>
        <p>
          Copyright © 2024 BE-TAYE. All rights reserved. Designed with ❤️ by
          high-haseeb.
        </p>
      </div>
  )
}

export default Footer

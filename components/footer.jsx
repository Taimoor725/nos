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
      <div className="absolute bottom-0 w-screen h-[5rem] bg-black text-gray-400 flex items-center justify-around text-sm" {...props}>
        <p>BE-TAYE</p>
        <div className="w-1/2 flex text-gray-400 text-sm h-4 gap-4  ">
          <FontAwesomeIcon icon={faInstagram} size="xs" />
          <FontAwesomeIcon icon={faFacebook} size="xs" />
          <FontAwesomeIcon icon={faLinkedin} size="xs" />
          <FontAwesomeIcon icon={faGithub} size="xs" />
        </div>
        <p>
          Copyright © 2024 BE-TAYE. All rights reserved. Designed with ❤️ by
          high-haseeb.
        </p>
      </div>
  )
}

export default Footer

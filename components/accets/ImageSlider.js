import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function ImageSlider({ imgsData }) {
  return (
    <div className='px-2 md:px-0'>
      <Fade>
        {imgsData.map((img, index) => (
          <div key={index}>
            <div
              className='relative flex justify-center items-center h-[15rem] md:h-[18rem] rounded-[20px]'
              style={{ backgroundImage: `url(${img.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default ImageSlider;

import React from 'react'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

function ImageSlider() {
  const imgs = [
    { url: "/sales/rabge_3.jpg", caption: "| Find Your Dream Car Here |", model: "RangRover ABC", caption_1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugit dolorum ratione, suscipit assumenda quas possimus omnis sit id laborum incidunt facilis repellendus, provident quasi veniam blanditiis repellat repudiandae impedit." },
    { url: "/sales/rabge_2.jpg", caption: "| Find Your Dream Car Here |", model: "RangRover ABC", caption_1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugit dolorum ratione, suscipit assumenda quas possimus omnis sit id laborum incidunt facilis repellendus, provident quasi veniam blanditiis repellat repudiandae impedit." },

    { url: "/sales/rabge_1.jpg", caption: "| Find Your Dream Car Here |", model: "RangRover ABC", caption_1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugit dolorum ratione, suscipit assumenda quas possimus omnis sit id laborum incidunt facilis repellendus, provident quasi veniam blanditiis repellat repudiandae impedit." },
  ]

  return (
    <div className='px-2 md:px-0'>
      <Fade>
        {imgs.map((img, index) => (
          <div key={index}>
            <div
              className='relative flex justify-center items-center h-[15rem] md:h-[27rem] rounded-[20px]'
              style={{ backgroundImage: `url(${img.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <span className="text-white absolute top-5 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                {img.caption}
              </span>
              <span className="text-white absolute top-14 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 font-light w-[60%] sm:w-[50%] md:w-[45%] lg:w-[40%] xl:w-[35%] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                {img.caption_1}
              </span>
              <span className="text-white absolute bottom-8 md:top-60 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 font-extrabold w-[60%] sm:w-[50%] md:w-[45%] lg:w-[40%] xl:w-[35%] text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                {img.model}
              </span>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default ImageSlider

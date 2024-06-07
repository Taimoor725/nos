import React from 'react';
import "./img.css";
import MainButton from "@/components/accets/MainButton";

function ImagePresenter() {
    const data = [
        { heading: "Collection", subHeading: "MIAMI VIBES", buttonTitel: "EXPLORE", src: '/Home/image_block (1).png' },
        { heading: "Magzin", subHeading: "TOUT EST DIT DANS LE NOM-L'ENZO FERRARI", buttonTitel: "EN SAVIOR PLUS", src: '/Home/image_block (3).png' },
        { heading: "Corso Pilota", subHeading: "L'APPEL DU CIRCUIT", buttonTitel: "EN SAVIOR PLUS", src: '/Home/image_block (2).png' },
        { heading: "Ferrari Approved", subHeading: "PRE-OWNED", buttonTitel: "EN SAVIOR PLUS", src: '/Home/image_block.png' },
    ];

    return (
        <>
            <div className="w-full h-auto md:h-[200vh] flex justify-start">
                <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
                    {data.map((item, index) => (
                        <div key={index} className='relative image-container' data-aos="zoom-in" data-aos-once="false">
                            <TextPlace data={item} />
                            <img src={item.src} alt="img" className='w-full h-full' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ImagePresenter;

const TextPlace = ({ data }) => {
    return (
        <div className='z-10 text-white w-full absolute flex flex-col text-center items-center bottom-10 translate-none rotate-none scale-none transform-none opacity-1'>
            <div className='text-sm font-semibold text-gray-300 ' data-aos="zoom-in" data-aos-delay="200">{data.heading}</div>
            <div className='text-2xl font-bold w-[70%] ' data-aos-offset="-10" data-aos="zoom-in" data-aos-delay="300">{data.subHeading}</div>
            <div className='text-[10px] font-semibold text-gray-300 flex justify-center items-center pl-2' data-aos-offset="-10" data-aos="zoom-in" data-aos-delay="400">{data.buttonTitel}
                <MainButton />
            </div>
        </div>
    );
};
"use client";
import React, { useRef, useState, useEffect } from 'react';
import "./stylesheet.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';

const questions = [
    {
        question: "What is your return policy?",
        answer: "You can return any item within 30 days of purchase. The item must be in its original condition and packaging."
    },
    {
        question: "How long does shipping take?",
        answer: "Shipping typically takes 3-5 business days for domestic orders and 7-14 business days for international orders."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we offer international shipping to most countries. Shipping rates and delivery times will vary depending on the destination."
    },
    {
        question: "How can I track my order?",
        answer: "Once your order has shipped, we will send you a confirmation email with a tracking number and a link to track your package."
    },
    {
        question: "Can I change or cancel my order?",
        answer: "Yes, you can change or cancel your order within 24 hours of placing it. Please contact our customer service team for assistance."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay."
    },
    {
        question: "How do I contact customer service?",
        answer: "You can contact our customer service team via email at support@example.com or by phone at +123-456-7890."
    },
    {
        question: "Do you offer gift cards?",
        answer: "Yes, we offer gift cards in various amounts. They can be purchased on our website and are delivered electronically."
    },
    {
        question: "Are your products eco-friendly?",
        answer: "Yes, we are committed to sustainability and offer a range of eco-friendly products. Please check the product descriptions for more details."
    },
    {
        question: "Where can I find size charts?",
        answer: "Size charts are available on the product pages. Click on the 'Size Chart' link next to the size options to view detailed measurements."
    }
];

const Faqs = ({ questions }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const textRef = useRef(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        const box = textRef.current;
        if (box && activeIndex !== null) {
            gsap.fromTo(box, { opacity: 0, height: 0 }, { opacity: 1, height: 'auto', duration: 0.5, ease: 'power2.inOut' });
        }
    }, [activeIndex]);

    return (
        <div className="faq-container custom-gradient">
            {questions.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div onClick={() => handleClick(index)} className="faq-question flex p-3 rounded cursor-pointer text-xs md:text-sm">
                        <span>{faq.question}</span>
                        <div className='flex flex-grow justify-end items-center'>
                            <FontAwesomeIcon 
                                icon={faPlus} 
                                className={`text-white w-6 h-6 transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : ''}`} 
                            />
                        </div>
                    </div>
                    {activeIndex === index && (
                        <div className="faq-answer mt-2 p-2 bg-white text-black rounded text-xs md:text-sm" ref={textRef}>
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

function Theme() {
    return (
        <div className='w-screen h-auto flex flex-col relative'>
            <div className='md:block hidden w-full h-screen'>
                <img src="/faq/theam (1).jpeg" alt="loading" className='object-cover w-full h-full' />
            </div>

            <div className='md:hidden block w-full h-screen'>
                <img src="/faq/theam (1).jpeg" alt="loading" className='object-cover w-full h-full' />
            </div>
            <div className='flex flex-col justify-center items-center w-screen absolute top-[20%] translate-x-[-50%] left-[50%] translate-y-[-50%]'>
                <img src="/company_logo_2.svg" alt="Company Logo" className='w-80 h-80 object-cover' data-aos="fade-up" data-aos-delay="50"/>
                <div className='md:text-6xl text-4xl font-bold text-white absolute top-[65%]' data-aos="fade-up" data-aos-delay="100">COMPANY FAQ</div>
            </div>
            <div className='faq-section p-4 bg-black text-white'>
                <Faqs questions={questions} />
            </div>
        </div>
    );
}

export default Theme;

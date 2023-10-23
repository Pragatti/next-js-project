"use client"
import React from 'react'

import Button from './commonButton';
import Image from 'next/image';

export default function Hero() {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };
  return (
    <div className='hero'>
      <div className='flex flex-wrap  pt-5'>
        <div className='w-1/2'>
          <h1 className='hero__title'>
            Find,book, or  rent a car -- quickly and easily !
        </h1>
        <p className='hero__subtitle'>
            Streamline your car rental experience with our effortless booking process.
        </p>
        <Button text="Explore Cars" onClick={handleButtonClick}  color="bg-blue-800 text-white mt-2"/>
        </div>
        <div className='w-1/2 '>
          <Image src="/hero.png" alt="hero section" width={800} height={700}/>
        </div>
        <div className='hero__image-overlay'></div>
      </div>
    </div>
  )
}

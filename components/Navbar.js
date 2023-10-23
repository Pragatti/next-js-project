'use client'

import  Image  from 'next/image';
import Link from 'next/link';
import Button from './commonButton';
// import Button from './commonButton';
export default function Navbar() {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex  flex-wrap justify-between  sm:px-16 px-6 py-4'>
      <div>
      <Link href="/" className='flex justify-center items-center'/>
      <Image src="/logo.svg" alt="car Hub logo"  width={118} height={18} className="object-contain"/>
      </div>
       <div> <Button text="Sign In"   color="bg-white text-primary-blue  rounded-full min-w-[130px]"/></div>
         </nav>
    </header>
  )
}

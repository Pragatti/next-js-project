'use client'
import Image from 'next/image'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'

import CustomFilter from '../components/customFilter';
import { fetchCars } from '@/utlis';
import CarCard from '@/components/CarCard';

export default async function Home() {
  const allCars = await fetchCars()
  const isDataEmpty = !Array.isArray(allCars)|| allCars.length <1
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Hero />
 
    <div className='max-width  w-full flex flex-wrap'>
     <div className='mt-12 padding-x padding-y  w-1/2' id="discover">
    <h1 className='text-4xl font-extrabold'> Car Catalogue</h1>
    <p>Explore the cars you might like</p>
    </div>
  
    <div className=" w-1/2 mt-12 padding-x padding-y ">
      <SearchBar />
      <div className='home__filter-container'> 
      <customFilter  title="fuel"/>
      <customFilter  title="year"/>
      </div>
      </div>
      {/* main section */}
     {
!isDataEmpty ?(
  <section className='w-full'>
    <div className='home__cars-wrapper'>
     {allCars?.map((car)=>
     <CarCard car={car} />
     )}
    </div>
  </section>
):(
  <div className='home__error-container'>
    <h2 className='text-black text-xl font-bold'>oops,no results</h2>
    <p>
      {allCars?.message}
    </p>
    </div>
)
     }


      
    


     </div>
    </main>
  )
}

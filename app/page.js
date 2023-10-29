'use client'
import Image from 'next/image'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'

import CustomFilter from '../components/customFilter';
import { carData } from '@/utlis';
import CarCard from '@/components/CarCard';

export default  function Home() {
  const carData = [
    {
      city_mpg: 25,
      class: 'Sedan',
      combination_mpg: 28,
      cylinders: 4,
      displacement: 2.0,
      drive: 'Front-wheel drive',
      fuel_type: 'Gasoline',
      highway_mpg: 32,
      make: 'Toyota',
      model: 'Camry',
      year: 2022,
      transmission: 'Manual',
    },
    {
      city_mpg: 22,
      class: 'SUV',
      combination_mpg: 25,
      cylinders: 6,
      displacement: 3.5,
      drive: 'All-wheel drive',
      fuel_type: 'Gasoline',
      highway_mpg: 27,
      make: 'Honda',
      model: 'CR-V',
      year: 2023,
      transmission: 'Manual',
    },
    {
      city_mpg: 18,
      class: 'Truck',
      combination_mpg: 20,
      cylinders: 8,
      displacement: 5.0,
      drive: 'Rear-wheel drive',
      fuel_type: 'Diesel',
      highway_mpg: 22,
      make: 'Ford',
      model: 'F-150',
      year: 2021,
      transmission: 'Automatic',
    },
    {
      city_mpg: 18,
      class: 'Truck',
      combination_mpg: 20,
      cylinders: 8,
      displacement: 5.0,
      drive: 'Rear-wheel drive',
      fuel_type: 'Diesel',
      highway_mpg: 22,
      make: 'Ford',
      model: 'F-150',
      year: 2021,
      transmission: 'Automatic',
    },
    {
      city_mpg: 18,
      class: 'Truck',
      combination_mpg: 20,
      cylinders: 8,
      displacement: 5.0,
      drive: 'Rear-wheel drive',
      fuel_type: 'Diesel',
      highway_mpg: 22,
      make: 'Ford',
      model: 'F-150',
      year: 2021,
      transmission: 'Manual',
    },
    {
      city_mpg: 18,
      class: 'Truck',
      combination_mpg: 20,
      cylinders: 8,
      displacement: 5.0,
      drive: 'Rear-wheel drive',
      fuel_type: 'Diesel',
      highway_mpg: 22,
      make: 'Ford',
      model: 'F-150',
      year: 2021,
      transmission: 'Automatic',
    },
    // Add more cars as needed
  ];
  
  // You can use this array to simulate car data in your application or API.
  
  const allCars = carData;
  const isDataEmpty = !Array.isArray(allCars)|| allCars.length <1
   console.log(allCars)
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

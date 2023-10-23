'use client'
import React, { useState } from 'react'
import { manufacturers } from "../constants/index";

export default function SearchBar() {
  const [manufacturer,setManufacturer] = useState('');
  const [filteredData, setFilteredData] = useState([]); 

  const handleSearch = (e)=>{
    setManufacturer(e.target.value)
   const filterData =manufacturers.filter(item =>item.toLowerCase().includes(manufacturer.toLowerCase()))
   setFilteredData(filterData);
  }
  
  return (
      <div className=' '>
          <form className='searchbar' >
            <input
            className='border-8 border-indigo-600'
              type="text"
              placeholder="Search..."
              
              onChange={handleSearch}
            />
          </form>
          <ul>
            {filteredData.map(item => (
              <li key={item.id} >{item}</li>
            ))}
          </ul>
        </div> 
    
  )}
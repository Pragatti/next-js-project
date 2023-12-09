"use client";
import React, { useState } from "react";
import { manufacturers } from "../constants/index";

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const handleSearch = (e, flag = "") => {
  
    const inputValue = flag === "select" ? e : e?.target?.value;
    setManufacturer(inputValue);
    const filterData = manufacturers.filter((item) =>
      item.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(filterData);
   };
  const handleSelect = (value) => {
    // setManufacturer(value);
    handleSearch(value, "select");
   };
  return (
    <div>
      <div className=" ">
        <form className="searchbar">
          <input
            value={manufacturer}
            className="border-8 border-indigo-600"
            type="text"
            placeholder="Search..."
            onChange={(e) => handleSearch(e, "type")}
          />
        </form>
        <ul>
          {filteredData.map((item) => (
            <li key={item.id} onClick={() => handleSelect(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

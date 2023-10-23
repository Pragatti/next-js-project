"use client"
import React from 'react';

const Button = ({ text, onClick ,color}) => {
  const defaultClassName =
  'inline-flex items-center justify-center self-center transition-all border-b-4 border-blue-500 rounded-md text-center text-16 font-semibold py-3 px-7  sm:text-18';
  return (
    <button onClick={onClick} className={` ${defaultClassName} ${color}`}>
      {text}
    </button>
  );
};

export default Button;
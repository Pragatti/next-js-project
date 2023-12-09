"use client"
import React from 'react'
import Navbar from './Navbar'
import Todo from './Todo'

export default function Index() {
  return (
    <div>
      <Navbar/>
      <h1>hero</h1>
      <div>
         <Todo />
      </div>
    </div>
  )
}

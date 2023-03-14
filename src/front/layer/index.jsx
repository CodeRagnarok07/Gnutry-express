import React from 'react'
import Navbar from './Navbar.jsx'
export default function index({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

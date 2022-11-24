import React from 'react'
import Logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className="flex justify-center w-screen h-24 shadow-md">
      <div className="container flex items-center justify-between w-full">
        <div className="flex items-center gap-5 brand">
          <img src={Logo} className="w-10 h-auto" alt="" />
          <h1 className="text-2xl font-semibold text-secondary">ADUDENT</h1>
        </div>
        <p className="text-pale">Pre Launch</p>
      </div>
    </div>
  )
}

export default Navbar
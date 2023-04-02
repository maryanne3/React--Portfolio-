import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../assets/img3.png'
import classNames from 'classnames'; 



// TODO: Create a styles object called "styles"

function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
   <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300'>
   <div>
    <img src={logo} alt="Logo Image" style={{width:'100px'}}/>
   </div>
   <div>
    <ul className='flex'>
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
   </div>

   <div className='hidden'>
    <FaBars/>
   </div>

   <ul className='hidden'>
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
   </ul>
    {/* Social Icons*/}
   <div className='hidden'></div>
  
   </div>
  );
}

export default Navbar;

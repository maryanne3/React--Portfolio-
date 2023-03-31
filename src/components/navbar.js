import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../assets/img3.png'

// TODO: Create a styles object called "styles"

function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
   <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300'>
   <div>
    <img src={logo} alt="Logo Image" style={{width:'100px'}}/>
   </div>
   <div>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
   </div>

   </div>
  );
}

export default Navbar;

import React from 'react';
import '../styles/navbar.css';
import { HiOutlineSearch } from "react-icons/hi";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className='nav-title'>NexGenTools</h1>
      <ul className='nav-links'>
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/cart"><HiOutlineSearch /></a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
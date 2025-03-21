import React from 'react';
import Logo from '../assets/logo.svg';
import '../Styling/Header.css';
import { IoMenu } from "react-icons/io5";

const Header = ({ toggleSidebar, toggleMobileSidebar }) => {
  return (
    <div className='header-container'>
      <img src={Logo} alt='logo' width={87} height={34} />
      
      <div className='menu-container'>
        {/* Desktop View Button */}
        <button className='menu-btn desktop-menu-btn' onClick={toggleSidebar}>
          <IoMenu size={22} color='#6C7383' />
        </button>
        
        {/* Mobile View Button */}
        <button className='menu-btn mobile-menu-btn' onClick={toggleMobileSidebar}>
          <IoMenu size={22} color='#6C7383' />
        </button>
      </div>
    </div>
  );
};

export default Header;
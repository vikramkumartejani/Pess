import React from 'react'
import Logo from '../assets/logo.svg'
import './Header.css'
import { IoIosMenu } from "react-icons/io";
import { IoMenu } from "react-icons/io5";


const Header = () => {
    return (
        <div className='header-container'>
            <img src={Logo} alt='logo' width={87} height={34} />
            
            {/* Menu Icons */}
            <div className='menu-container'>
                <button className='menu-btn'><IoMenu size={22} color='#6C7383' /></button>
            </div>
        </div>
    )
}

export default Header
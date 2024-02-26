import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navImg'>
                <img src="/logo_white.png" alt="BitBhoomi_logo" />
            </div>
            <div className="linksContainer">
                <button className="navLinks">HOME</button>
                <button className="navLinks">IDO</button>
                <button className="walletBtn">Connect Wallet</button>
            </div>

        </nav>
    )
}

export default Navbar;
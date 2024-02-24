import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <span>
                <img src="/logo_white.png" alt="BitBhoomi_logo" />
            </span>
            <div className="linksContainer">
                <button className="navLinks">Home</button>
                <button className="navLinks">IDO</button>
                <button className="walletBtn">Connect Wallet</button>
            </div>

        </nav>
    )
}

export default Navbar;
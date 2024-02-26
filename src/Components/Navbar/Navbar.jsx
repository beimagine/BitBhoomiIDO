import { useState, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
    const mobileNavElement = useRef();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const openMobileNav = () => {
        if (mobileNavElement.current)
            mobileNavElement.current.style.width = "250px";
    }

    const closeMobileNav = () => {
        setIsDropdownOpen(false);
        if (mobileNavElement.current)
            mobileNavElement.current.style.width = "";
    }

    return (
        <nav className='navbar' onMouseLeave={()=>setIsDropdownOpen(false)}>
            <span>
                <img src="/logo_white.png" alt="BitBhoomi_logo" className="logoImg" />
            </span>
            <div className="linksContainer">
                <button className="navLinks">HOME</button>
                <button className="navLinks">IDO</button>
                <div className="btnContainer">
                    <button className="walletBtn" onMouseEnter={() => setIsDropdownOpen(true)}>Connect Wallet</button>
                    <img src="/hamburger.png" alt="hamburger_image" onClick={openMobileNav} className="hamburgerImg" />
                    {
                        isDropdownOpen &&
                        <div className="dropdown">
                            <span>
                                <img src="/phantom.png" alt="phantom_logo" />
                                <button>Phantom</button>
                            </span>
                            <hr />
                            <span>
                                <img src="/solfare.png" alt="solfare_logo" />
                                <button>Solfare</button>
                            </span>
                        </div>
                    }
                </div>
            </div>

            <div className="mobileNav" ref={mobileNavElement}>
                <img src="/close.png" alt="closeIcon" onClick={closeMobileNav} className="closeIcon" />
                <button className="navLinks">Home</button>
                <button className="navLinks">IDO</button>
                <button
                    className="walletBtn"
                    style={{ marginTop: '1rem' }}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >Connect Wallet
                </button>
                {
                    isDropdownOpen &&
                    <div className="dropdown mobileDropdown">
                        <span>
                            <img src="/phantom.png" alt="phantom_logo" />
                            <button>Phantom</button>
                        </span>
                        <hr />
                        <span>
                            <img src="/solfare.png" alt="solfare_logo" />
                            <button>Solfare</button>
                        </span>
                    </div>
                }
            </div>
            {/* } */}
        </nav>
    )
}

export default Navbar;
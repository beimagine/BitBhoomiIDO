import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <section className="footerSection">
                <div className="footerContainer">
                    <span>
                        <img src="/logo_white.png" alt="" />
                    </span>
                    <span className="socialMediaIcons">
                        <img src="/TwitterX.png" alt="twitterX_icon" />
                        <img src="/telegram.png" alt="telegram_icon" />
                    </span>
                </div>
                <p>© 2024 Beyond Imagination Technologies Pvt. Ltd.</p>
            </section>
        </>
    )
}

export default Footer;
import React from 'react';
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
                        <a href="https://twitter.com/BITBhoomi" target="_blank">
                            <img src="/TwitterX.png" alt="twitterX_icon" />
                        </a>
                        <a href="https://t.co/qMVAgna0Xl" target="_blank">
                            <img src="/telegram.png" alt="telegram_icon" />
                        </a>
                    </span>
                </div>
                <p>© 2024 Beyond Imagination Technologies Pvt. Ltd.</p>
            </section>
        </>
    )
}

export default Footer;
import React from 'react';
import Navbar from '../Navbar/Navbar';
import '../Home/Hero/Hero.css';
import { useNavigate } from 'react-router-dom';
import './airdrop.css';

const Airdrop = () => {
    const navigate = useNavigate();

    const moveToNextSlide = () => {
        navigate(`/airdrop/slide1`);
    };

    return (
        <>
            <Navbar />

            <div className='bgStyle' >
                <section className="heroSection airdropSection" style={{ height: "100vh" }}>
                    <h1 className="heroMaintext">Welcome to the BitBhoomi AirDrop Quiz</h1>
                    <p style={{ lineHeight: '2rem' }}>We're excited to have you participate in our fun quiz about BitBhoomi and stand a chance to win some Bhoomi tokens! But first, let's make sure you're following us on Twitter (@BITBhoomi) and Telegram (@BITBhoomiCommunity). Drop your user IDs below so we can verify your entry and announce the lucky winner!
                    </p>

                    <div className='nextBtnDiv'>
                        <span onClick={moveToNextSlide}>LETS GETS STARTED!</span>
                        <img src="/airdrop_assets/arrow-right.png" alt="" />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Airdrop;
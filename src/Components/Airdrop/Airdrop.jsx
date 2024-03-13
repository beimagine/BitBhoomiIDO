import React from 'react';
import Navbar from '../Navbar/Navbar';
import '../Home/Hero/Hero.css';
import { useNavigate } from 'react-router-dom';
import './Airdrop.css';

const airdrop = () => {
    const navigate = useNavigate();

    const moveToNextSlide = () => {
        navigate(`/airdrop/slide1`);
    };

    return (
        <>
            <div className='bgStyle' >
                <Navbar />

                <section className="heroSection airdropSection" style={{ minHeight: "100vh" }}>
                    <h1 className="heroMaintext">Welcome to the BitBhoomi AirDrop Quiz</h1>
                    <p style={{ lineHeight: '2rem' }}>We're excited to have you participate in our fun quiz about BitBhoomi and stand a chance to win some Bhoomi tokens! Please explore our platform before you get started with the Quiz which helps in answering the questions.
                    </p>
                    <button className="submitBtn" style={{ fontSize: '1rem' }}>
                        <a href="https://bitbhoomi.com" target="_blank">Visit BitBhoomi</a>
                    </button>

                    <div className='nextBtnDiv'>
                        <span onClick={moveToNextSlide}>LETS GETS STARTED!</span>
                        <img src="/airdrop_assets/arrow-right.png" alt="" />
                    </div>
                </section>
            </div>
        </>
    )
}

export default airdrop;
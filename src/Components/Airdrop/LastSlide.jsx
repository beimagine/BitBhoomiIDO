import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Slide.css';

const LastSlide = () => {
    const navigate = useNavigate();

    return (
        <div className='bgStyle'>
            <section className='lastSlideSection'>
                <div className='message'>
                Thanks for participating and stay tuned to receive airdrop.
                </div>
                <button
                    className="returnBtn"
                    onClick={() => navigate('/airdrop')}
                >
                    Return</button>
            </section >
        </div>
    )
}

export default LastSlide;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './slide.css';

const LastSlide = ({ index }) => {
    const navigate = useNavigate();

    return (
        <div className='bgStyle'>
            <section className='lastSlideSection'>
                <div className='message'>
                    Thank you for participating! Stay tuned to find out if you're the lucky winner of the Bhoomi token airdrop! 🌳✨
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
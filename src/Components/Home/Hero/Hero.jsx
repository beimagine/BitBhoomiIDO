import React from 'react';
// import Carousel from "../Carousel/Carousel";
// import MainContent from "../MainContent/mainContent";
// import Team from "../Team/team";
// import Roadmap from "../Roadmap/roadmap";
// import Tokenomics from "../Tokenomics/tokenomics";
import './Hero.css';

const Hero = () => {
    return (
        <>
            <section className="heroSection">
                <h1 className="heroMaintext">Welcome to BitBhoomi IDO</h1>

                <h1 className="heroTagline">Where Technology Meets Sustainability</h1>

                <div className="timerContainer">
                    <div className="timerBox">
                        <h2 className="number">12</h2>
                        <h4 className="unit">Days</h4>
                    </div>
                    <h2 className='colon' variant='h2'>:</h2>
                    <div className="timerBox">
                        <h2 variant="h4" className="number">20</h2>
                        <h4 variant="h6" className="unit">Hours</h4>
                    </div>
                    <h2 className='colon' variant='h2'>:</h2>
                    <div className="timerBox">
                        <h2 variant="h4" className="number">32</h2>
                        <h4 variant="h6" className="unit">Mins</h4>
                    </div>
                    <h2 className='colon' variant='h2'>:</h2>
                    <div className="timerBox">
                        <h2 variant="h4" className="number">12</h2>
                        <h4 variant="h6" className="unit">Sec</h4>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;
import React from 'react';
import Hero from './Hero/Hero';
import Carousel from './Carousel/Carousel';
import Highlight from './Highlights/Highlight';
import TokenSaleDetails from './TokenSaleDetails/TokenSaleDetails';
import Product from './Product/Product';
import WhitePaper from './WhitePaper/WhitePaper';
import Team from './Team/Team';
import Roadmap from './Roadmap/Roadmap';
import Tokenomics from './Tokenomics/Tokenomics';

const bgStyle = {
    background: 'center center/cover no-repeat',
    backgroundImage: 'url(bg-1.png), url(bg-2.png)',
    backgroundPosition: '0 10%',
}

const Home = () => {
    return (
        <>
            <div style={bgStyle}>
                <Hero />
                <Carousel />
            </div>
            <Highlight />
            <TokenSaleDetails />
            <Product />
            <WhitePaper />
            <Team />
            <Roadmap />
            <Tokenomics />
        </>
    )
}

export default Home;
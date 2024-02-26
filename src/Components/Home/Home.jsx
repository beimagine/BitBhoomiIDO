import React from 'react';
import Highlight from './Highlights/Highlight';
import TokenSaleDetails from './TokenSaleDetails/TokenSaleDetails';
import Product from './Product/Product';
import WhitePaper from './WhitePaper/WhitePaper';
import Team from './Team/Team';
import Roadmap from './Roadmap/Roadmap';
import Tokenomics from './Tokenomics/Tokenomics';


const Home = () => {
    return (
        <>
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
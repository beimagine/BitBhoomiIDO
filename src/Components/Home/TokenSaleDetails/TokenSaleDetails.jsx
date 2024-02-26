import React from 'react';
import './TokenSaleDetails.css';

const TokenSaleDetails = () => {
    return (
        <section className="section tokenSaleDetailsSection">
            <span className="tokenSaleHeadContainer">
                <h1>Token Sale Details</h1>
            </span>
            <span className="tokenDetailsContainer">
                <p>Initial Token Circulation</p>
                <p>10,000,000</p>
            </span>
            <span className="tokenDetailsContainer">
                <p>Price Per Token</p>
                <p>$0.10</p>
            </span>
            <span className="tokenDetailsContainer">
                <p>Initial Marked Cap</p>
                <p>$1m</p>
            </span>
            <span className="tokenDetailsContainer">
                <p>Total Max Supply</p>
                <p>$100,000,000</p>
            </span>
            <span className="tokenDetailsContainer">
                <p>Sale Start Time</p>
                <p>TBA</p>
            </span>
            <span className="tokenDetailsContainer">
                <p>Sale End Time</p>
                <p>TBA</p>
            </span>
            <span className="tokenDetailsContainer">
                <p>Total Distribution Time</p>
                <p>TBA</p>
            </span>
        </section>
    )
}

export default TokenSaleDetails
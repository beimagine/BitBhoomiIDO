import React, { useState } from 'react';
import './Highlight.css';

const Highlight = () => {
    const [openedAccordian, setOpenedAccordian] = useState("");

    const handleOpenAccordian = (text) => {
        setOpenedAccordian(text);
    }

    const handleCloseAccordian = () => {
        setOpenedAccordian("");
    }

    return (
        <section className="section">
            <h1 className="heading">Highlights</h1>
            <div className="hightlightsMainContainer">
                <div className="hightlightsContainer">
                    <div>
                        <span className="hightlight">
                            <h3>Holistic Solutions</h3>
                            <span
                                className="arrowWrapper"
                                onClick={() => handleOpenAccordian('holistic')}
                            >
                                <img src="/arrow-down.png" alt="" />
                            </span>
                        </span>
                        {
                            openedAccordian === 'holistic' &&
                            <div className="highlightInfo">
                                <span >
                                    <h3>Holistic Solutions</h3>
                                    <span
                                        className='arrowWrapper'
                                        onClick={handleCloseAccordian}
                                    >
                                        <img src="/up-arrow.png" alt="" />
                                    </span>
                                </span>
                                <p>BitBhoomi represents a holistic solution that seamlessly integrates technology and environmental stewardship, paving the way for a more sustainable future for generations to come.</p>
                            </div>
                        }
                    </div>
                    <div>
                        <span className="hightlight">
                            <h3>Comprehensive Features</h3>
                            <span
                                className="arrowWrapper"
                                onClick={() => handleOpenAccordian('comprehensive')}
                            >
                                <img src="/arrow-down.png" alt="" />
                            </span>
                        </span>
                        {
                            openedAccordian === 'comprehensive' &&
                            <div className="highlightInfo">
                                <span >
                                    <h3>Comprehensive Features</h3>
                                    <span
                                        className='arrowWrapper'
                                        onClick={handleCloseAccordian}
                                    >
                                        <img src="/up-arrow.png" alt="" />
                                    </span>
                                </span>
                                <p>With unique features like DMRV, revenue generation and impact reporting BitBhoomi empowers users to make a positive environmental impact while benefiting financially.</p>
                            </div>
                        }
                    </div>

                    <div>
                        <span className="hightlight">
                            <h3>Democratizing Tree Planting</h3>
                            <span
                                className="arrowWrapper"
                                onClick={() => handleOpenAccordian('democratizing')}
                            >
                                <img src="/arrow-down.png" alt="" />
                            </span>
                        </span>
                        {
                            openedAccordian === 'democratizing' &&
                            <div className="highlightInfo">
                                <span >
                                    <h3>Democratizing Tree Planting</h3>
                                    <span
                                        className='arrowWrapper'
                                        onClick={handleCloseAccordian}
                                    >
                                        <img src="/up-arrow.png" alt="" />
                                    </span>
                                </span>
                                <p>Through the introduction of digital tokens convertible into valuable carbon credits, BitBhoomi democratizes tree planting, making it accessible to individuals and organizations of all sizes.</p>
                            </div>
                        }
                    </div>

                    <div>
                        <span className="hightlight">
                            <h3>Revenue Generation Opportunities</h3>
                            <span
                                className="arrowWrapper"
                                onClick={() => handleOpenAccordian('revenue')}
                            >
                                <img src="/arrow-down.png" alt="" />
                            </span>
                        </span>
                        {
                            openedAccordian === 'revenue' &&
                            <div className="highlightInfo">
                                <span >
                                    <h3>Revenue Generation Opportunities</h3>
                                    <span
                                        className='arrowWrapper'
                                        onClick={handleCloseAccordian}
                                    >
                                        <img src="/up-arrow.png" alt="" />
                                    </span>
                                </span>
                                <p>BitBhoomi facilitates the trading of Ownership NFTs, offering users revenue generation opportunities through sustainable project ownership.</p>
                            </div>
                        }
                    </div>
                </div>
                <div className="fundContainer">
                    <div className="fundInfo">
                        <h5>Fundraise Goal</h5>
                        <h1>$1,000,000</h1>
                        <h5>Price Per Token</h5>
                        <h2>$0.10</h2>
                    </div>
                    <p className="tokenSale">Token Sale</p>
                </div>
            </div>
        </section >
    )
}

export default Highlight;
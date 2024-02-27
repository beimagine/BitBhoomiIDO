import React, { useState } from 'react';
import { highlightItems } from './highlightItems';
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
                    {
                        highlightItems.map((item, index) =>
                            <div key={index}>
                                <span className="hightlight">
                                    <h3>{item.title}</h3>
                                    <span
                                        className="arrowWrapper"
                                        onClick={() => handleOpenAccordian(item.key)}
                                    >
                                        <img src="/arrow-down.png" alt="" />
                                    </span>
                                </span>
                                {
                                    openedAccordian === item.key &&
                                    <div className="highlightInfo">
                                        <span >
                                            {/* <h3>{item.title}</h3> */}
                                            <span
                                                className='arrowWrapper'
                                                onClick={handleCloseAccordian}
                                            >
                                                <img src="/up-arrow.png" alt="" />
                                            </span>
                                        </span>
                                        <p>{item.content}</p>
                                    </div>
                                }
                            </div>
                        )
                    }
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
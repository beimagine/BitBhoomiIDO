import React from 'react';
import './Tokenomics.css';

const Tokenomics = () => {
    return (
        <>
            <section className="tokenomicsSection">
                <h1 className="heading">Tokenomics</h1>
                <div className="tokenomicsDoc">
                    <img src="/tokenomics.png" alt="" />
                </div>
                <div className="downloadBtnDiv">
                    <button className="downloadBtn">
                        Download
                        <img src="/download.png" alt="download_icon" />
                    </button>
                </div>
            </section>
        </>
    )
}

export default Tokenomics;
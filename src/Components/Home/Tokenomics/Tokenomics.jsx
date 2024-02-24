import React from 'react';

const Tokenomics = () => {
    return (
        <>
            <section style={{
                // margin: '5rem 0',
                padding: '4rem',
                background:'#034C09',
            }}>
                <h1 className="heading">Tokenomics</h1>
                <div style={{width:'70%'}}>
                    <img src="/tokenomics.png" alt="" />
                </div>
                <button className="downloadBtn">Download</button>
            </section>
        </>
    )
}

export default Tokenomics;
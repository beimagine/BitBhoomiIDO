import React from 'react';
import './WhitePaper.css';

const WhitePaper = () => {
    const handleDownload = () => {
        const filePath = '/BitBhoomi White Paper.pdf';
        const link = document.createElement('a');
        link.href = filePath;
        link.setAttribute('download', 'BitBhoomi White Paper.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <>
            <section className="paperSection">
                <h1 className="heading">White Paper</h1>
                <div className="paper">
                    <img src="/white_paper.jpg" alt="BitBhoomi_white_paper" />
                </div>
                <button className="downloadBtn" onClick={handleDownload}>Download</button>
            </section>
        </>
    )
}

export default WhitePaper;
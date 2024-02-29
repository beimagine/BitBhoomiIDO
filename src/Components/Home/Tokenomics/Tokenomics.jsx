import './Tokenomics.css';

const Tokenomics = () => {
    const handleDownload = () => {
        const filePath = 'https://drive.google.com/file/d/1KcwtSl2sZ35qZ_LpsGPHie1tpbnIFdg8/view?usp=sharing';
        const link = document.createElement('a');
        link.href = filePath;
        link.target = "_blank";
        link.setAttribute('download', 'BitBhoomi White Paper.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <>
            <section className="tokenomicsSection">
                <h1 className="heading">Tokenomics</h1>
                <div className="document">
                    <img src="/tokenomics.png" alt="" />
                </div>
                <div className="downloadBtnDiv" onClick={handleDownload}>
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
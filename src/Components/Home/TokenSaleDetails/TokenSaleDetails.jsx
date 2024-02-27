import './TokenSaleDetails.css';

const tokenDetails = [
    { label: 'Initial Token Circulation', value: '10,000,000' },
    { label: 'Price Per Token', value: '$0.10' },
    { label: 'Initial Market Cap', value: '$1m' },
    { label: 'Total Max Supply', value: '$100,000,000' },
    { label: 'Sale Start Time', value: 'March 25th, 12:30pm UTC' },
    { label: 'Sale End Time', value: 'April 25th, 12:30pm UTC' },
    { label: 'Total Distribution Time', value: '31 days' },
];

const TokenSaleDetails = () => {
    return (
        <section className="section tokenSaleDetailsSection">
            <span className="tokenSaleHeadContainer">
                <h1>Token Sale Details</h1>
            </span>
            {
                tokenDetails.map((item, index) =>
                    <span className="tokenDetailsContainer" key={index}>
                        <p>{item.label}</p>
                        <p>{item.value}</p>
                    </span>
                )
            }
        </section>
    );
}

export default TokenSaleDetails
import Navbar from '../Navbar/Navbar';
import Hero from './Hero/Hero';
import Carousel from './Carousel/Carousel';
import Highlight from './Highlights/Highlight';
import TokenSaleDetails from './TokenSaleDetails/TokenSaleDetails';
import Product from './Product/Product';
import WhitePaper from './WhitePaper/WhitePaper';
import Team from './Team/Team';
import Roadmap from './Roadmap/Roadmap';
import Tokenomics from './Tokenomics/Tokenomics';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className='bgStyle' >
                <Navbar />
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
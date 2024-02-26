import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Home/Hero/Hero';
import Carousel from './Components/Home/Carousel/Carousel';
import "./App.css"

function App() {
  return (
    <>
      <div className='BGStyle' >
        <div className='radial'>
        <Navbar />
        <Hero />
        </div>
        <Carousel />
      </div>
      <Home />
      <Footer />
    </>
  )
}

export default App

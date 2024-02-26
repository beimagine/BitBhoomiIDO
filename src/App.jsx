import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Home/Hero/Hero';
import Carousel from './Components/Home/Carousel/Carousel';
import { Routes, Route, Link } from 'react-router-dom';
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

      <Routes>
        <Route path="/" exact component={Home} />
      </Routes>
    </>
  )
}

export default App

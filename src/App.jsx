import { useState } from 'react';
import Home from './Components/Home/Home';
import Airdrop from './Components/Airdrop/Airdrop';
import Footer from './Components/Footer/Footer';
import Slide from './Components/Airdrop/Slide';
import Slide5 from './Components/Airdrop/Slide5';
import Slide6 from './Components/Airdrop/Slide6';
import LastSlide from './Components/Airdrop/LastSlide';
import { Routes, Route } from 'react-router-dom';
import "./App.css"

import { createContext } from 'react';

export const MyContext = createContext("");

function App() {
  // const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [userData, setUserData] = useState({})

  return (
    <MyContext.Provider value={{ userData, setUserData }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airdrop" element={<Airdrop />} />
        <Route path="/airdrop/slide1" element={<Slide index="1" />} />
        <Route path="/airdrop/slide2" element={<Slide index="2" />} />
        <Route path="/airdrop/slide3" element={<Slide index="3" />} />
        <Route path="/airdrop/slide4" element={<Slide index="4" />} />
        <Route path="/airdrop/slide5" element={<Slide5 />} />
        <Route path="/airdrop/slide6" element={<Slide6 />} />
        <Route path="/airdrop/lastSlide" element={<LastSlide />} />
      </Routes>
      <Footer />
    </MyContext.Provider>
  )
}

export default App

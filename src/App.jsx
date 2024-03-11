import { useState } from 'react';
import Home from './Components/Home/Home';
import Airdrop from './Components/Airdrop/airdrop';
import Footer from './Components/Footer/Footer';
import Slide from './Components/Airdrop/slide';
import Slide5 from './Components/Airdrop/slide5';
import Slide6 from './Components/Airdrop/slide6';
import LastSlide from './Components/Airdrop/lastSlide';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import "./App.css"

import { createContext } from 'react';

export const MyContext = createContext("");

function App() {
  const [userData, setUserData] = useState({})

  return (
    <MyContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/airdrop" element={<Airdrop />} />
        <Route path="/airdrop/slide1" element={<Slide index="1" />} />
        <Route path="/airdrop/slide2" element={<Slide index="2" />} />
        <Route path="/airdrop/slide3" element={<Slide index="3" />} />
        <Route path="/airdrop/slide4" element={<Slide index="4" />} />
        <Route path="/airdrop/slide5" element={<Slide5 />} />
        <Route path="/airdrop/slide6" element={<Slide6 />} />
        <Route path="/airdrop/lastSlide" element={<LastSlide />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </MyContext.Provider>
  )
}

export default App

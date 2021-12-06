// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Pages
import Nav from './components/Nav/Nav';

import Home from './pages/Home';
import Showcase from './pages/Showcase';
import PastWork from './pages/PastWork';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/showcase" element={<Showcase />} />
          <Route exact path="/pastwork" element={<PastWork />} />
          <Route exact path="/aboutme" element={<AboutMe />} />
          <Route exact path="/contactme" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Nav from './components/Nav';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutme" component={AboutMe} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

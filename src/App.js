// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// Pages
import Home from './pages/Home';
import Nav from './components/Nav';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

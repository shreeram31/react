import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Card1 from './Card1';

function Home() {
  return <dev>
    <Card1 />
  </dev>
}

function About() {
  return <h2>-Unleash the power within you, fuel up with our energy drink!
Revitalize your body and mind, energize with us!
Feel the surge of power with our energy drink.
Recharge your body, conquer the day.
Stay unstoppable with our energizing concoction.</h2>;
}

function Contact() {
  return <h2>Anytime
    📞 vikram:7795002873💔</h2>;
}

function Routerex() {
  return (
    <Router>
      <nav>
        
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Routerex;
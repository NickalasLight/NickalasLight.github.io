import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar.js';
import About from './pages/About.js';
import Blog from './pages/Blog.js';
import Contact from './pages/Contact.js';
import Portfolio from './pages/Portfolio.js';
import ReactGA from 'react-ga4';
const App = () => {
    useEffect(() => {
        ReactGA.initialize('censored'); // Replace with your Measurement ID
        ReactGA.send({ hitType: 'pageview', page: window.location.pathname }); // Tracks a pageview for the initial load
    }, []);

    return (
      <Router>
        <div className="app-container">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<About/>} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
};

export default App;

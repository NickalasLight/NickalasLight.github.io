// App.js
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar.js';
import About from './pages/About.js';
import Books from './pages/Books.js';
import Blog from './pages/Blog.js';
import Podcasts from './pages/Podcasts.js';
import Talks from './pages/Talks.js';
import Misc from './pages/Misc.js';
import Contact from './pages/Contact.js';

const App = () => {
  return (
      <Router>
        <div className="app-container">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<About/>} />
              <Route path="/about" element={<About />} />
              <Route path="/books" element={<Books />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/podcasts" element={<Podcasts />} />
              <Route path="/talks" element={<Talks />} />
              <Route path="/misc" element={<Misc />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
};

export default App;

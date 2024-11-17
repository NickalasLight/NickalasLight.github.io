import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';

function App() {
  const [count, setCount] = useState(0)

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
}

export default App

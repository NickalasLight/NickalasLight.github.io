// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Optional for styling

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/podcasts">Podcasts</Link></li>
                <li><Link to="/talks">Talks</Link></li>
                <li><Link to="/misc">Misc</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;

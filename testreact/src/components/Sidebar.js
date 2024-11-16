// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Optional for styling

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>

            </ul>
        </div>
    );
};

export default Sidebar;

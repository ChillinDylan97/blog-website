import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
    const Nav=()=>{
        const [menuOpen,setMenuOpen]=useState(false);
        const toggleMenu=()=>{setMenuOpen(!menuOpen);
        }
    return (
        <nav className={` navbar ${menuOpen ? "open" : ""}`}>
            
            
            
            <div className="menu-icon" onClick={toggleMenu}>
                
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
        
            <ul className={`nav-links ${menuOpen ? "visible":""}`}>
            <SearchBar />
            <li>
                <Link to="/">Home</Link>
                </li>
             <li>
                <Link to="/about">About Me</Link>
                </li>
            <li>
                <Link to="/contact">Contact</Link>
                </li>
                <li>
                <Link to="/CreatePost">Create Post</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;
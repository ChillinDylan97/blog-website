import React from 'react';
import logo from '../images/Placeholder.jpg';
const Footer=()=>{
    return (
    <footer>
        <section>
            <div className='author-info'>
                <img src={logo} alt=''/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Contact</a></li>
                    <li><a href='/'>Subscribe</a></li>
                    
                </ul>
            </div>
            
            <div>
                <h3>Social Media</h3>
                <ul>
                <li><a href='/'>Twitter</a></li>
                    <li><a href='/'>Facebook</a></li>
                    <li><a href='/'>Instagram</a></li>
                </ul>
            </div>
        </section>
    </footer>
    )
}
export default Footer;
import React from 'react';
import bannerImg from '../images/Placeholder.jpg'
const Header=() => {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Title</h2>
                    <h3>Subtitle</h3>
                    <p>Description</p>
                    <a href="/Temporary">
                    <button aria-label='On Click'>
                        Button
                    </button>
                    </a>
                </div>
                <div className='banner-img'>
                    <img src={bannerImg} alt='' />
                </div>
            </section>
        </header>
    )
}
export default Header;
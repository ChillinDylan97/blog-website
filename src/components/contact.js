import React from 'react';
import bannerImg from '../images/Placeholder.jpg'

import Nav from './Nav';
import Footer from './Footer';

const Contact=()=>{
    return(

            <header>

          <Nav/>
          <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Title</h2>
                    <h3>Subtitle</h3>
                    <p>This is another test</p>
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
          <Footer/>

          </header>

    )
}
export default Contact;
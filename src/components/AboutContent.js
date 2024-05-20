import React from 'react';
import aboutPost from '../aboutPost';

const AboutContent=()=> {

    return (
<div className='about-container'>
    
        <div className = 'about-cards'>
            {
                aboutPost.map(aboutPost=><div key={aboutPost.id} className='about-items'>
                    
                    <div className='about-content'>
                        <div className='about-heading'>
                        <h2> About Me </h2>
                        
                        
                        </div>
                        
                        <img src={aboutPost.image}/>
                        <p>{aboutPost.description}</p>
                        
                        
                    </div>
                    </div>)
                }
        </div>
    </div>
    );
}
export default AboutContent;
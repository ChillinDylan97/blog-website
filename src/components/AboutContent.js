import React from 'react';
import post from '../post';

const AboutContent=()=> {

    return (
<div className='about-container'>
    
        <div className = 'about-cards'>
            {
                post.map(post=><div key={post.id} className='about-items'>
                    
                    <div className='about-content'>
                        <div className='about-heading'>
                        <h2> About Me </h2>
                        
                        
                        </div>
                        
                        <img src={post.image}/>
                        <p>{post.description}</p>
                        
                        
                    </div>
                    </div>)
                }
        </div>
    </div>
    );
}
export default AboutContent;
import React from 'react';
import Post from '../post';

import { Link } from 'react-router-dom';


const Main=()=> {

    return (
<div className='post-container'>

        <div className = 'cards'>
            { 
                Post.map(Post=><div key={Post.id} className='post-items'>

                    <div className='post-content'>
                        <div className='heading'>
                        <h2><Link to="/testPost">{Post.title}</Link>  </h2>

                        </div>
                       
                        <img src={Post.image}/>
                        

                        <footer class="post-footer"> 
                        <div className = 'date'><h5>May 1, 2025</h5></div>
                            <span className="tags">Tags:&nbsp;
                                <a href="https://www.linkedin.com/in/dylanjgilbert/" rel="tag">tag placeholder</a>, &nbsp;
                                <a href="https://www.linkedin.com/in/dylanjgilbert/" rel="tag">tag placeholder 2</a> &nbsp;
                            </span>

                            
                        </footer>

                    </div>
                    </div>)
                }
        </div>
    </div>
    );

}
export default Main;
import React from 'react';
import Post from '../post';
import Main2 from './Main2';
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
/* div content*/
/* div main*/
/* div main 2*/
/* h2 date-header*/
/* div class post*/
/* h3 class post title*/
/* div class post-body*/
/* div content*/
/* div content*/

/* Add posts */
/* search posts */
    /* search tags*/
/* (DONE)Add comments */
/* (DONE) Send contact request */

/*Likes? */
/* (DONE)Comment Likes? */
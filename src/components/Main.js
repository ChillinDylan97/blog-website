import React from 'react';
import post from '../post';
import CommentSection from './CommentSection';


const Main=()=> {

    return (
<div className='post-container'>
    
        <div className = 'cards'>
            {
                post.map(post=><div key={post.id} className='post-items'>
                    
                    <div className='post-content'>
                        <div className='heading'>
                        <h2> {post.title} </h2>
                        
                        
                        </div>
                        <div className = 'date'><h5>May 1, 2025</h5></div>
                        <img src={post.image}/>
                        <p>{post.description}</p>
                        
                        <footer class="post-footer">
                            <span className="tags">Tags:&nbsp;
                                <a href="https://www.linkedin.com/in/dylanjgilbert/" rel="tag">tag placeholder</a>, &nbsp;
                                <a href="https://www.linkedin.com/in/dylanjgilbert/" rel="tag">tag placeholder 2</a> &nbsp;
                            </span>
                           
                            <CommentSection post={post}/>
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
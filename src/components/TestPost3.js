import Nav from './Nav';
import Footer from './Footer';
import Post from '../post';
import CommentSection from './CommentSection';

const post3 = Post;

const TestPost3=()=> {

    return (
        <div><Nav/>
<div className='post-container'>
        <div className = 'cards'>
            {
                post3.map(post3=><div key={post3.id} className='post-items'>

                    <div className='post-content'>
                        <div className='heading'>
                        <h2> {post3.title} </h2>

                        </div>
                        <div className = 'date'><h5>May 1, 2025</h5></div>
                        <img src={post3.image}/>
                        <p>{post3.description}</p>

                        <footer class="post-footer">
                            <span className="tags">Tags:&nbsp;
                                <a href="https://www.linkedin.com/in/dylanjgilbert/" rel="tag">tag placeholder</a>, &nbsp;
                                <a href="https://www.linkedin.com/in/dylanjgilbert/" rel="tag">tag placeholder 2</a> &nbsp;
                            </span>

                            <CommentSection post={post3}/>
                        </footer>

                    </div>
                    </div>
                    )
                }
        </div>
    </div><Footer />
    </div>
    );

}
export default TestPost3;
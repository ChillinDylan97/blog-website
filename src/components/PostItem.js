import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({postID, category, title, description, authorID, thumbnail}) => {
    return (
        <article className='post'>
            <div className='post_thumbnail'>
                <img src={thumbnail} alt={title} />
                </div>
                <div className='post_content'>
                    <Link to={`/post/${postID}`}>
                        <h3>{title}</h3>
                    </Link>
                    <p>{description}</p>
                    <div className='post_footer'>
                        
                </div>
            </div>
        </article>
    )
}

export default PostItem;
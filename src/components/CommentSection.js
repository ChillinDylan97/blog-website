import { DiscussionEmbed } from 'disqus-react';
import React from 'react';


function CommentSection ({post}) {
  const pageUrl = typeof window !== 'undefined'? window.location.href : ""
  const commentConfig = {
    url: pageUrl,
    identifier: post,
    title: post.title
  }
    return (
      
        <DiscussionEmbed
          shortname='example'
          config={commentConfig} />
            )
          }
  export default CommentSection;
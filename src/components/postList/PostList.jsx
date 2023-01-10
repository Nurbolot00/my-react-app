import React from 'react';
import PostItem from '../postItem/PostItem';

const PostList = ({posts}) => {
    return (
        <div>
        <h1>List of Posts</h1>
        {posts.map((post,index) => (
          <PostItem number={index+1} title={post.title} key={post.id} body={post.body}/>
         
        ))}
      </div>
    );
};

export default PostList;
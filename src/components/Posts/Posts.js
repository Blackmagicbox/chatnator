import React from 'react';
import Post from './Post'
import './Posts.scss';

const Posts = ({posts}) => {

    return (
        <div className="posts">
            <div className="posts-list">
                {posts.map(post => <Post key={post.timestamp} {...post} />)}
            </div>
        </div>
    );
};

export default Posts;
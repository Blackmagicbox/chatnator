import React, { useEffect, useRef } from 'react';
import Post from './Post'
import './Posts.scss';

const Posts = ({posts}) => {
    const endOfTheList = useRef(null);
    const scrollToBottom = () => {
        endOfTheList.current.scrollIntoView()
    };
    useEffect(scrollToBottom, [posts]);
    return (
        <div className="posts">
            <div className="posts-list">
                {posts.map(post => <Post key={post.timestamp} {...post} />)}
            </div>
            <div ref={endOfTheList}/>
        </div>
    );
};

export default Posts;
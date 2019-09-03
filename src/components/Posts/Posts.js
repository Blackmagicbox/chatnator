// @flow
import React from 'react';
import Post from './Post'
import './Posts.scss';

const Posts = () => {
    const posts = [
        {
            author: 'Daniel',
            message:
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam`,
            time: '02 Mar 2019 13:24'
        },
        {
            author: null,
            message:
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam`,
            time: '02 Mar 2019 13:28'
        },
    ];
    return (
        <div className="posts">
            {posts.map(post => <Post {...post} />)}
        </div>
    );
};

export default Posts;
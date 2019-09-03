import React from 'react';
import './Posts.scss';

const Posts = () => {
    return (
        <div className="posts">
            <div className="post they">
                <div className="post-their">
                    <span className="author">Daniel</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam
                    </p>
                    <span className="time">02 Mar 2019 13:24</span>
                </div>
            </div>
            <div className="post me">
                <div className="post-mine">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam
                    </p>
                    <span className="time">02 Mar 2019 13:24</span>
                </div>
            </div>
        </div>
    );
};

export default Posts;
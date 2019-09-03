import React from 'react';

const Post = ({author, message, time}) => {
    return (
        <div className={`post ${author ? 'they' : 'me'}`}>
            <div className={`post-${author ? 'their' : 'mine'}`}>
                {author ? <span className="author">{author}</span> : null}
                <p>
                   {message}
                </p>
                <span className="time">{time}</span>
            </div>
        </div>
    );
};

export default Post
import React from 'react';
import moment from "moment";

const Post = ({author, message, timestamp}) => {
    return (
        <div className={`post ${author === 'user' ? 'me' : 'they'}`}>
            <div className={`post-${author === 'user' ? 'mine' : 'their'}`}>
                {author !== 'user' ? <span className="author">{author}</span> : null}
                <p>
                   {message}
                </p>
                <span className="time">{moment(parseInt(timestamp)).format('DD MMM, h:mm:ss')}</span>
            </div>
        </div>
    );
};

export default Post
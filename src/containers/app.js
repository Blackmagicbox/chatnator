import React, { useState } from 'react';
import InputGroup from '../components/InputGroup/InputGroup';
import Posts from '../components/Posts/Posts';
import './main.scss';

const chatWindow = () => {
    return (
        <div className="chat-window">
            <div className="chat-container">
                <Posts />
                <InputGroup />
            </div>
        </div>
    )
};
export default chatWindow;


import React, { useState } from 'react';
import InputGroup from '../components/InputGroup/InputGroup';
import './main.scss';

const chatWindow = () => {
    return (
        <div className="chat-window">
            <div className="chat-container">
                <div className="posts">
                    test
                </div>
                <InputGroup />
            </div>
        </div>
    )
};
export default chatWindow;


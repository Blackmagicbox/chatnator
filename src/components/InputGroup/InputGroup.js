import React from 'react';
import SendBtn from './paper-plane.svg'
import SVG from 'react-inlinesvg'
import './InputGroup.scss'

const InputGroup = () => {
    return (
        <div className="input-group">
            <div className="input-field">
                <input className="text-input" type="text"/>
            </div>
            <button className="input-btn-send">
                <SVG src={SendBtn}/>
            </button>
        </div>
    )
};

export default InputGroup;
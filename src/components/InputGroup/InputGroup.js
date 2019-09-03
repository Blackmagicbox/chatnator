import React from 'react';
import SendBtn from './paper-plane.svg'
import SVG from 'react-inlinesvg'

const InputGroup = () => {
    return (
        <div className="input-group">
            <input className="input-field" type="text"/>
            <button className="input-field-btn-send">
                <SVG src={SendBtn} />
            </button>
        </div>
    )
};

export default InputGroup;
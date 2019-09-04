import React, {useState} from 'react';
import SendBtn from './paper-plane.svg'
import SVG from 'react-inlinesvg'
import './InputGroup.scss'

const InputGroup = ({onSendMessage}) => {
    const [message, setMessage ] = useState('');
    const handleClick = () => {
        if(message !== '') {
            onSendMessage(message);
            setMessage('');
        }
    };
    return (
        <div className="input-group">
            <div className="input-field">
                <input onChange={(e) => setMessage(e.target.value)} className="text-input" type="text" value={message}/>
            </div>
            <button onClick={handleClick} className="input-btn-send">
                <SVG src={SendBtn}/>
            </button>
        </div>
    )
};

export default InputGroup;
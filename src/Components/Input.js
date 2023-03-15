import React from 'react';
import './Input.css';

const Input = (props) => {
    return <input className="Input" placeholder={props.placeholder} />;
};

export default Input;

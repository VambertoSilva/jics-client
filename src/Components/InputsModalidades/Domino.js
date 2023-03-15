import React from 'react';
import Input from '../Input';
import './Domino.css';

const Domino = () => {


    return (
        <div>
            <h1 className="header">Domino</h1>
            <div class="divider"></div>
            <Input placeholder='Nome da Dupla'/>
        </div>
    );
};

export default Domino;

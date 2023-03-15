import React from 'react';
import Input from '../Input';
import './Futebol.css';

const Futebol = () => {


    return (
        <div>
            <h1 className="header">Futebol</h1>
            <div class="divider"></div>
            <Input placeholder='Nome da Equipe'/>
        </div>
    );
};

export default Futebol;

import React from 'react';
import Input from '../Input';
import { DataContext } from '../FormMain';

import './Domino.css';

const Domino = () => {
    const handlerInputDupla = (event) => {
        DataContext._currentValue({
            Modalidade: 'Domino',
            SubModalidade: 'NomeDaDupla',
            Valor: event.target.value,
        });
    };

    return (
        <div>
            <h1 className="header">Domino</h1>
            <div class="divider"></div>
            <Input placeholder="Nome da Dupla" onChange={handlerInputDupla} />
        </div>
    );
};

export default Domino;

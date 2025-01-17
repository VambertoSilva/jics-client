import React, { useState } from 'react';
import Input from '../Input';
import './Tenis.css';
import { DataContext } from '../FormMain';

const Tenis = () => {
    const [nomedadupla, setnomedupla] = useState();

    let clicked = true;
    const [btnIndividual, setIndividual] = useState(clicked);
    const [btnDupla, setDupla] = useState(clicked);

    const clickindividual = () => {
        setIndividual(!btnIndividual);
        DataContext._currentValue({
            Modalidade: 'Tenis',
            SubModalidade: 'Individual',
            Valor: btnIndividual,
        });
    };

    const clickdupla = () => {
        setDupla(!btnDupla);
        setnomedupla(btnDupla);
        DataContext._currentValue({
            Modalidade: 'Tenis',
            SubModalidade: 'Dupla',
            Valor: btnDupla,
        });
    };

    const handlerInputDupla = (event) => {
        DataContext._currentValue({
            Modalidade: 'Tenis',
            SubModalidade: 'NomeDaDupla',
            Valor: event.target.value,
        });
    };

    return (
        <div className="tenis">
            <h1 className="header">Tênis de Mesa</h1>
            <div class="divider"></div>
            <div className="tenisdata">
                <div>
                    <input
                        className="checkbox-round"
                        type="checkbox"
                        name="individual"
                        value="true"
                        onClick={clickindividual}
                    />
                    <label className="label">Individual</label>
                </div>
                <div>
                    <input
                        className="checkbox-round"
                        type="checkbox"
                        name="dupla"
                        value="true"
                        onClick={clickdupla}
                    />
                    <label className="label">Dupla</label>
                </div>
            </div>
            {nomedadupla && (
                <Input
                    placeholder={'Nome da Dupla'}
                    onChange={handlerInputDupla}
                />
            )}
        </div>
    );
};

export default Tenis;

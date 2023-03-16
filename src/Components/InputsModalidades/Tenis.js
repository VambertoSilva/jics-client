import React, { useState } from 'react';
import Input from '../Input';
import './Tenis.css';

const Tenis = () => {
    const [nomedadupla, setnomedupla] = useState();
    
    let clicked = true;
    const [btnIndividual, setIndividual] = useState(clicked);
    const [btnDupla, setDupla] = useState(clicked);

    const clickindividual = () => {
        setIndividual(!btnIndividual);
    };

    const clickdupla = () => {
        setDupla(!btnDupla);
        setnomedupla(btnDupla);
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
            {nomedadupla && <Input placeholder={'Nome da Dupla'} />}
        </div>
    );
};

export default Tenis;

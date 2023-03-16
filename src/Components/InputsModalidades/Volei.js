import React, { useState } from 'react';
import Input from '../Input';
import './Volei.css';

const Volei = () => {
    const [nomedadupla, setnomedadupla] = useState();
    const [nomedaquarteto, setnomequarteto] = useState();
    
    let clicked = true;
    const [btnDupla, setDupla] = useState(clicked);
    const [btnQuarteto, setQuarteto] = useState(clicked);

    const clickdupla = () => {
        setDupla(!btnDupla);
        setnomedadupla(btnDupla);
    };

    const clickquarteto = () => {
        setQuarteto(!btnQuarteto);
        setnomequarteto(btnQuarteto);
    };

    return (
        <div className="volei">
            <h1 className="header">Vôlei</h1>
            <div class="divider"></div>
            <div className="voleidata">
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
                <div>
                    <input
                        className="checkbox-round"
                        type="checkbox"
                        name="quarteto"
                        value="true"
                        onClick={clickquarteto}
                    />
                    <label className="label">Quarteto</label>
                </div>
            </div>
            {nomedadupla && <Input placeholder={'Matricula da dupla'} />}
            {nomedaquarteto && <Input placeholder={'Nome da Equipe'} />}
        </div>
    );
};

export default Volei;

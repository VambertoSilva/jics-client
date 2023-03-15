import React, { useState } from 'react';
import Input from '../Input';
import './Atletismo.css';

const Atletismo = () => {
    const [nomedadupla, setnomedupla] = useState();
    
    let clicked = true;
    const [btnCorrida50, setCorrida50] = useState(clicked);
    const [btnCorrida100, setCorrida100] = useState(clicked);
    const [btnCorridaRevezamento, setCorridaRevezamento] = useState(clicked);
    const [btnSaltoDist, setSaltoDist] = useState(clicked);
    const [btnSaltoAlt, setSaltoAlt] = useState(clicked);
    const [btnArremesso, setArremesso] = useState(clicked);


    const clickCorrida50 = () => {
        setCorrida50(!btnCorrida50);
    };

    const clickCorrida100 = () => {
        setCorrida100(!btnCorrida100);
    };

    const clickSaltoDist = () => {
        setSaltoDist(!btnSaltoDist);
    };

    const clickSaltoAlt = () => {
        setSaltoAlt(!btnSaltoAlt);
    };

    const clickArremesso = () => {
        setArremesso(!btnArremesso);
    };

    const clickCorridaRevezamento = () => {
        setCorridaRevezamento(!btnCorridaRevezamento);
        setnomedupla(btnCorridaRevezamento);
    };

    return (
        <div>
            <h1 className="header">Atletismo</h1>
            <div class="divider"></div>
            <div className="atletismodata">
                <div>
                    <input className="checkbox-round" type="checkbox" name="individual" value="true" onClick={clickCorrida50}/>
                    <label className="label">Corrida 50m</label>
                </div>
                <div>
                    <input className="checkbox-round" type="checkbox" name="dupla" value="true" onClick={clickCorrida100} />
                    <label className="label">Corrida 100m</label>
                </div>
                <div>
                    <input className="checkbox-round" type="checkbox" name="dupla" value="true" onClick={clickCorridaRevezamento} />
                    <label className="label">Corrida em Revezamento</label>
                </div>
                <div>
                    <input className="checkbox-round" type="checkbox" name="individual" value="true" onClick={clickSaltoDist}/>
                    <label className="label">Salto em Distância</label>
                </div>
                <div>
                    <input className="checkbox-round" type="checkbox" name="dupla" value="true" onClick={clickSaltoAlt} />
                    <label className="label">Salto em Altura</label>
                </div>
                <div>
                    <input className="checkbox-round" type="checkbox" name="individual" value="true" onClick={clickArremesso}/>
                    <label className="label">Arremesso de Peso</label>
                </div>
            </div>
            {nomedadupla && <Input placeholder={'Nome da Dupla'} />}
        </div>
    );
};

export default Atletismo;

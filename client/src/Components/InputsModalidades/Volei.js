import React, { useState } from 'react';
import Input from '../Input';
import './Volei.css';

const Volei = () => {
    const [nomedadupla, setnomedadupla] = useState();
    const [nomedaquarteto, setnomequarteto] = useState();

    const clickdupla = () => {
        setnomedadupla(true);
    };
    const clickquarteto = () => {
        setnomequarteto(true);
    };
    return (
        <div>
            <h4 className="headervolei">Vôlei</h4>
            <div class="divider"></div>
            <div className="sexo" onClick={clickdupla}>
                <input type="radio" name="volei" value="Masculino" />
                <label className="label">Masculino - dupla</label>
                <input
                    className="SecondInput"
                    type="radio"
                    name="volei"
                    Value="Feminino"
                />
                <label className="label">Feminino - dupla</label>
            </div>
            <div onClick={clickquarteto}>
                <input type="radio" value="Masculino" />
                <label className="label">Volei - Quarteto</label>
            </div>
            {nomedadupla && <Input placeholder={'Matricula da dupla'} />}
            {nomedaquarteto && <Input placeholder={'Nome da Equipe'} />}
        </div>
    );
};

export default Volei;

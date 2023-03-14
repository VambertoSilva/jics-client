import React, { useState } from 'react';
import './FormMain.css';
import Modalidades from './Modalidades';
import Volei from './InputsModalidades/Volei';
import Jogos from '../Context/Jogos';

const FormMain = (props) => {
    let clicked = false;
    const [btnModalidade, setModalidade] = useState(clicked);
    const [jogos, setjogos] = useState({
        titulo: 'o errado aqui',
        Volei: false,
        Futebol: false,
        Queimada: false,
        Handebol: false,
        Tenis: false,
        Xadrez: false,
        JustDance: false,
        FIFA: false,
        Corrida: false,
        Salto: false,
        Arremesso: false,
    });
    const certo = {
        Titulo: 'O certo aqui',
        Volei: jogos.Volei,
        Futebol: jogos.Futebol,
        Queimada: jogos.Queimada,
        Handebol: jogos.Handebol,
        Tenis: jogos.Tenis,
        Xadrez: jogos.Xadrez,
        JustDance: jogos.JustDance,
        FIFA: jogos.FIFA,
        Corrida: jogos.Corrida,
        Salto: jogos.Salto,
        Arremesso: jogos.Arremesso,
    };
    // console.log(certo);

    const addJogos = (objJogos) => {
        setjogos({
            Volei: objJogos.Volei,
            Futebol: objJogos.Futebol,
            Queimada: objJogos.Queimada,
            Handebol: objJogos.Handebol,
            Tenis: objJogos.Tenis,
            Xadrez: objJogos.Xadrez,
            JustDance: objJogos.Domino,
            FIFA: objJogos.FIFA,
            Corrida: objJogos.Corrida,
            Salto: objJogos.Salto,
            Arremesso: objJogos.Arremesso,
        });
    };

    const eventClick = (event) => {
        if (btnModalidade) {
            setModalidade(false);
        } else {
            setModalidade(true);
        }
    };

    return (
        <div className="containerHeader">
            <input className="mainName" placeholder="Nome" />
            <input className="mainEmail" placeholder="Email" />
            <div className="containerForm">
                <input className="mainCourse" placeholder="Curso" />
                <input className="mainPeriodo" placeholder="Período" />
            </div>
            <button
                onClick={eventClick}
                className="modalidade"
                placeholder="Modalidade"
                type="button"
            >
                Modalidade
            </button>
            <Modalidades show={btnModalidade} setar={addJogos} />
            {certo.Volei && <Volei />}
        </div>
    );
};

export default FormMain;

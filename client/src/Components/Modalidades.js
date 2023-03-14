import React, { useState } from 'react';
import './Modalidades.css';
import Jogos from '../Context/Jogos';

const Modalidades = (props) => {
    const showModalidade = false;
    const [show, setShow] = useState(showModalidade);
    let [stateVolei, setVolei] = useState(false);
    let [stateFutebol, setFutebol] = useState(false);
    let [stateQueimada, setQueimada] = useState(false);
    let [stateHandebol, setHandebol] = useState(false);
    let [stateTenis, setTenis] = useState(false);
    let [stateXadrez, setXadrez] = useState(false);
    let [stateJustDance, setJustDance] = useState(false);
    let [stateDomino, setDomino] = useState(false);
    let [stateFIFA, setFIFA] = useState(false);
    let [stateCorrida, setCorrida] = useState(false);
    let [stateSalto, setSalto] = useState(false);
    let [stateArremesso, setArremesso] = useState(false);

    const _volei = stateVolei;

    const clickVolei = () => {
        if (!stateVolei) {
            setVolei(true);
            stateVolei = true;
        } else {
            setVolei(false);
            stateVolei = false;
        }
        enviar();
    };

    const clickFutebol = () => {
        if (!stateFutebol) {
            setFutebol(true);
            stateFutebol = true;
        } else {
            setFutebol(false);
            stateFutebol = false;
        }

        // props.setar({ Futebol: stateFutebol });
        enviar();
    };

    const clickQueimada = () => {
        if (!stateQueimada) {
            setQueimada(true);
            stateQueimada = true;
        } else {
            setQueimada(false);
            stateQueimada = false;
        }
        // props.setar({ Queimada: stateQueimada });
        enviar();
    };
    const clickHandebol = () => {
        if (!stateHandebol) {
            setHandebol(true);
            stateHandebol = true;
        } else {
            setHandebol(false);
            stateHandebol = false;
        }
        // props.setar({ Handebol: stateHandebol });
        enviar();
    };
    const clickTenis = () => {
        if (!stateTenis) {
            setTenis(true);
            stateTenis = true;
        } else {
            setTenis(false);
            stateTenis = false;
        }
        // props.setar({ Tenis: stateTenis });
        enviar();
    };
    const clickXadrez = () => {
        if (!stateXadrez) {
            setXadrez(true);
            stateXadrez = true;
        } else {
            setXadrez(false);
            stateXadrez = false;
        }
        // props.setar({ Xadrez: stateXadrez });
        enviar();
    };

    const clickJustDance = () => {
        if (!stateJustDance) {
            setJustDance(true);
            stateJustDance = true;
        } else {
            setJustDance(false);
            stateJustDance = false;
        }
        // props.setar({ JustDance: stateJustDance });
        enviar();
    };
    const clickDomino = () => {
        if (!stateDomino) {
            setDomino(true);
            stateDomino = true;
        } else {
            setDomino(false);
            stateDomino = false;
        }
        // props.setar({ Domino: stateDomino });
    };

    const clickFIFA = () => {
        if (!stateFIFA) {
            setFIFA(true);
            stateFIFA = true;
        } else {
            setFIFA(false);
            stateFIFA = false;
        }
        // props.setar({ FIFA: stateFIFA });
        enviar();
    };
    const clickCorrida = () => {
        if (!stateCorrida) {
            setCorrida(true);
            stateCorrida = true;
        } else {
            setCorrida(false);
            stateCorrida = false;
        }
        // props.setar({ Corrida: stateCorrida });
        enviar();
    };
    const clickSalto = () => {
        if (!stateSalto) {
            setSalto(true);
            stateCorrida = true;
        } else {
            setSalto(false);
            stateCorrida = false;
        }
        // props.setar({ Salto: stateSalto });
        enviar();
    };
    const clickArremesso = () => {
        if (!stateArremesso) {
            setArremesso(true);
            stateArremesso = true;
        } else {
            setArremesso(false);
            stateArremesso = false;
        }
        // props.setar({ Arremesso: stateArremesso });
        enviar();
    };

    const enviar = () => {
        setTimeout(() => {
            props.setar({
                Volei: stateVolei,
                Futebol: stateFutebol,
                Queimada: stateQueimada,
                Handebol: stateHandebol,
                Tenis: stateTenis,
                Xadrez: stateXadrez,
                JustDance: stateJustDance,
                Domino: stateDomino,
                FIFA: stateFIFA,
                Corrida: stateCorrida,
                Salto: stateSalto,
                Arremesso: stateArremesso,
            });
            console.log({
                titulo: 'o certo',
                Volei: stateVolei,
                Futebol: stateFutebol,
                Queimada: stateQueimada,
                Handebol: stateHandebol,
                Tenis: stateTenis,
                Xadrez: stateXadrez,
                JustDance: stateJustDance,
                Domino: stateDomino,
                FIFA: stateFIFA,
                Corrida: stateCorrida,
                Salto: stateSalto,
                Arremesso: stateArremesso,
            });
        }, 200);
    };

    return (
        <Jogos.Provider value={stateVolei}>
            {props.show && (
                <ul className="list-modalidade">
                    <li className="item " onClick={clickVolei}>
                        <span className="checkbox ">
                            <i
                                className={
                                    (stateVolei && '  fa-solid fa-check ') ||
                                    '  fa-solid fa-check check-icon '
                                }
                            ></i>
                        </span>
                        <span className="itemText">Vôlei</span>
                    </li>
                    <li className="item" onClick={clickFutebol}>
                        <span className="checkbox">
                            <i
                                className={
                                    (stateFutebol && '  fa-solid fa-check ') ||
                                    '  fa-solid fa-check check-icon '
                                }
                            ></i>
                        </span>
                        <span className="itemText">Futebol</span>
                    </li>
                    <li className="item" onClick={clickQueimada}>
                        <span className="checkbox">
                            <i
                                className={
                                    (stateQueimada && '  fa-solid fa-check ') ||
                                    '  fa-solid fa-check check-icon '
                                }
                            ></i>
                        </span>
                        <span className="itemText">Queimada</span>
                    </li>
                    <li className="item" onClick={clickHandebol}>
                        <span className="checkbox">
                            <i
                                className={
                                    (stateHandebol && '  fa-solid fa-check ') ||
                                    '  fa-solid fa-check check-icon '
                                }
                            ></i>
                        </span>
                        <span className="itemText"> Handebol</span>
                    </li>
                    <li className="item" onClick={clickTenis}>
                        <span className="checkbox">
                            <i
                                className={
                                    (stateTenis && '  fa-solid fa-check ') ||
                                    '  fa-solid fa-check check-icon '
                                }
                            ></i>
                        </span>
                        <span className="itemText">Tênis de mesa</span>
                    </li>
                    <li className="item" onClick={clickXadrez}>
                        <span className="checkbox">
                            <i
                                className={
                                    (stateXadrez && '  fa-solid fa-check ') ||
                                    '  fa-solid fa-check check-icon '
                                }
                            ></i>
                        </span>
                        <span className="itemText">Xadrez</span>
                    </li>
                    <li className="item" onClick={clickJustDance}>
                        <span className="checkbox">
                            <i
                                className={
                                    (stateJustDance &&
                                        '  fa-solid fa-check ') ||
                                    '  fa-solid fa-check check-icon '
                                }
                            ></i>
                        </span>
                        <span className="itemText">JustDance</span>
                    </li>
                    <li className="item" onClick={clickDomino}>
                        <span className="checkbox">
                            <i
                                className={
                                    (stateDomino && '  fa-solid fa-check ') ||
                                    '  fa-solid fa-check check-icon '
                                }
                            ></i>
                        </span>
                        <span className="itemText">Dominó</span>
                    </li>
                    <li className="item" onClick={clickFIFA}>
                        <span className="checkbox">
                            <i
                                className={
                                    (stateFIFA && '  fa-solid fa-check ') ||
                                    '  fa-solid fa-check check-icon '
                                }
                            ></i>
                        </span>
                        <span className="itemText">FIFA2023</span>
                    </li>
                    <li className="item" onClick={clickCorrida}>
                        <span className="checkbox">
                            <i
                                className={
                                    (stateCorrida && '  fa-solid fa-check ') ||
                                    '  fa-solid fa-check check-icon '
                                }
                            ></i>
                        </span>
                        <span className="itemText">Corrida</span>
                    </li>
                    <li className="item" onClick={clickSalto}>
                        <span className="checkbox">
                            <i
                                className={
                                    (stateSalto && '  fa-solid fa-check ') ||
                                    '  fa-solid fa-check check-icon '
                                }
                            ></i>
                        </span>
                        <span className="itemText">Salto</span>
                    </li>
                    <li className="item" onClick={clickArremesso}>
                        <span className="checkbox">
                            <i
                                className={
                                    (stateArremesso &&
                                        '  fa-solid fa-check ') ||
                                    '  fa-solid fa-check check-icon '
                                }
                            ></i>
                        </span>
                        <span className="itemText">Arremesso</span>
                    </li>
                </ul>
            )}
        </Jogos.Provider>
    );
};

export default Modalidades;

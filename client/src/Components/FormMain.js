import React, { useState } from 'react';
import './FormMain.css';
import Modalidades from './Modalidades';
import Volei from './InputsModalidades/Volei';
import Select from 'react-select';

const options = {
    cursos: [
        {value: 'meca', label: 'Mecatrônica'},
        {value: 'seg', label: 'Segurança do Trabalho'},
        {value: 'edif', label: 'Edificações'},
        {value: 'eng', label: 'Engenharia Mecânica'},
    ],
    sexos: [
        {value: 'man', label: 'Homem'},
        {value: 'woman', label: 'Mulher'},
    ],
    modelos: [
        {value: 'int', label: 'Integrado'},
        {value: 'sub', label: 'Subsequente'},
        {value: 'sup', label: 'Superior'},
    ],
    periodos: [],
}

for (var i = 1  ; i <= 10; i++) {
    options.periodos.push({value: String(i), label: String(i)+'°'})
}

const styles = {
    control: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: '#E2E8F0',
        color: '#7a7a7a',
        borderRadius: '1.1rem',
        border: 'none',
        marginTop: '0.8rem',
        fontFamily: 'ComfoortaMidi',
    }),
    menuList: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: '#E2E8F0',
        fontFamily: 'ComfoortaMidi'
    })
}


const FormMain = (props) => {

    const dropdowns = {
        curso: {
            selectedOption: false,
            setSelectedOption: false,
            options: options.cursos,
        },
        sexo: {
            selectedOption: false,
            setSelectedOption: false,
            options: options.sexos,
        },
        modelo: {
            selectedOption: false,
            setSelectedOption: false,
            options: options.modelos,
        },
        periodo: {
            selectedOption: false,
            setSelectedOption: false,
            options: options.periodos,
        },
    }   
    

    let clicked = false;
    const [btnModalidade, setModalidade] = useState(clicked);
    const [jogos, setjogos] = useState({
        titulo: 'o errado aqui',
        Volei: false,
        Futebol: false,
        Queimada: false,
        Tenis: false,
        Xadrez: false,
        Badminton: false,
        Domino: false,
        JogosEle: false,
        Atletismo: false,
    });
    const certo = {
        Titulo: 'O certo aqui',
        Volei: jogos.Volei,
        Futebol: jogos.Futebol,
        Queimada: jogos.Queimada,
        Tenis: jogos.Tenis,
        Xadrez: jogos.Xadrez,
        Badminton: jogos.Badminton,
        Domino: jogos.Domino,
        JogosEle: jogos.JogosEle,
        Atletismo: jogos.Atletismo,
    };

    const addJogos = (objJogos) => {
        setjogos({
            Volei: objJogos.Volei,
            Futebol: objJogos.Futebol,
            Queimada: objJogos.Queimada,
            Tenis: objJogos.Tenis,
            Xadrez: objJogos.Xadrez,
            Badminton: objJogos.Badminton,
            Domino: objJogos.Domino,
            JogosEle: objJogos.JogosEle,
            Atletismo: objJogos.Atletismo
        });
    };

    const eventClick = (event) => {
        setModalidade(!btnModalidade)
    };

    return (
        <div className="containerHeader">
            <input className="mainName formField" placeholder="Nome" />
            <input className="mainEmail formField" placeholder="Email" />
            <div className="containerForm">
                <Select 
                    defaultValue={dropdowns.curso.selectedOption}
                    onChange={dropdowns.curso.setSelectedOption}
                    options={dropdowns.curso.options}
                    className="mainCourse flexItem"
                    placeholder="Curso"
                    styles={
                        styles
                    }
                    hideSelectedOptions
                    />
                <Select
                    defaultValue={dropdowns.modelo.selectedOption}
                    onChange={dropdowns.modelo.setSelectedOption}
                    options={dropdowns.modelo.options}
                    styles={
                        styles
                    }
                    hideSelectedOptions
                    className="mainModelo flexItem" placeholder='Modelo'/>
                <div className='break'></div>
                <Select
                    defaultValue={dropdowns.periodo.selectedOption}
                    onChange={dropdowns.periodo.setSelectedOption}
                    options={dropdowns.periodo.options}
                    styles={
                        styles
                    }
                    hideSelectedOptions
                    className="mainPeriodo flexItem" placeholder='Período'/>
                <Select
                    defaultValue={dropdowns.sexo.selectedOption}
                    onChange={dropdowns.sexo.setSelectedOption}
                    options={dropdowns.sexo.options}
                    styles={
                        styles
                    }
                    hideSelectedOptions
                    className="mainSexo flexItem" placeholder='Sexo Biológico'/>

            </div>
            <button
                onClick={eventClick}
                className="modalidade formField"
                placeholder="Modalidades"
                type="button"
            >
                Modalidades
            </button>
            <Modalidades show={btnModalidade} setar={addJogos} />
            {certo.Volei && <Volei />}
        </div>
    );
};

export default FormMain;

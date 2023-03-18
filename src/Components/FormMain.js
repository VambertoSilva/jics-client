import React, { useState, createContext } from 'react';
import './FormMain.css';
import Modalidades from './Modalidades';
import Volei from './InputsModalidades/Volei';
import Futebol from './InputsModalidades/Futebol';
import Queimada from './InputsModalidades/Queimada';
import Tenis from './InputsModalidades/Tenis';
import Domino from './InputsModalidades/Domino';
import Badminton from './InputsModalidades/Badminton';
import Atletismo from './InputsModalidades/Atletismo';
import JogosEle from './InputsModalidades/JogosEle';
import Select from 'react-select';
let Data = 'Sem dado';

const dados = {
    Nome: '',
    Email: '',
    Curso: '',
    Periodo: '',
    Modelo: '',
    Sexo: '',
    Modalidades: {
        Volei: {
            Dupla: false,
            Quarteto: false,
            NomeDaDupla: '',
            NomeDaEquipe: '',
        },

        Futebol: {
            Equipe: false,
            NomeDaEquipe: '',
        },

        Queimada: {
            Equipe: false,
            NomeDaEquipe: '',
        },

        Tenis: {
            Individual: false,
            Dupla: false,
            NomeDaDupla: '',
        },
        Xadrez: false,

        Domino: {
            Dupla: false,
            NomeDaDupla: '',
        },

        JogosEle: {
            FIFA23: false,
            Tetris: false,
            JustDance: false,
        },

        Atletismo: {
            Corrida50: false,
            Corrida100: false,
            CorridaEmRevezamento: false,
            DuplaRevezamento: '',
            SaltoDistancia: false,
            SaltoAltura: false,
            Arremesso: false,
        },
        Badminton: {
            Individual: false,
            Dupla: false,
            NomeDaDupla: '',
        },
    },
};

const options = {
    cursos: [
        { name: 'Curso', value: 'meca', label: 'Mecatrônica' },
        { name: 'Curso', value: 'seg', label: 'Segurança do Trabalho' },
        { name: 'Curso', value: 'edif', label: 'Edificações' },
        { name: 'Curso', value: 'eng', label: 'Engenharia Mecânica' },
    ],
    sexos: [
        { name: 'Sexo', value: 'man', label: 'Homem' },
        { name: 'Sexo', value: 'woman', label: 'Mulher' },
    ],
    modelos: [
        { name: 'Modelo', value: 'int', label: 'Integrado' },
        { name: 'Modelo', value: 'sub', label: 'Subsequente' },
        { name: 'Modelo', value: 'sup', label: 'Superior' },
    ],
    periodos: [],
};

for (var i = 1; i <= 10; i++) {
    options.periodos.push({
        name: 'Periodo',
        value: String(i),
        label: String(i) + '°',
    });
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
        fontFamily: 'ComfoortaMidi',
    }),
};

export const DataContext = createContext((newData) => {
    const { Modalidade, SubModalidade, Valor } = newData;
    dados.Modalidades[Modalidade][SubModalidade] = Valor;
});

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
    };

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
            Atletismo: objJogos.Atletismo,
        });
    };

    const save = (event) => {
        const { name, value } = event.target || event;
        dados[name] = value;
        // console.log(dados);
    };

    const eventClick = (event) => {
        setModalidade(!btnModalidade);
        dados.Modalidades.Futebol.Equipe = certo.Futebol;
        dados.Modalidades.Queimada.Equipe = certo.Queimada;
        dados.Modalidades.Xadrez = certo.Xadrez;
        dados.Modalidades.Domino.Dupla = certo.Domino;
    };

    const submit = () => {
        console.log(dados);
    };

    return (
        <DataContext.Provider value={Data}>
            <form className="containerHeader">
                <input
                    className="mainName formField"
                    placeholder="Nome"
                    onChange={save}
                    name="Nome"
                />
                <input
                    className="mainEmail formField"
                    placeholder="Email"
                    onChange={save}
                    name="Email"
                />
                <div className="containerForm">
                    <Select
                        defaultValue={dropdowns.curso.selectedOption}
                        onChange={(dropdowns.curso.setSelectedOption, save)}
                        options={dropdowns.curso.options}
                        className="mainCourse flexItem"
                        placeholder="Curso"
                        styles={styles}
                        hideSelectedOptions
                    />
                    <Select
                        defaultValue={dropdowns.modelo.selectedOption}
                        onChange={(dropdowns.modelo.setSelectedOption, save)}
                        options={dropdowns.modelo.options}
                        styles={styles}
                        hideSelectedOptions
                        className="mainModelo flexItem"
                        placeholder="Modelo"
                    />
                    <div className="break"></div>
                    <Select
                        defaultValue={dropdowns.periodo.selectedOption}
                        onChange={(dropdowns.periodo.setSelectedOption, save)}
                        options={dropdowns.periodo.options}
                        styles={styles}
                        hideSelectedOptions
                        className="mainPeriodo flexItem"
                        placeholder="Período"
                    />
                    <Select
                        defaultValue={dropdowns.sexo.selectedOption}
                        onChange={(dropdowns.sexo.setSelectedOption, save)}
                        options={dropdowns.sexo.options}
                        styles={styles}
                        hideSelectedOptions
                        className="mainSexo flexItem"
                        placeholder="Sexo Biológico"
                    />
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
                {certo.Futebol && <Futebol />}
                {certo.Queimada && <Queimada />}
                {certo.Tenis && <Tenis />}
                {certo.Domino && <Domino />}
                {certo.JogosEle && <JogosEle />}
                {certo.Atletismo && <Atletismo />}
                {certo.Badminton && <Badminton />}
                <button type="button" className="submit" onClick={submit}>
                    Concluir
                </button>
            </form>
        </DataContext.Provider>
    );
};

export default FormMain;

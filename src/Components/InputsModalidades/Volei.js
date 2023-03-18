import React, { useContext, useState } from 'react';
import Input from '../Input';
import './Volei.css';
import { DataContext } from '../FormMain';
// console.log(DataContext);

const Volei = () => {
    const [nomedadupla, setnomedadupla] = useState();
    const [nomedaquarteto, setnomequarteto] = useState();
    let clicked = true;
    const [btnDupla, setDupla] = useState(clicked);
    const [btnQuarteto, setQuarteto] = useState(clicked);

    const clickdupla = () => {
        setDupla(!btnDupla);
        setnomedadupla(btnDupla);
        DataContext._currentValue({
            Modalidade: 'Volei',
            SubModalidade: 'Dupla',
            Valor: btnDupla,
        });
    };

    const clickquarteto = () => {
        setQuarteto(!btnQuarteto);
        setnomequarteto(btnQuarteto);
        DataContext._currentValue({
            Modalidade: 'Volei',
            SubModalidade: 'Quarteto',
            Valor: btnQuarteto,
        });
    };

    const handlerInputDupla = (event) => {
        DataContext._currentValue({
            Modalidade: 'Volei',
            SubModalidade: 'NomeDaDupla',
            Valor: event.target.value,
        });
        console.log('oi');
    };
    const handlerInputQuarteto = (event) => {
        DataContext._currentValue({
            Modalidade: 'Volei',
            SubModalidade: 'NomeDaEquipe',
            Valor: event.target.value,
        });
        console.log('oi');
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
              {nomedadupla && (
                  <Input
                      onChange={handlerInputDupla}
                      placeholder={'Matricula da dupla'}
                  />
              )}
              {nomedaquarteto && (
                  <Input
                      placeholder={'Nome da Equipe'}
                      onChange={handlerInputQuarteto}
                  />
              )}
          </div>
      );
};

export default Volei;

import React from 'react';
import FormMain from './Components/FormMain';
import {ReactComponent as ReactLogo} from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className="container">
            <ReactLogo className='logo'/>
            <h1 className="mainTitle">Inscrições para o jics </h1>
            <h2 className="mainSubtitle">inscrições do dia ** até o dia **</h2>
            <FormMain />
        </div>
    );
};

export default App;
<<<<<<< HEAD

=======
>>>>>>> 36918eb7669d5f9aaa56a043a5795f7b9900ccec

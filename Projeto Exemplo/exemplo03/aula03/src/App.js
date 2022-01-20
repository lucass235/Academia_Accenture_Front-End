import './App.css';
import React from 'react';
import Exemplo01 from './components/Exemplo01';
import Exemplo02 from './components/Exemplo02';
import Exemplo03 from './components/Exemplo03';

function App() {
  const [flag, setFlag] = React.useState(true);
  return (
    <div className="App">
      <p> Ola ReactJs</p>
      {/* <Exemplo01> </Exemplo01> */}
      {/* <Exemplo02> </Exemplo02> */}
      {flag && <Exemplo03> </Exemplo03>} {/* Se flag for true, renderiza o componente, se não, não renderiza */}

      <button onClick={() => setFlag(true)}>Montar</button>
      <button onClick={() => setFlag(false)}>Desmontar</button>
      </div>
  );
}

export default App;

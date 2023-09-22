import { useState } from 'react';
import './App.css';
import { Calculadora } from './components/Calculadora';
 

function App() {
  const [valorMilhiero, setValorMilhiero] = useState(70);
  const [valorDesconto, setValorDesconto] = useState(40);
  const [bonus, setBonus] = useState(200);
  const [qtdComprada, setQtdComprada] = useState(1);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="App">

      <div className='titulo'>
        <h2 >Calculadora de Milheiro</h2>
      </div>
      <label>
        Valor do Milheiro:
        <input
          type="number"
          value={valorMilhiero}
          onChange={(e) => setValorMilhiero(parseFloat(e.target.value))}
        />
      </label>

      <label>
        Valor do Desconto:
        <input
          type="number"
          step="0.01"
          value={valorDesconto}
          onChange={(e) => setValorDesconto(parseFloat(e.target.value))}
        />
      </label>

      <label>
        Valor do Bônus:
        <input
          type="number"
          step="0.01"  // ajuste os valores com precisão de duas casas decimais
          value={bonus}
          onChange={(e) => setBonus(parseFloat(e.target.value))}
        />
      </label>
      
      <label>
        Quantidade Comprada:
        <input
          type="number"
          value={qtdComprada}
          onChange={(e) => setQtdComprada(parseInt(e.target.value))}
        />
      </label>
      <br />
      
      
      <div className='result'>
      <Calculadora
        valorMilhiero={valorMilhiero}
        valorDesconto={valorDesconto}
        bonus={bonus}
        qtdComprada={qtdComprada}
      />
      </div>
      
      
    </div>
  );
}

export default App;

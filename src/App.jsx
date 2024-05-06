import React, { useState } from 'react';
import './styles.css'; 

function App() {
  const [nombre, setNombre] = useState('');
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [suma, setSuma] = useState(0);
  const [resta, setResta] = useState(0);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleNum1Change = (event) => {
    setNum1(Number(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(Number(event.target.value));
  };

  const calcularSuma = () => {
    setSuma(num1 + num2);
  };

  const calcularResta = () => {
    setResta(num1 - num2);
  };

  return (
    <div className="container">
      <div className="input-group">
        <label>Ingresa tu nombre: </label>
        <input type="text" value={nombre} onChange={handleNombreChange} />
        <p>{nombre !== '' ? `¡Hola, ${nombre}!` : '¡Hola!'}</p>
      </div>

      <div className="input-group">
        <label>Primer número: </label>
        <input type="number" value={num1} onChange={handleNum1Change} />
        <label>Segundo número: </label>
        <input type="number" value={num2} onChange={handleNum2Change} />
        <div className="button-group">
          <button onClick={calcularSuma}>Sumar</button>
          <button onClick={calcularResta}>Restar</button>
        </div>
      </div>

      <div className="result">
        <p>Resultado de la suma: {suma}</p>
        <p>Resultado de la resta: {resta}</p>
      </div>
    </div>
  );
}

export default App;

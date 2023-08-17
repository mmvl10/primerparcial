import React, { useState } from 'react';
import Card from './Card';
import './App.css'; 

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');
  const [mostrarCard, setMostrarCard] = useState(false);

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input1.trim().length < 3 || /^\s/.test(input1) || input2.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setMostrarCard(false);
      return;
    }

    setError('');
    setMostrarCard(true);
  };

  return (
    <div className="App">
      <h1>Ingrese su nombre y color</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="input1">Ingrese su nombre:</label>
          <input
            type="text"
            id="input1"
            value={input1}
            onChange={handleInput1Change}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input2">Ingrese un color:</label>
          <input
            type="text"
            id="input2"
            value={input2}
            onChange={handleInput2Change}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="submit-button">Enviar</button>
      </form>
      {mostrarCard && <Card input1={input1} input2={input2} color={input1} />}
    </div>
  );
}

export default App;

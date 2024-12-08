import React, { useState } from 'react';
import './styles.css';

function App() {
  const [clicks, setClicks] = useState(0);
  const [color, setColor] = useState('#4CAF50'); // Cor inicial do botão

  const handleButtonClick = () => {
    setClicks(clicks + 1); // Incrementa o contador
    setColor(color === '#4CAF50' ? '#FF5722' : '#4CAF50'); // Troca a cor do botão
  };

  return (
    <div className="App">
      <h1>Bem-vindo ao Projeto Modificado!</h1>
      <p>Este é um template básico usando React e Material-UI.</p>
      <button onClick={handleButtonClick} style={{ backgroundColor: color }}>
        Clique aqui {clicks} vez{clicks !== 1 ? 'es' : ''}!
      </button>
    </div>
  );
}

export default App;

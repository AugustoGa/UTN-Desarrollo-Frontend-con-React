import React from 'react';
import Encuentas from './Components/Encuentas';

function App() {
  const encuestas = [{
    id: 1, pregunta: '¿Cuál es tu color favorito?', opciones:
    ['Rojo', 'Azul', 'Verde'] 
    },
    { id: 2, pregunta: '¿Cuál es tu comida favorita?', opciones:
    ['Pizza', 'Hamburguesa', 'Sushi'] },
  ]
  return (
    <div className="App">
    <h1>Aplicación de Encuestas</h1>
    <Encuentas encuentas={encuestas} />
    </div>
    );
}

export default App;

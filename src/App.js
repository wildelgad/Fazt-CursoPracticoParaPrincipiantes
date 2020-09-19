import React from 'react';
import './App.css';

function HeyJupiter(props){
  console.log("este es el: " + props.envioTexto)
  return(
    <div id="jupit">
      <h2>Viajando a Jupiter...</h2>
      {props.envioTexto}
      {props.otraProps}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h2>Nuevo Titulón</h2>
        <HeyJupiter envioTexto="- Primer viaje a Jupiter" />
        <HeyJupiter envioTexto="- Segundo viaje a Jupiter"/>
        <HeyJupiter otraProps="Aterrizaje forzoso"/>
    </div>
  );
}

export default App;

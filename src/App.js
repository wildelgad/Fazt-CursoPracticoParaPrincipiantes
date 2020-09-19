import React from 'react';
import './App.css';

// function HeyJupiter(props){
//   console.log("este es el: " + props.envioTexto)
//   return(
//     <div id="jupit">
//       <h2>Viajando a Jupiter...</h2>
//       {props.envioTexto}
//       {props.otraProps}
//     </div>
//   )
// }

class HeyJupiter extends React.Component{
  
  state = {
    show: true,
  }

  toggleShow = ()=> {
    this.setState({show: !this.state.show})
  }

  render(){
    if(this.state.show){
      return(
        <div id="jupit">
          <h2>Viajando a Jupiter...</h2>
          {this.props.envioTexto}
          {this.props.otraProps}

          <button onClick={this.toggleShow}>
            Toggle Show
          </button>
        </div>
      )
    }
    else{
      return(
        <div>
          <h2>No Hay Elementos</h2>
          <button onClick={this.toggleShow}>
            Toggle Show
          </button>
        </div>
      )
    }
  }
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

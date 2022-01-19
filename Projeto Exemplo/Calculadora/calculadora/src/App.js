import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class numero extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  
  render() {
    return (
      <div>
      <button valor={this.props.valor}>{this.props.valor}</button>
      </div>
    );
  }
}

class App extends Component {
 render() {
  return (
    <div className="container">
     <h2> Calculadora</h2>
     <table>
      <tr> 
      <td> <button>7</button> </td>
        <td> <button>8</button> </td>
        <td> <button>9</button> </td>
      </tr>

      <tr> 
        <td> <button>4</button> </td>
        <td> <button>5</button> </td>
        <td> <button>6</button> </td>
        </tr>

        <tr>
         <td> <button> 0</button> </td>
          <td> <button>1 </button> </td>
          <td> <button> 2</button> </td>
          <td> <button> 3</button> </td>
        </tr>

        <tr> 
          <td><button> +</button></td>
          <td><button> -</button></td>
          <td><button> *</button></td>
          <td><button> /</button></td>
        </tr>
        
     </table>
     
    </div>
  );
}
}

export default App;

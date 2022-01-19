import React, { Component } from "react";
import "./App.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <div>
        <label className="label" htmlFor={this.props.id}>
          {this.props.title}:
        </label>
        <input
          id={this.props.id}
          name={this.props.nome}
          value={this.state.value}
          type="text"
        />
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      value: "Aula 2",
    });
  }

  render() {
    return (
      <div className="container">
        <form tag="formulario" className="formulario">
          <fieldset>
            <Input
              title="Nome"
              id="nome"
              value={this.state.value}
              nome="nome"
            />
            <Input title="Endereço" id="endereco" className="input" />
            <div className="button">
              <button>Enviar</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
export default App;

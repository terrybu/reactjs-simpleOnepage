import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonActive: false,
      buttonTextStart: "Start Spinner",
    };
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    this.state.butonActive = !this.state.buttonActive;
    this.setState( {buttonActive: this.state.butonActive });
    if (this.state.butonActive) {
      console.log("set to stop spinner");
      this.setState({ buttonTextStart: "Stop Spinner"});
    } else {
      console.log("set to start spinner");
      this.setState({ buttonTextStart: "Start Spinner" });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>ReactJS POC</h2>
        </div>
        <p className="App-intro">

        </p>
        <button onClick={ (e) => { this.clicked(); } }>{this.state.buttonTextStart}</button>
      </div>

    );
  }
}

export default App;

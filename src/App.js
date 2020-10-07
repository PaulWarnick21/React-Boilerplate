import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOne: 0,
      numberTwo: 0,
      sum: "--",
    };
  }

  updateInputOne(evt) {
    this.setState({
      numberOne: evt.target.value,
    });
  }

  updateInputTwo(evt) {
    this.setState({
      numberTwo: evt.target.value,
    });
  }

  calculateSum = () => {
    axios
      .post("http://localhost:8080/calculator", {
        numberOne: Number(this.state.numberOne),
        numberTwo: Number(this.state.numberTwo),
      })
      .then((res) => {
        this.setState({ sum: res.data.sum });
      })
      .catch((error) => {
        this.setState({ sum: "Error" });
      });
  };

  render() {
    return (
      <div /*className="App"*/>
        <p>Number 1:</p>
        <input
          value={this.state.numberOne}
          onChange={(evt) => this.updateInputOne(evt)}
        />
        <p>Number 2:</p>
        <input
          value={this.state.numberTwo}
          onChange={(evt) => this.updateInputTwo(evt)}
        />
        <p></p>
        <button onClick={this.calculateSum}>Calculate</button>
        <p>Result:</p>
        <p>{this.state.sum}</p>
      </div>
    );
  }
}

export default App;

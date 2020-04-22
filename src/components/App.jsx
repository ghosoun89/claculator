import React, { Component } from "react";
import ResultComponent from "./resultComponent";
import KeypadComponent from "./keypadComponent";

class App extends Component {
  state = {
    result: "",
  };

  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.result),
      });
    } catch (error) {
      this.setState({ result: error });
    }
  };

  reset = () => {
    this.setState({ result: "" });
  };

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else {
      this.setState({ result: this.state.result + button });
    }
  };

  render() {
    return (
      <React.Fragment>
        <main className="container">
          <div className="calculator">
            <ResultComponent result={this.state.result} />
            <KeypadComponent onClick={this.onClick} />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

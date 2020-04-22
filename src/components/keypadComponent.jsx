import React, { Component } from "react";

class KeypadComponent extends Component {
  render(props) {
    const { onClick } = this.props;
    return (
      <div className="calculator-buttons">
        <button
          name="C"
          className="calc-button is-clear"
          onClick={(e) => onClick(e.target.name)}
        >
          C
        </button>
        <button
          name="/"
          className="calc-button"
          onClick={(e) => onClick(e.target.name)}
        >
          ÷
        </button>

        <button
          name="7"
          className="calc-button"
          onClick={(e) => onClick(e.target.name)}
        >
          7
        </button>
        <button
          name="8"
          className="calc-button"
          onClick={(e) => onClick(e.target.name)}
        >
          8
        </button>
        <button
          name="9"
          className="calc-button"
          onClick={(e) => onClick(e.target.name)}
        >
          9
        </button>
        <button
          name="*"
          className="calc-button"
          onClick={(e) => onClick(e.target.name)}
        >
          ×
        </button>

        <button
          name="4"
          className="calc-button"
          onClick={(e) => onClick(e.target.name)}
        >
          4
        </button>
        <button
          name="5"
          className="calc-button"
          onClick={(e) => onClick(e.target.name)}
        >
          5
        </button>
        <button
          name="6"
          className="calc-button"
          onClick={(e) => onClick(e.target.name)}
        >
          6
        </button>
        <button
          name="-"
          className="calc-button"
          onClick={(e) => onClick(e.target.name)}
        >
          −
        </button>

        <button
          name="1"
          className="calc-button"
          onClick={(e) => onClick(e.target.name)}
        >
          1
        </button>
        <button
          name="2"
          className="calc-button"
          onClick={(e) => onClick(e.target.name)}
        >
          2
        </button>
        <button
          name="3"
          className="calc-button"
          onClick={(e) => onClick(e.target.name)}
        >
          3
        </button>
        <button
          name="+"
          className="calc-button"
          onClick={(e) => onClick(e.target.name)}
        >
          +
        </button>

        <button
          name="0"
          className="calc-button is-zero"
          onClick={(e) => onClick(e.target.name)}
        >
          0
        </button>
        <button
          name="="
          className="calc-button is-equals"
          onClick={(e) => onClick(e.target.name)}
        >
          =
        </button>
      </div>
    );
  }
}
export default KeypadComponent;

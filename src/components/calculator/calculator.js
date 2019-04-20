import React, { Component } from 'react';
import Display from "./display/display";
import Buttons from './buttons/buttons';

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    console.log(buttonName);
  };

  render() {

      const container = {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: '100%'
      }

    return (
    <div style={container}>
      <Display value={this.state.next || this.state.total || "0"} />
      <Buttons clickHandler={this.handleClick} />
    </div>
    );
  }
}

export default Calculator;

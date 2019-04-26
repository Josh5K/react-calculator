import React, { Component } from 'react';
import Display from "./display/display";
import Buttons from './buttons/buttons';
import Calculate from '../../actions/calculate'

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
    this.setState(Calculate.getNewState(this.state, Calculate.filterKeys(buttonName)));
  };

  render() {
      const container = {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: '100%'
      }

    return (
    <div style={container} onKeyDown={(e) => this.handleClick(e.key)} >
      <Display value={this.state.next || this.state.total || "0"} />
      <Buttons clickHandler={this.handleClick} />
    </div>
    );
  }
}

export default Calculator;

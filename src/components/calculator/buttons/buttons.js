import React, { Component } from 'react';
import Button from "./button/button";
import Display from "../display/display";

class Buttons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {

    const component_buttons = {
        backgroundColor: '#858694',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: '1 0 auto'
      }

      const component_buttons_div = {
        width: '100%',
        marginBottom: '1px',
        flex: '1 0 auto',
        display: 'flex'
      }

    return (
      <div style={component_buttons}>
        <div style={component_buttons_div}>
          <Button name="AC" clickHandler={this.handleClick} />
          <Button name="+/-" clickHandler={this.handleClick} />
          <Button name="%" clickHandler={this.handleClick} />
          <Button name="÷" clickHandler={this.handleClick} orange />
        </div>
        <div style={component_buttons_div}>
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="x" clickHandler={this.handleClick} orange />
        </div>
        <div style={component_buttons_div}>
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} orange />
        </div>
        <div style={component_buttons_div}>
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} orange />
        </div>
        <div style={component_buttons_div}>
          <Button name="0" clickHandler={this.handleClick} wide />
          <Button name="." clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} orange last />
        </div>
      </div>
    );
  }
}

export default Buttons;

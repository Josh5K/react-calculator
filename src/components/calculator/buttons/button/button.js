import React from "react";

class Button extends React.Component {

  clickEvent = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const component_button = {
        display: 'inline-flex',
        width: '25%',
        flex: '1 0 auto'
      };

    const component_button_wide = {
        width: '50%'
    }

    const component_button_button = {
        backgroundColor: '#e0e0e0',
        border: '0',
        fontSize: '1.5rem',
        margin: '0 1px 0 0',
        flex: '1 0 auto',
        padding: '0'
      }

    const component_button_last_child_button = {
        marginRight: '0'
      }

    const component_button_orange_button = {
        backgroundColor: '#f5923e',
        color: 'white'
      }

      let styles = component_button_button;
      let divStyles = component_button;

      if(this.props.orange) styles = Object.assign(styles, component_button_orange_button);
      if(this.props.wide) divStyles = Object.assign(divStyles, component_button_wide);
      if(this.props.last) styles = Object.assign(styles, component_button_last_child_button);

    return (
      <div style={divStyles}>
        <button style={styles} onClick={this.clickEvent}>{this.props.name}</button>
      </div>
    );
  }
}

export default Button;
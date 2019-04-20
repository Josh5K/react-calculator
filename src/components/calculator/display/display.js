
import React from "react";

class Display extends React.Component {

  render() {

    const outerStyle = {
        backgroundColor: '#858694',
        color: 'white',
        textAlign: 'right',
        fontWeight: '200',
        flex: '0 0 auto',
        width: '100%'
      };

      const innerStyle = {
        fontSize: '2.5rem',
        padding: '0.2rem 0.7rem 0.1rem 0.5rem'
      };

    return (
      <div style={outerStyle} >
        <div style={innerStyle} >{this.props.value}</div>
      </div>
    );
  }
}

export default Display;

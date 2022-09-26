import PropTypes from 'prop-types';
import React from 'react';
export default class Greeting extends React.Component {
    render() {
      return (
        <div>
        <h1>Hello, {this.props.name}</h1>
        <h1>Salary,{this.props.salary}</h1>
        </div>
      );
    }
  }
  Greeting.propTypes = {
    name:PropTypes.string,
    salary:PropTypes.number
  }
  // Specifies the default values for props:
  Greeting.defaultProps = 
  {
    name: PropTypes.string,
    salary:'2000'
  };
  
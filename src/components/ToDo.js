import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    const toggle = this.props.toggleComplete;
    return (
      <li>
        <input 
          type="checkbox" 
          checked={ this.props.isCompleted } 
          onChange={ toggle }
        />
        <span>{ this.props.description }</span>
      </li>
    );
  }
}

export default ToDo;
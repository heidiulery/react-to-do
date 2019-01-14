import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    const toggle = this.props.toggleComplete;
    const deleteTodo = this.props.handleDelete;
    return (
      <li>
        <input 
          type="checkbox" 
          checked={ this.props.isCompleted } 
          onChange={ toggle }
        />
        <span>{ this.props.description }</span>
        <button 
          style={{ margin: "10px" }}
          onClick={ deleteTodo }>
          Delete
        </button>
      </li>
    );
  }
}

export default ToDo;
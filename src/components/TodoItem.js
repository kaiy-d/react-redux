import React, { PropTypes, Component } from 'react';
// import ReactDOM from 'react-dom';

export default class TodoItem extends Component {
  render() {
    const { id, completed, text, deleteTodo, toggleTodo } = this.props;

    return <li className='todos__item'>
    <span className={ 'todo-text ' + (completed? 'completed' : '') } 
      onClick={() => toggleTodo(id)}>{text}</span>{'   '}
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  }
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};
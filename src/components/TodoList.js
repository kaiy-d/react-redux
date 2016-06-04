import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styleTextField = {
  margin: 20
};


//todos={todoList} addTodo={addTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}

export default class TodoList extends Component {

  onKeyDownInput = e => {
    if (e.keyCode === 13) {
      this.onAddTodoButtonClick(e);
    }
  }

  onAddTodoButtonClick = e => {
    e.preventDefault();
    let todoInput = this.refs['newTodo'];

    console.log(todoInput);

    // if (todoInput.getValue().trim() === '') return; 

    this.props.addTodo(todoInput.getValue());
    todoInput.setValue('');
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.newTodo).focus();
  }

  render() {
    const { todos, deleteTodo, toggleTodo } = this.props;

    return <div className='input-todo'>
      <TextField
        onKeyDown={this.onKeyDownInput}
        hintText='Enter what you need to do'
        type='text'
        defaultValue=''
        ref='newTodo'
        style={styleTextField}
      />
      <RaisedButton label='Add todo' primary={true} onClick={this.onAddTodoButtonClick} />
      <ul className='todos'>
        { todos.map((todo, index) => <TodoItem id={todo.id} 
          text={todo.text} 
          completed={todo.completed} 
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          key={index}></TodoItem>) }
      </ul>
    </div>
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
};
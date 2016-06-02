import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

//todos={todoList} addTodo={addTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}

export default class TodoList extends Component {

  onAddTodoButtonClick = e => {
    e.preventDefault();
    let todoInput = ReactDOM.findDOMNode(this.refs.newTodo);

    if (todoInput.value.trim() === '') return; 

    this.props.addTodo(todoInput.value);
    todoInput.value = '';
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.newTodo).focus();
  }

  render() {
    const { todos, deleteTodo, toggleTodo } = this.props;

    return <div className='input-todo'>
      <input type='text'
        defaultValue=''
        placeholder='Enter what you need to do'
        ref='newTodo'>
      </input>{'   '}
      <button onClick={this.onAddTodoButtonClick}>Add todo</button>
      <ul className='todos'>
        { todos.map((todo, index) => <li key={index} className='todos__item'>
          <span className={ 'todo-text ' + (todo.completed? 'completed' : '') } onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
          {'   '}<button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>) }
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
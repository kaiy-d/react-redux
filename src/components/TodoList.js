import React, { PropTypes, Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

//todos={todoList} addTodo={addTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}

export default class TodoList extends Component {

  render() {
    const { todos, deleteTodo, toggleTodo, addTodo } = this.props;

    return <div className='input-todo'>
      <TodoInput addTodo={addTodo}/>
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
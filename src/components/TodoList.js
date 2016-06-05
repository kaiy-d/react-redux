import React, { PropTypes, Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import Paper from 'material-ui/Paper';

const style = {
  width: 440,
  margin: '0 auto',
  padding: 10,
  textAlign: 'left',
  display: 'inline-block'
};

//todos={todoList} addTodo={addTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}

export default class TodoList extends Component {

  render() {
    const { todos, deleteTodo, toggleTodo, addTodo } = this.props;

    return <Paper 
        style={style} 
        zDepth={2}>
      <TodoInput addTodo={addTodo}/>
      <ul className='todos'>
        { todos.map((todo, index) => <TodoItem id={todo.id} 
          text={todo.text} 
          completed={todo.completed} 
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          key={index}></TodoItem>) }
      </ul>
    </Paper>
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
};
import React, { PropTypes, Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import VisibilityFilter from './VisibilityFilter';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  width: 500,
  margin: '0 auto',
  padding: 10,
  textAlign: 'left',
  display: 'inline-block'
};

const deleteButtonStyle = {
  width: 460,
  margin: 10,
  display: 'inline-block'
};

const filter = (completed, visibility) => {
  if ( (completed && visibility === 'completed') 
    || (!completed && visibility === 'active') 
    || (visibility === 'all') ) {
     return true;
  }

  return false;
};

//todos={todoList} addTodo={addTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}

export default class TodoList extends Component {

  deleteCompleted = () => {
    const { todos, deleteTodo } = this.props;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].completed) deleteTodo(todos[i].id);
    }
  }

  isCompletedTodosExist = () => {
    const { todos } = this.props;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].completed) return true;
    }

    return false;
  }

  render() {
    const { todos, 
      deleteTodo, 
      toggleTodo, 
      addTodo,
      visibilityFilter,
      setVisibilityFilter } = this.props;

    return <Paper 
        style={style} 
        zDepth={2}>
      <TodoInput addTodo={addTodo}/>
      <VisibilityFilter 
        setVisibilityFilter={setVisibilityFilter}
        visibilityFilter={visibilityFilter}
        todos={todos}>
      </VisibilityFilter>
      { (visibilityFilter.visibility !== 'active' && this.isCompletedTodosExist())? 
        <RaisedButton 
          label='delete completed todos' 
          secondary={true} 
          style={deleteButtonStyle} 
          onClick={this.deleteCompleted} />
        :
        ''
      }
      <ul className='todos'>
        { todos.map((todo, index) => {

          if ( filter(todo.completed, visibilityFilter.visibility) ) {
            return <TodoItem id={todo.id} 
              text={todo.text} 
              completed={todo.completed} 
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              key={index}></TodoItem>
          }
        }) }
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
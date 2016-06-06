import React, { PropTypes, Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import VisibilityFilter from './VisibilityFilter';
import Paper from 'material-ui/Paper';

const style = {
  width: 500,
  margin: '0 auto',
  padding: 10,
  textAlign: 'left',
  display: 'inline-block'
};

//todos={todoList} addTodo={addTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}

export default class TodoList extends Component {

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
      <ul className='todos'>
        { todos.map((todo, index) => {

          if ( (todo.completed && visibilityFilter.visibility === 'completed') 
            || (!todo.completed && visibilityFilter.visibility === 'active') 
            || (visibilityFilter.visibility === 'all') ) {
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
import React, { PropTypes, Component } from 'react';
// import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import DeleteSweep from 'material-ui/svg-icons/content/delete-sweep';

const style = {
  margin: 10,
  padding: 10,
  textAlign: 'center',
  display: 'block'
};

export default class TodoItem extends Component {
  render() {
    const { id, completed, text, deleteTodo, toggleTodo } = this.props;

    return <li className='todos__item'>
      <Paper className={ (completed? 'completed' : '') } 
        style={style} 
        zDepth={2}>
        <span className={ 'todo-text ' + (completed? 'completed' : '') } 
        onClick={() => toggleTodo(id)}>{text}</span>{'   '}
        <DeleteSweep onClick={() => deleteTodo(id)} className='delete-button'></DeleteSweep>
      </Paper>
    </li>
  }
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};
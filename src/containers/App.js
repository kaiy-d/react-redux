import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
// import VisibilityFilter from '../components/VisibilityFilter';
import * as todoListActions from '../actions/TodoListActions';
// import * as visibilityFilterActions from '../actions/visibilityFilterActions';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme(lightBaseTheme);

class App extends Component {
  render() {
    const { todoList /*, visibilityFilter*/ } = this.props;
    const { addTodo, deleteTodo, toggleTodo } = this.props.todoListActions;
    // const { setVisibilityFilter } = this.props.visibilityFilterActions;

    return <MuiThemeProvider muiTheme={muiTheme}>
        <TodoList todos={todoList} addTodo={addTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></TodoList>
        {/*<VisibilityFilter setVisibilityFilter={setVisibilityFilter}></VisibilityFilter>*/}
      </MuiThemeProvider>
  }
}

function mapStateToProps (state) {
  return {
    todoList: state.todoList
    // visibilityFilter: state.visibilityFilter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    todoListActions: bindActionCreators(todoListActions, dispatch)
    // visibilityFilterActions: bindActionCreators(visibilityFilterActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

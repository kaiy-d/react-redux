import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styleTextField = {
  margin: 40
};

export default class TodoInput extends Component {

  state = {
    inputValue: ''
  }

  onKeyDownInput = e => {
    if (e.keyCode === 13) {
      this.onAddTodoButtonClick(e);
    }
  }

  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  }

  onAddTodoButtonClick = e => {
    e.preventDefault();

    if (this.state.inputValue.trim() === '') {
      return;
    }

    this.props.addTodo(this.state.inputValue);
    this.setState({ inputValue: '' });
  }

  render() {
    return <div>
      <TextField
        onKeyDown={this.onKeyDownInput}
        hintText='Enter what you need to do'
        type='text'
        value={this.state.inputValue}
        style={styleTextField}
        onChange={this.handleChange}
      />
      <RaisedButton label='Add todo' primary={true} onClick={this.onAddTodoButtonClick} />
    </div>
  }
}
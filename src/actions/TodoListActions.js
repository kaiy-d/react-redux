import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO
} from '../constants/TodoList';

let nextTodoId = 0;

export const addTodo = (text) => {
  return { 
    type: ADD_TODO,
    id: nextTodoId++, 
    text: text, 
    completed: false 
  }
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id: id
  }
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id: id
  }
};
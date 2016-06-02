import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO
} from '../constants/TodoList';

const initialState = [];

export default function todoList(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return [...state, { id: action.id, text: action.text, completed: false } ];

    case DELETE_TODO:
      return state.filter( (el) => {
        return (el.id !== action.id);
      } );

    case TOGGLE_TODO:
      return state.map( (el) => {
        if (el.id === action.id) {
          let completed = !(el.completed);
          return { ...el, completed };
        }
        return el;
      } );

    default:
      return state;
  }
}

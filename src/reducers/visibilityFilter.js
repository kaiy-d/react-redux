import {
  SET_VISIBILITY_FILTER
} from '../constants/VisibilityFilter';

const initialState = {
  visibility: 'all'
};

export default function visibilityFilter(state = initialState, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return { ...state, visibility: action.visibility };

    default:
      return state;
  }
}
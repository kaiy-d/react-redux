import {
  SET_VISIBILITY_FILTER
} from '../constants/VisibilityFilter';

export const setVisibilityFilter = (visibility) => {
  return {
    type: SET_VISIBILITY_FILTER,
    visibility: visibility
  }
};
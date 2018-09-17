import { combineReducers } from 'redux';
import visibilityFilters from './visiblityFilters.js'
import todos from './todo.js'

export default combineReducers({
  visibilityFilters,
  todos
})

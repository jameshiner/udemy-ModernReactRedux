import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer';

/* 
rules of reducers
1. must return ANY value besides undefined
2. produces 'state' or data to be used inside your app, combining ONLY the prev state and action
3. reducers are supposed to be 'pure' - must not reach into a different scope to get a value
  the reducer should ONLY use prev state and action
  bad: 
    api requests
    reach into dom to get value
    read from file   
4. DONT mutate state
  misleading: you can mutate state with no error
  HOWEVER redux compares previous state to new state to determine whether to rerender components
  if you mutate the state object and return that object theyre going to evaluate to equal
  so even if the object is mutated, because youre returning that same object, the comp wont rerender

  if you need to update state, return an altered copy of the state whether its an obj or array
  numbers and strings are immutable by default in JS, dont have to worry about those
*/

// define the keys for the state values
// whatever is returned from postReducer will be set as state.posts
export default combineReducers({
  posts: postReducer,
  users: userReducer,
});

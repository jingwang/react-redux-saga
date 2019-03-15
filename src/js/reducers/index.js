import { combineReducers } from 'redux';
import message from './message';
import newUser from './newUser';
import editUser from './editUser';
import users from './users';

const rootReducer = combineReducers(
  {
      users,
      message,
      newUser,
      editUser
  });

export default rootReducer;
import { createSelector } from 'reselect'
// selector
const getNewUser = (state) => {
  console.log("return newUser");
  return state.newUser;
};
const getEditUser = (state) => state.editUser;
const getUsers = (state) => {
  console.log("return users");
  return state.users;};
const getMessage = (state) => state.message;
// reselect function
export const getNewUserState = createSelector(
  [ getNewUser ],
  (f) => f
);
export const getEditUserState = createSelector(
  [ getEditUser ],
  (f) => f
);

export const getUsersState = createSelector(
  [ getUsers],
  (f) => f
);

export const getMessageState = createSelector(
  [ getMessage ],
  (f) => f
);
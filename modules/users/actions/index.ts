import { UsersStateData } from '../interfaces';

export const actionTypes = {
  LOAD_USERS: 'LOAD_USERS',
  LOAD_USERS_SUCCESS: 'LOAD_USERS_SUCCESS',
  LOAD_USERS_FAILURE: 'LOAD_USERS_FAILURE',
};

export function loadUsers() {
  return {
    type: actionTypes.LOAD_USERS,
  };
}

export function loadUsersSuccess(users: any) {
  console.log('Users passed to actions', users);
  //specify type
  return {
    type: actionTypes.LOAD_USERS_SUCCESS,
    payload: users,
  };
}

export function loadUsersFailure(error: any) {
  //specify type
  return {
    type: actionTypes.LOAD_USERS_FAILURE,
    error,
  };
}

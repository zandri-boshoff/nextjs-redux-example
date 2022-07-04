import { combineReducers } from 'redux';
import { UsersState } from '~/modules/users/interfaces';
import { moduleReducers } from '../modules';

// export interface ApplicationState {
//   users: UsersState;
// }

export interface ApplicationState {
  users: any;
}

// const reducers = {
//   // In this case there is just 1 reducer, but this is a proof of concept when there are multiple reducers that need to be combined
//   ...moduleReducers,
// };

const appReducer = combineReducers(moduleReducers);

export default appReducer;

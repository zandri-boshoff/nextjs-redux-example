import { actionTypes } from '../actions';
import { UsersState } from '~/modules/users/interfaces';
import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction } from 'redux';

// const initialState: UsersState | null = {
//   isLoading: false,
//   payload: {
//     listOfUsers: undefined,
//   },
// };

const initialState: any = {
  listOfUsers: undefined,
};

const usersReducer = (
  // state: UsersState = initialState,
  state: any = initialState,
  action: AnyAction
  // ): UsersState => {
): any => {
  const { type, payload } = action;
  console.log('Action passed to the reducer', action.type);
  switch (type) {
    case HYDRATE:
      const nextState = {
        ...state,
        ...{ listOfUsers: payload },
      };
      console.log('The next state', nextState);
      return nextState;
    case actionTypes.LOAD_USERS:
      console.log('Load users action');
      return {
        ...state,
      };
    case actionTypes.LOAD_USERS_SUCCESS:
      return {
        ...state,
        ...{ listOfUsers: payload },
      };

    case actionTypes.LOAD_USERS_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default usersReducer;

import { Axios, AxiosError } from 'axios';
import { AnyAction } from 'redux';
import { put, call, takeLatest } from 'redux-saga/effects';
import { actionTypes, loadUsersSuccess, loadUsersFailure } from '../../actions';

function* sagaWorker(data: any): any {
  console.log('USERS IN SAGA');
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users');
    const users = yield res.json();
    console.log('USERS IN SAGA', users);
    return yield put(loadUsersSuccess(users));
  } catch (error: any) {
    return yield put(loadUsersFailure(error));
  }
}

function* mySaga() {
  yield takeLatest(
    [
      actionTypes.LOAD_USERS,
      // ADD OTHER ACTIONS IN HERE SO THIS RUNS WHEN THOSE ARE CALLED
    ],
    sagaWorker
  );
}

export default mySaga;

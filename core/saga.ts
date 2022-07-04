import { all } from 'redux-saga/effects';
import { usersListSaga } from '../modules/users/sagas';

function* rootSaga() {
  yield all([...usersListSaga]);
}

export default rootSaga;

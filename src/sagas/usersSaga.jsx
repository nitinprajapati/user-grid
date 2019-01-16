import { call, put, takeLatest } from 'redux-saga/effects'
import axios from "axios";

export function* watcherSaga() {
  yield takeLatest("FETCH_USERS", fetchUsers);
}

const fetchData = () => {
  return axios({
    method: "get",
    url: 'https://reqres.in/api/users?per_page=10'
  });
}

function* fetchUsers() {    
    try {
        const users = yield call(fetchData);
        yield put({ type: "DATA_RECIEVED", payload:users})
    
    } catch (error) {
        yield put({ type: "DATA_FAILURE", payload:error});
    }
}
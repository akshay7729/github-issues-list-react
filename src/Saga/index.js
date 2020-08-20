import { takeEvery, call, put } from "redux-saga/effects";
import { ISSUES } from "../Redux/Constants";
import { issuesApi } from "../Api";

function* handleIssuesApi() {
  try {
    const data = yield call(issuesApi);
    yield put({
      type: ISSUES.RESPONSE,
      payload: data,
    });
  } catch (e) {
    console.log("handle api issue", e);
    yield put({
      type: ISSUES.ERROR,
      payload: e.message,
    });
  }
}

function* rootSaga() {
  yield takeEvery(ISSUES.LOAD, handleIssuesApi);
}

export default rootSaga;

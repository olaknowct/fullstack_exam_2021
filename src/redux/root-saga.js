// issue and call all sagas
import { all, call } from "redux-saga/effects";

import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
    // initialize concurently, like takes every
    yield all([call(userSagas)]);
}

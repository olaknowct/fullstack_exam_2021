import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";

export function* signUp({ payload: { email, password, fullName } }) {
    try {
        yield console.log("Saga here! req details ", email, password, fullName);
    } catch (error) {}
}

export function* signUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

// initialize sagas
export function* userSagas() {
    yield all([call(signUpStart)]);
}

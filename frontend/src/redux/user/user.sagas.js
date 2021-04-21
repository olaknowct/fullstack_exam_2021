import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";
import UserActionTypes from "./user.types";

import { signUpSuccess } from "./user.actions";

export function* postSignUp({ payload }) {
    try {
        const user = yield axios({
            url: "signup",
            method: "POST",
            data: payload,
        });

        console.log(user.data);
        yield put(signUpSuccess(user.data));
    } catch (error) {
        alert("Error Occur");
    }
}

export function* signUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, postSignUp);
}

// initialize sagas
export function* userSagas() {
    yield all([call(signUpStart)]);
}

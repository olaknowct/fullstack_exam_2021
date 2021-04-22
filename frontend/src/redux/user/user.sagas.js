import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";
import UserActionTypes from "./user.types";

import { signUpSuccess, verifyFailed, verifyAccount } from "./user.actions";

export function* postSignUp({ payload }) {
    try {
        const user = yield axios({
            url: "signup",
            method: "POST",
            data: payload,
        });

        yield put(signUpSuccess(user.data));
    } catch (error) {
        alert(error);
    }
}

export function* verifyEmail({ payload }) {
    try {
        const response = yield axios({
            url: "verify",
            method: "POST",
            data: payload,
        });

        const {
            data: { data: res },
        } = response;

        // console.log(res);
        if (res.status === "fail") {
            yield put(verifyFailed("Verified Failed, Account not Registered "));
        }

        if (res.status === "success") {
            yield put(verifyAccount(res.data));
        }
    } catch (error) {
        alert("Error Occur");
    }
}

export function* verifyStart() {
    yield takeLatest(UserActionTypes.VERIFY_START, verifyEmail);
}

export function* signUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, postSignUp);
}

// initialize sagas
export function* userSagas() {
    yield all([call(signUpStart), call(verifyStart)]);
}

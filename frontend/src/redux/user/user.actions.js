import UserActionTypes from "./user.types";

export const setCurrentUser = (user) => {
    return {
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user,
    };
};

export const signUpStart = (userCredentials) => {
    return {
        type: UserActionTypes.SIGN_UP_START,
        payload: userCredentials,
    };
};

export const signUpSuccess = (user) => {
    return {
        type: UserActionTypes.SIGN_UP_SUCCESS,
        payload: user,
    };
};

export const verifyUserAccount = (email) => {
    return {
        type: UserActionTypes.VERIFY_START,
        payload: { email },
    };
};

export const verifyFailed = (message) => {
    return {
        type: UserActionTypes.VERIFY_FAILED,
        payload: message,
    };
};

export const verifyAccount = (userCredentials) => {
    return {
        type: UserActionTypes.VERIFY_ACCOUNT,
        payload: userCredentials,
    };
};

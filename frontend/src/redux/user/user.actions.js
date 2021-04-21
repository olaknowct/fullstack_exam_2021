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

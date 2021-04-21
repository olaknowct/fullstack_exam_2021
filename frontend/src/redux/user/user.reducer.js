import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
};

// current sstate
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        case UserActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
            };
        case UserActionTypes.SIGN_UP_START:
            console.log("reduxer first : do nothing ");

        default:
            return state;
    }
};

export default userReducer;

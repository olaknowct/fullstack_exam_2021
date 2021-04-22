import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    verified: {
        status: false,
        msg: "",
    },
    registered: {
        status: false,
        msg: "Verifying Account...",
    },
    isProcessing: false,
};

// current sstate
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        case UserActionTypes.SIGN_UP_START:
            return {
                ...state,
                isProcessing: true,
            };

        case UserActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
            };

        case UserActionTypes.VERIFY_START:
            return {
                ...state,
                registered: {
                    status: false,
                    msg:
                        "Please wait while we check if account is registered...",
                },
            };
        case UserActionTypes.VERIFY_FAILED:
            return {
                ...state,
                registered: {
                    status: false,
                    msg: action.payload,
                },
            };

        case UserActionTypes.VERIFY_ACCOUNT:
            return {
                ...state,
                currentUser: action.payload,
                verified: {
                    status: true,
                    msg:
                        "Thank you for patiently waiting, Account is now Verified!",
                },
                registered: {
                    status: true,
                    msg: "Account Registered, Verifying account...",
                },
            };

        default:
            return state;
    }
};

export default userReducer;

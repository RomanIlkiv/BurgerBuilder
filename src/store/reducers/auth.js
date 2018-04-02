import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    token: null,
    userId: null,
    authRedirectPath: '/'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,

            };
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.idToken,
                userId: action.userId
            };
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                uderId: null
            };
        case actionTypes.SET_AUTH_REDIRECT:
            return {
                ...state,
                authRedirectPath: action.path
            };
        default:
            return state;
    }
};

export default reducer;
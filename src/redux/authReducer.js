import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    if (action.type === SET_AUTH_USER_DATA) {
        return {
            ...state,
            ...action.payload,
        };
    };
    return state;
};

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_AUTH_USER_DATA, payload: {id, email, login, isAuth}});
export const getAuth = () => {
    return (
        (dispatch) => {
            authAPI.getAuth().then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                };
            });
        }
    );
};

export const login = (email, password, rememberMe) => {
    return (
        (dispatch) => {
            authAPI.login(email, password, rememberMe).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuth());
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', {_error: message}));
                };
            });
        }
    );
};

export const logout = () => {
    return (
        (dispatch) => {
            authAPI.logout().then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuth(null, null, null, false));
                };
            });
        }
    );
};

export default authReducer;
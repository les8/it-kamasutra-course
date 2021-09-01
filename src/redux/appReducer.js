import { getAuth } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    if (action.type === INITIALIZED_SUCCESS) {
        return {
            initialized: true,
        };
    };
    return state;
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuth());
    promise.then( () => {
        dispatch(initializedSuccess());
    });
};

export default appReducer;
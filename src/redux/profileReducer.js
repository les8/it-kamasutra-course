import { userAPI } from "../api/api";
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    profile: null,
    postsData: [
        {id: 1, message: "Hi, how are you?", likesCount: 12,}, 
        {id: 2, message: "I'm fine, thank you :)", likesCount: 3,}, 
        {id: 3, message: "Why are you smiling?", likesCount: 56,}, 
        {id: 4, message: "You are starting chat in post space, like an old man!", likesCount: 32,}, 
    ],
    status: '',
};

const profileReducer = (state = initialState, action) => { 
    if (action.type === ADD_POST) {        
        let newPost = {
            id: state.postsData.length + 1,
            message: action.newPostText,
            likesCount: 0,
        };
        return {
            ...state,
            postsData: [...state.postsData, newPost],
            newPostText: '',
        }
    } else if (action.type === SET_USER_PROFILE) {
        return {...state, profile: action.profile};
    } else if (action.type === SET_STATUS) {
        return {...state, status: action.status};
    };
    return state;       
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getProfile = (userId) => {
    return (
        (dispatch) => {
            userAPI.getProfile(userId).then(response => {
                dispatch(setUserProfile(response.data));
            });
        }
    );
};

export const getStatus = (userId) => {
    return (
        (dispatch) => {
            profileAPI.getStatus(userId).then(response => {
                dispatch(setStatus(response.data));
            });
        }
    );
};

export const updateStatus = (status) => {
    return (
        (dispatch) => {
            profileAPI.updateStatus(status).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                };
            });
        }
    );
};

export default profileReducer;
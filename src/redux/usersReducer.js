import {userAPI} from './../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
    usersData: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    if (action.type === FOLLOW) {
        return {
            ...state,
            usersData: state.usersData.map(u => {
                if (u.id === action.userid) {
                    return {...u, followed: true};
                };
                return u;
            }),
        };
    } else if (action.type === UNFOLLOW) {
        return {
            ...state,
            usersData: state.usersData.map( u => {
                if (u.id === action.userid) {
                    return {...u, followed: false};
                };
                return u;
            }),
        };
    } else if (action.type === SET_USERS) {
        return {
            ...state,
            usersData: action.users,
        };
    } else if (action.type === SET_CURRENT_PAGE) {
        return {
            ...state,
            currentPage: action.currentPage,
        };
    } else if (action.type === SET_TOTAL_USERS_COUNT) {
        return {
            ...state,
            totalUsersCount: action.amount,
        };
    } else if (action.type === TOGGLE_IS_FETCHING) {
        return {
            ...state,
            isFetching: action.isFetching,
        };
    } else if (action.type === TOGGLE_FOLLOWING_IN_PROGRESS) {
        return {
            ...state,
            followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
        };
    };
    return state;
};

export const followSuccess = (userid) => ({type: FOLLOW, userid,});
export const unfollowSuccess = (userid) => ({type: UNFOLLOW, userid,});
export const setUsers = (users) => ({type: SET_USERS, users,});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage,});
export const setTotalUsersCount = (amount) => ({type: SET_TOTAL_USERS_COUNT, amount,});
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching,});
export const setFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId});

export const getUsers = (currentPage, pageSize) => {
    return (
        (dispatch) => {
            dispatch(setIsFetching(true));
            userAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(setIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
        }
    );
};

export const follow = (userId) => {
    return (
        (dispatch) => {            
            dispatch(setFollowingInProgress(true, userId));
            userAPI.follow(userId).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                };
                dispatch(setFollowingInProgress(false, userId));
            });
        }
    );
};

export const unfollow = (userId) => {
    return (
        (dispatch) => {            
            dispatch(setFollowingInProgress(true, userId));
            userAPI.unfollow(userId).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                };
                dispatch(setFollowingInProgress(false, userId));
            });
        }
    );
};

export default usersReducer;
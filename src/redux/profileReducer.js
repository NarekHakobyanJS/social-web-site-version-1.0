import { usersAPI, profileAPI } from "../api/api";
import uniqid from "uniqid";

const ADD_POST = "my-book/profile/ADD_POST"
const REMOVE_POST = "my-book/profile/REMOVE-POST"
const LIKES_COUNT = "my-book/profile/LIKES_COUNT"
const SET_USER_PROFILE = "my-book/profile/SET_USER_PROFILE"
const SET_STATUS = "my-book/profile/SET_STATUS"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"
let initialState = {
    posts: [
        { id: uniqid(), message: "its my first post", likesCount: 55 },
        { id: uniqid(), message: "its my Last post", likesCount: 22 }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: uniqid(),
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case REMOVE_POST: {
            return {
                ...state,
                posts: [...state.posts].filter(post => post.id !== action.postId)
            }
        }
        case LIKES_COUNT:
            return {
                ...state,
                posts: [...state.posts].map(el => {
                    return {
                        ...el,
                        likesCount: el.likesCount + 1
                    }
                })
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos : action.photos}
            }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const removePostActionCreator = (postId) => ({ type: REMOVE_POST, postId: postId });
export const likesCountAC = () => ({ type: LIKES_COUNT })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)

    dispatch(setUserProfile(response.data))

}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)

    dispatch(setStatus(response.data))

}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }

}


export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }

}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
       dispatch(getUserProfile(userId))
    }

}
export default profileReducer
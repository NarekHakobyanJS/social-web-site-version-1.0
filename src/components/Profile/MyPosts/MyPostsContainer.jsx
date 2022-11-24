import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, removePostActionCreator, likesCountAC } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        posts : state.profilePage.posts,
        newPostText : state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost : (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        },
        deletePost : (postId) => {
            dispatch(removePostActionCreator(postId))
        },
        likesCountF : () => {
            dispatch(likesCountAC())
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer
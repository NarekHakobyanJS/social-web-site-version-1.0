import React from 'react';
import s from "./post.module.css";
import { IoBackspace } from "react-icons/io5";

function Posts({post, deletePost, likesCountF}) {

    const postDelete = (postId) => {
        deletePost(postId)
    }

    const likes = () => {
        likesCountF()
    }
    
    return (
        <div className={s.post}>
            <img src="https://i.pinimg.com/736x/81/74/1b/81741be2b0f6e72851b7ab63c0829354.jpg" width={110}/>
            <p>posts : {post.message}</p>
            <p onClick={likes}>likes Count : {post.likesCount}</p>
            <IoBackspace onClick={() => postDelete(post.id)}/>
        </div>
    )
}

export default Posts
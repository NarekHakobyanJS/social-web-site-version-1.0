import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Users.module.css"

const User = React.memo(({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={"/profile/" + user.id}>
                        <img className={s.img} src={user.photos.small !== null ? user.photos.small : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkg3ClxVSdK4cD_juUvCqnhTyOQyoYL-yk7qehXnig8PZO4vwR419FbItR-Lx1XXuClg&usqp=CAU"} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {unfollow(user.id) }}>unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {follow(user.id) }}>follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.id}</div>
                </span>
            </span>
        </div>
    )
})

export default User


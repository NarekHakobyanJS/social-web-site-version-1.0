import React from 'react'
import {NavLink} from "react-router-dom"
import s from "./navbar.module.css";

function Navbar() {
    const isActive = ({isActive}) => isActive ? `${s.active}` : `${s.delActive}`
    return (
        <nav className={s.nav}>
            <div className={s.navlink}>
                <NavLink to="/profile" className={isActive}>Profile</NavLink>
            </div>
            <div className={s.navlink}>
                <NavLink to="/dialogs" className={isActive}>Dialogs</NavLink>
            </div>
            <div className={s.navlink}>
                <NavLink to="/users" className={isActive}>Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
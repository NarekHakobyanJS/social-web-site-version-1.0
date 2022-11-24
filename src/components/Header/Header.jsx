import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./header.module.css"

export default function Header(props) {
  return (
    <header className={s.header}>
      <img src="https://www.kibrispdr.org/data/17/barcelona-logo-images-23.jpg" width={60} />
      <div className={s.login_block}>
        {props.isAuth ? <div>{props.login}
        <button onClick={props.logout}>logout</button></div> 
        : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  )
}

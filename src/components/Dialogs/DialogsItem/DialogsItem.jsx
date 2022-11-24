import { NavLink } from "react-router-dom"
import s from "../dialogs.module.css"

const DialogsItem = (props) => {
    const path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem
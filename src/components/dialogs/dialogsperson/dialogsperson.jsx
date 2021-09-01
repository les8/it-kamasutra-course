import { NavLink } from "react-router-dom";
import './dialogsperson.scss'

const DialogsPerson = (props) => {
    return(
        <div className="dialogs__person">
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsPerson;
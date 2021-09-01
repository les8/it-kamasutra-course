import {NavLink} from "react-router-dom";
import './nav.scss';
const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/dialogs">Messages</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/music">Music</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;
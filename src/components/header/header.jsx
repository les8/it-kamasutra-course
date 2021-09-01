import { NavLink } from 'react-router-dom';
import './header.scss';
const Header = (props) => {
    return (
        <header className='header'>
            <div className='header__head'>                 
                <div className='header__name'>MINT</div>                 
            </div>
            <div className='header__login'>
                {
                    props.isAuth 
                    ? <NavLink className='header__loginLink' to={'/profile'}> 
                        {props.login}
                        <button onClick={props.logout}>Logout</button>                        
                    </NavLink>
                    : <NavLink className='header__loginLink' to={'/login'}>Login</NavLink> 
                }                
            </div>
                                   
        </header>        
    );
};

export default Header;
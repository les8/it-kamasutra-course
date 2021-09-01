import './userscard.scss';
import { NavLink } from 'react-router-dom';

const UsersCard = (props) => {
    return (
        <div className="users__card">
            <div className="users__ava">
                <NavLink to={'/profile/' + props.id}>
                    <img src={ props.photos.small !== null 
                    ? props.photos.small 
                    : props.photos.large} alt="user" />
                </NavLink>                
                <div>
                    { 
                        props.followed 
                        ? <button disabled={props.followingInProgress.some(id => id === props.id)} 
                        onClick={ () => {props.unfollow(props.id)}
                        }>Unfollow</button> 
                        : <button disabled={props.followingInProgress.some(id => id === props.id)} 
                        onClick={ () => {props.follow(props.id)} 
                        }>Follow</button> 
                    }
                </div>                
            </div>
            <ul className='users__description'>
                <li>{props.name}</li>
                <li>id: {props.id}</li>
                <li>status: {props.status}</li>
            </ul>            
        </div>                
    );
};

export default UsersCard;
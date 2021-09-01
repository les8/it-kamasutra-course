import UsersCard from "./userscard/userscard";
import './users.scss';

const Users = (props) => {
    let userElement = props.usersData.map( (el, i) => <UsersCard
        key={i} 
        name={el.name}
        followSuccess={props.followSuccess}
        unfollowSuccess={props.unfollowSuccess}
        follow={props.follow}
        unfollow={props.unfollow}
        followed={el.followed}        
        id={el.id}
        status={el.status}
        photos={el.photos}
        followingInProgress={props.followingInProgress} 
    />);
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesArr = [];
    for (let i=1; i<=pagesCount; i++) {
        pagesArr.push(i);
    };
    return (
        <div className="users">
            <ul className="users__carusel">
                {pagesArr.map(p => {
                    return(
                        <li className={props.currentPage === p && 'users__selectedPage'} 
                        onClick={() => {props.onPageChanged(p)}}>{p}</li>
                    )                      
                })}
            </ul>
            <input type="text" placeholder="Введите имя пользователя..." />
                {userElement}
            <button>Get Users</button> 
        </div> 
    );
};

export default Users;
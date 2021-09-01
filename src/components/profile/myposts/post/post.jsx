import './post.scss';
const Post = (props) => {
    return (
        <div className="profile__post">
            <div className="profile__comment">
                <img src='https://hsto.org/files/1b8/5c6/cf7/1b85c6cf74404c72b7a976de6cc9b972.jpg' alt='errerr'/>            
                <div>{props.message}</div>
            </div>
            <div className="profile__stat">
                <span>{props.likes} likes</span>
            </div>            
        </div>
    );
};

export default Post;
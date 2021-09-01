import MyPostContainer from "./myposts/mypostscontainer";
import ProfileInfo from "./profileinfo/profileinfo";
import './profile.scss'

const Profile = (props) => {    
    return (
        <div className='profile'>            
            <div className='profile__page'>                
                <ProfileInfo 
                    profile={props.profile} 
                    status={props.status} 
                    updateStatus={props.updateStatus} 
                />
                <MyPostContainer />
            </div>            
        </div>
    );
};

export default Profile;
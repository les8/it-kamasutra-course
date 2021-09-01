import './profileinfo.scss';
import Preloader from './../../common/preloader/preloader';
import ProfileStatus from './profileStatus/profileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    };   
    return (
        <div className='profile__about'>
            <div className='profile__person'>
                <img src={null
                        /*
                            props.profile.photos.small !== null 
                            ? props.profile.photos.small 
                            : props.profile.photos.large
                            хз, не работает
                        */
                        
                    } 
                    alt={props.profile.fullName + `'s photo`} />
                <ul className='profile__personInfo'>
                    <li>{props.profile.fullName}</li>
                    <li>{ null
                        /*
                            props.profile.contacts.website !== '' 
                            ? 'Website: ' + props.profile.contacts.website 
                            : null
                            хз, не работает
                        */
                    }</li>
                    <li>{
                        props.profile.lookingForAJob 
                        ? 'Looking For A Job: ' + props.profile.lookingForAJobDescription 
                        : null
                    }</li>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </ul>
            </div>                    
        </div>
    );    
};

export default ProfileInfo;
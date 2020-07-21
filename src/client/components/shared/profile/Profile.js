import React from 'react';
import avatar from '../../../static/profile-logo.png';
import { userName, login } from '../../../data/user-data';
import './profile.scss';

function Profile(props) {
    return (
        <div className="profile">
            <img src={avatar} alt="avatar" />
            {
                props.username ?
                    <span className="username">{userName}</span>
                    :
                    <span className="login">{login}</span>
            }
        </div>
    )
}

export default Profile;

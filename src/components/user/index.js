import React from "react";

import './index.css';

function User({userName, userPic, userFollowers, userFollowing, numRepos}) {
        return (
            <div className="user-info">
                <div className="picture-circle">
                    <img src={userPic} alt="from github" className="user-pic"/>
                </div>
                <h2 className="name">{userName}</h2>
                <div className="follow">
                    <p className="followers">Followers: <span className="bold-text">{userFollowers}</span></p>
                    <p className="following">Following: <span className="bold-text">{userFollowing}</span></p>
                </div>
                <div className="stars">

                </div>
                <p>Repositories: <span className="bold-text">{numRepos}</span></p>
            </div>
        );

}

export default User;
import React from 'react';
import { Link } from 'react-router-dom';

const SocialCard = ({ userData }) => {

    return (
        <div className="team__member">
            <figure className="team__member--img--mask">
                <img src={userData.picture.large} alt="" className="team__member--img" />
            </figure>

            <h4 className="team__member--name">{userData.name.first} {userData.name.last}</h4>
            <p className="team__member--department">{userData.location.city}</p>
            <a href={`mailto:${userData.email}`} className="team__member--email link__hover--effect">{userData.email}</a>
            <Link to={`/`}><button className="team__member--details-button button-press">View Details &gt;</button></Link>


        </div>
    );
};

export default SocialCard;
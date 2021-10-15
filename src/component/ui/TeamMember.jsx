import React from 'react';
import { Link } from 'react-router-dom';

const TeamMember = ({employee}) => {
    return (
        <div className="team__member">
            <figure className="team__member--img--mask">
                <img src={employee.url} alt="" className="team__member--img" />
            </figure>

            <h4 className="team__member--name">{employee.firstName} {employee.lastName}</h4>
            <p className="team__member--department">{employee.department}</p>
            <a href={`mailto:${employee.email}`} className="team__member--email link__hover--effect">{employee.email}</a>

            <Link to={`/employee/${employee.employeeID}`}><button className="team__member--details-button">View Details &gt;</button></Link>
        </div>
    );
}

export default TeamMember;

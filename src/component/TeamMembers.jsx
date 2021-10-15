import React from 'react';
import TeamMember from './ui/TeamMember';
import {employees} from '../data'

const TeamMembers = () => {
    return (
        <div className="team">

            {employees
                .map((employee) => (
                    <TeamMember employee={employee} key={employee.employeeID}/>
            ))}
        </div>
    );
}

export default TeamMembers;

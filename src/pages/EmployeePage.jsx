import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TeamMember from '../component/ui/TeamMember';

const EmployeePage = ({ employees }) => {
    const {employeeID} = useParams();
    const employee = employees.find(employee => +employee.employeeID === +employeeID)
    return (
        <main>
            <div className="container">
                <div className="selected__employee--top">
                    <Link to="/">
                        <button className="back__button"> &lt; Previos employee</button>
                    </Link>
                </div>
                <div className="employee__description">
                    <figure className="team__member--img--mask">
                        <img src={employee.url} alt="" className="team__member--img" />
                    </figure>
                    <div className="employee__description--box">
                        <h4>{employee.firstName} {employee.lastName}</h4>
                        <p className="team__member--department">{employee.department}</p>
                        <a href={`mailto:${employee.email}`} className="team__member--email link__hover--effect">{employee.email}</a>
                        <p>{employee.departmentDesc}</p>
                    </div>
                </div>
                <div className="more__employees">

                    {
                        employees
                        .filter(employee => +employee.employeeID !== +employeeID)
                        .slice(0,4)
                        .map(employee => <TeamMember employee={employee} key={employee.employeeID}/>)
                    }
                </div>
            </div>
        </main>
    );
}

export default EmployeePage;

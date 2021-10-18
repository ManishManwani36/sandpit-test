import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const TeamMember = ({ employee }) => {
    // const [img, setImg] = useState();

    // const mountedRef = useRef(true);

    // useEffect(() => {
    //     const image = new Image();
    //     image.src = employee.url;
    //     image.onload = () => {
    //         setTimeout(() => {
    //             if (mountedRef.current) {
    //                 setImg(image);
    //             }
    //         },300);
    //     };
    //     return () => {
    //         mountedRef.current = false;
    //     }
    // })


    return (
        <div className="team__member">
            {/* {
                img ? (
                    <>
                        <figure className="team__member--img--mask">
                            <img src={img.src} alt="" className="team__member--img" />
                        </figure>

                        <h4 className="team__member--name">{employee.firstName} {employee.lastName}</h4>
                        <p className="team__member--department">{employee.department}</p>
                        <a href={`mailto:${employee.email}`} className="team__member--email link__hover--effect">{employee.email}</a>

                        <Link to={`/employee/${employee.employeeID}`}><button className="team__member--details-button">View Details &gt;</button></Link>
                    </>)
                    :
                    (<>
                        <div className="team__member--img--skeleton"></div>
                        <div className="skeleton employee__title--skeleton"></div>
                        <div className="skeleton employee__department--skeleton"></div>
                        <div className="skeleton employee__email--skeleton"></div>
                        <div className="skeleton view__details--skeleton"></div>

                    </>
                    )} */}
        </div>
    );
}

export default TeamMember;

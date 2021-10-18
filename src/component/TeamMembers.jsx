import React, { useEffect } from 'react';
import SocialCard from './ui/SocialCard';

const TeamMembers = () => {

    const api_url = 'https://randomuser.me/api/?results=8'
    const [users, setUsers] = React.useState([]);

    async function getUserList() {
        const data_list = await (
            await fetch(api_url)
        ).json();
        setUsers(data_list.results);
    }

    useEffect(() => {
        getUserList()
    }, [])


    return (
        <div className="team">

            {users
            .map((user, index) => (
                <SocialCard userData={user} key={index} />
            ))}
        </div>
    );
}

export default TeamMembers;

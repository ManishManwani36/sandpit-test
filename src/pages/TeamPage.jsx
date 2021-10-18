import React, { useEffect, useState, useRef } from 'react';
import Main from '../component/Main';
import TeamMembers from '../component/TeamMembers';
import SocialCard from '../component/ui/SocialCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TimelineLite, Power3 } from 'gsap/gsap-core';


gsap.registerPlugin(ScrollTrigger)

const TeamPage = () => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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


    let t1 = new TimelineLite({delay: 0.3});

    useEffect(() => {
        gsap.from('.scroll', {
            duration: 1.2,
            y: '100',
            opacity: 0,
            ease: 'ease-in',
            scrollTrigger: {
                trigger:  '.scroll',
                start: 'top 90%',
            }
        })
    }, []);



    return (
        <>
            <main >
                <div className="container">
                    <div>
                        <h3 >OUR TEAM</h3>
                    </div>

                    <div className="team__desc" style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
                        <h1>Lorem, ipsum dolor.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sit.
                            Vitae quaerat suscipit atque quas similique rerum laborum quod doloribus, ducimus blanditiis sit
                            id, voluptatibus amet earum, enim praesentium nulla.</p>


                        <h3>V</h3>
                    </div>
                </div>
            </main>


            <div className="team scroll" style={{ transform: `translateY(${offsetY * 0}px)` }} >

                {users
                    .map((user, index) => (
                        <SocialCard userData={user} key={index} />
                    ))}
            </div>
        </>
    );
}

export default TeamPage;

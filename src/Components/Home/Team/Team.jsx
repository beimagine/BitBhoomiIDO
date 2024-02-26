import React from 'react';
import './Team.css';

const Team = () => {
    return (
        <>
            <section className="teamSection">
                <h1 className="heading">Team</h1>
                <div className="teamMembersContainer">
                    <div className="teamMember">
                        <img src='/T1.svg'></img>
                        <p>Lorem Ipsum</p>
                        <h3>Name</h3>
                    </div>
                    <div className="teamMember">
                        <img src='/T11.svg'></img>
                        <p>Lorem Ipsum</p>
                        <h3>Name</h3>
                    </div>
                    <div className="teamMember">
                        <img src='/T2.svg'></img>
                        <p>Lorem Ipsum</p>
                        <h3>Name</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team;
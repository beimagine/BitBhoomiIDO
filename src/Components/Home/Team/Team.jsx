import React from 'react';
import './Team.css';

const Team = () => {
    return (
        <>
            <section className="teamSection">
                <h1 className="heading">Team</h1>
                <div className="teamMembersContainer">
                    <div className="teamMember">
                        <div>
                            <img src='/T1.svg'></img>
                        </div>
                        <p>Founder and CEO</p>
                        <h3>Nikhil Goyal</h3>
                    </div>
                    <div className="teamMember">
                        <div>
                            <img src='/T11.svg'></img>
                        </div>
                        <p>Co-Founder and CTO</p>
                        <h3>Anthony Raj</h3>
                        <span>(Ex-Microsoft and Cisco)</span>
                    </div>
                    <div className="teamMember">
                        <div>
                            <img src='/T2.svg'></img>
                        </div>
                        <p>COO</p>
                        <h3>Alejandro Giuffrida</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team;
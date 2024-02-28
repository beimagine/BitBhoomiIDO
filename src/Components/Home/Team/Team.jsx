import './Team.css';

const teamMembers = [
    {
        name: 'Nikhil Goyal',
        role: 'Founder and CEO',
        image: '/T1.svg',
        experience: '(Serial Entrepreneur)'
    },
    {
        name: 'Anthony Raj',
        role: 'Co-Founder and CTO',
        image: '/T11.svg',
        experience: '(Ex-Microsoft and Cisco)'
    },
    {
        name: 'Alejandro Giuffrida',
        role: 'COO',
        image: '/T2.svg',
        experience: '(Former rector of the Champagnat University (Argentina) and president of the Association of Latin American and Caribbean Universities for Integration)'
    },
];

const Team = () => {
    return (
        <section className="teamSection">
            <h1 className="heading">Team</h1>
            <div className="teamMembersContainer">
                {teamMembers.map((member, index) => (
                    <div className="teamMember" key={index}>
                        <div>
                            <img src={member.image} alt={member.name} />
                        </div>
                        <p>{member.role}</p>
                        <h3>{member.name}</h3>
                        {member.experience && <span><i>{member.experience}</i></span>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;

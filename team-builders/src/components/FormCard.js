import React from "react";

const FormCard = props => {
    return (
        <div className="card">
            {props.members.map(member => (
                <div className="member-card" key={member.id}>
                    <p>{member.name}</p>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    )
}

export default FormCard;

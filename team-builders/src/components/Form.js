import React, { useState } from 'react';

const Form = props => {
    console.log("props", props);

    const [member, setMember] = useState({name: "", email: "", role: ""});

    const inputChanges = event => {
        console.log("event", event.target.value);
        console.log("name", event.target.name);
        setMember({...member, [event.target.name]: event.target.value});
    }

    console.log("member", member);

    const submitMember = event => {
        console.log("submitted");
        event.preventDefault();
        props.addNewMember(member);
        setMember({ name: "", email: "", role: "" });
    }

    return (
        <form onSubmit={submitMember}>
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder="Enter name" id="name" name="name" value={member.name} onChange={inputChanges} />
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder="Enter email" id="email" name="email" value={member.email} onChange={inputChanges} />
            <label htmlFor="role">Role:</label>
            <input type="text" placeholder="Enter role" id="role" name="role" value={member.role} onChange={inputChanges} />
            <button type="submit">Add member</button>
        </form>
    )
}

export default Form;

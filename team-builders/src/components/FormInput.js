import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const FormInput = props => {
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
        <Form onSubmit={submitMember}>
            <FormGroup>
                <Label htmlFor="name">Name:</Label>
                <Input type="text" placeholder="Enter name" id="name" name="name" value={member.name} onChange={inputChanges} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="email">Email:</Label>
                <Input type="email" placeholder="Enter email" id="email" name="email" value={member.email} onChange={inputChanges} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="role">Role:</Label>
                <Input type="text" placeholder="Enter role" id="role" name="role" value={member.role} onChange={inputChanges} /> 
            </FormGroup>
            <Button type="submit" color="primary">Add member</Button>
        </Form>
    )
}

export default FormInput;

import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(event);
        fetch('http://localhost:8085/user/register', {
            method: 'POST',
            body: JSON.stringify({email: email, password: password, userName: username}),
            headers: new Headers({
                'Content-Type':'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.token)
        }).catch(err => console.log(err))
    }


    return(
        <div className="main">
        <div className="Register-container">

            <h1>Register</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>
                <Button type="submit">Register</Button>
            </Form>


        </div>
    </div>
    )
};

export default Register;
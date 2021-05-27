import React, {useState} from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8085/user/login', {
            method: 'POST',
            body: JSON.stringify({user:{userName: username, password: password}}),
            headers: new Headers({
                'Content-Type':'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.token)
        })
    }



    return(
        <div className="main">
        <div className="login-container">

            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
            


        </div>
    </div>
    )
};

export default Login;
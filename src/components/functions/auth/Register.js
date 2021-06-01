import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleSubmit = (event) => {

        event.preventDefault(event);

        const emailIsValid = () => {
            if (/\S+@\S+\.\S+/.test(email)) {
                return (true)
            } else { return (alert("Email address must fit standard email address format"))}
        }
        
        const usernameIsValid = () => {
            if (/^(?=.{4,})(?=.*\d)(?=.*\w)(?!.*\s).*$/.test(username)) {
                return (true)
            } else { return (alert("username must be at least 4 characters and conatin at least one number or special character"))}
        }
       
        const passwordIsValid = () => {
            if (/^(?=.{5,})(?!.*\s).*$/.test(password)) {
                return (true)
            } else { return (alert("Password must be at least 5 characters"))}
        }

        if (emailIsValid() && usernameIsValid() && passwordIsValid()) {

            fetch('http://localhost:8080/user/register', {
                method: 'POST',
                body: JSON.stringify({ email: email, password: password, userName: username }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(
                (response) => response.json()
            ).then((data) => {
                props.updateToken(data.token)
                history.push("/profile");
            }).catch(err => console.log(err))

        } else {
            alert("Email, Username, and Password must be provided")
        }

    }


    return (
        <div className="main">
            <div className="Register-container d-flex justify-content-center">

                <Row>
                    <Col>

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
                            <p />
                            <Button type="submit" color="primary">Register</Button>
                        </Form>

                    </Col>
                </Row>

            </div>
        </div>
    )
};

export default Register;
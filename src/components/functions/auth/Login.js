import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault(event);
        fetch('http://localhost:8080/user/login', {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.token);
            history.push("/profile");
        }).catch(err => console.log(err))
    }



    return (
        <div className="main">
            <div className="login-container d-flex justify-content-center">

                <Row>
                    <Col>

                        <h1>Login</h1>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                            </FormGroup>
                            <p />
                            <Button type="submit">Login</Button>
                        </Form>

                    </Col>
                </Row>

            </div>
        </div>
    )
};

export default Login;
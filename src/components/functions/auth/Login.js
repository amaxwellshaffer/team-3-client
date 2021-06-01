import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
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
        }).catch((err) => {
            console.log(err);
            alert("Valid Email and Password must be provided")
        })
    }



    return (
        <div className="main">
            <div className="login-container d-flex justify-content-center">

                <Row>
                    <Col>

                        <h1>Login</h1>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Email</InputGroupText>
                                    </InputGroupAddon>
                                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                                    </InputGroup>
                            </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                                </FormGroup>
                                <br />
                                <Button type="submit" color="primary" >Login</Button>
                        </Form>

                    </Col>
                </Row>

            </div>
            </div>
    )
};

export default Login;
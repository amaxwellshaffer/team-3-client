import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Jumbotron } from 'reactstrap';

const Home = () => {
    return (
        <div className="main">
            <div className="home-container">
                <Jumbotron fluid className='jumbotron'>
                    <Container>
                        <br />
                        <h1 className='page-title'>Welcome to Throwback Theater</h1>
                    <   p className='lead'>
                        remember, reminisce, and review your favorite 80's and 90's movies in classic blockbuster fashion!
                        </p>
                        <hr className="my-2" />
                        <p><Link to="/register">Become a member</Link> to get started! <br />
                        Already a member? <Link to="/login">Login</  Link> </p>
                        <hr className="my-2" />
                    </Container>
                </Jumbotron>
                <Container fluid className='middle-home-page'>
                    <Row>
                        <Col xs="6">
                            <h5 className='header-home'>Discover. Search. Watch. Review. Repeat.</h5>
                            <p className='text-home'>The 80's and 90's introduced exciting new technology, some great music and movies, as well as some truly unique fashion trends. While we don’t always realize how great a period of time is while we’re actually experiencing it, hindsight gives us the ability to look back at some of the things that we may have taken for granted. This was a pivotal period of time in pop culture that we can all look back fondly on...well, for the most part.
                            <br />
                            <br />
                            Take a step back in time and relive (or perhaps experience for the first time) the amazing movies of the 80's and 90's. Never be left in the dark when someone references a brilliant movie quote from this time period. "You're killing me, Smalls!"
                            <br />
                            <br />
                            "Do you like scary movies"? Discover them here. Now "Show me the money"...movies!  
                            </p>
                            
                        </Col>
                        <Col xs="6">
                            <img className='home-picture' src='https://370g431nca8u23kfvb3cilkf-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/IMG_3663-480x480.jpg'></img>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;
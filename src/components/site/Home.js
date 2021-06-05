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
                        <h6><Link to="/register">Become a member</Link> to get started! <br />
                        Already a member? <Link to="/login">Login</  Link> </h6>
                        <hr className="my-2" />
                    </Container>
                </Jumbotron>
                <Container fluid className='middle-home-page'>
                    <Row xs='2'>
                        <Col xs="6">
                            <Row>
                            <h5 className='header-home'>Discover. Search. Watch. Review. Repeat.</h5>
                            </Row>
                            <Row>
                            <p className='text-home'>The 80's and 90's introduced exciting new technology, some great music and movies, as well as some truly unique fashion trends. While we don’t always realize how great a period of time is while we’re actually experiencing it, hindsight gives us the ability to look back at some of the things that we may have taken for granted. This was a pivotal period of time in pop culture that we can all look back fondly on...well, for the most part.
                            <br />
                            <br />
                            Take a step back in time and relive (or perhaps experience for the first time) the amazing movies of the 80's and 90's. Never be left in the dark when someone references a brilliant movie quote from this time period. "You're killing me, Smalls!"
                            <br />
                            <br />
                            "Do you like scary movies"? Discover them here. Now "Show me the money"...movies!  
                            </p>
                            </Row>
                        </Col>
                        <Col xs="6">
                            <img className='home-picture' src='https://370g431nca8u23kfvb3cilkf-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/IMG_3663-480x480.jpg' className='card' height='400px'></img>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className='featured-films-section'>
                    <Row>
                        <Col>
                        <h3 className='header-home'>Featured Films</h3> 
                        <hr className="my-2" />
                        <p>We asked the app developers' for their favorite movie from the 80's or 90's. The "Delevopers' Picks" are in!</p>
                        </Col>
                    </Row>
                    <Row className='developer-picks'>
                        <Col>
                            <img src='https://images-na.ssl-images-amazon.com/images/I/81E911hVDAL._AC_SL1500_.jpg' className='card' height='300px'/>
                            <h5 className='page-title'>Max's Pick</h5>
                            <p>Title: Return of the Jedi</p>
                            <p>Release Year: 1983</p>
                            <p>Max's Review: “Do you think they’ll make a fourth one?”</p>
                        </Col>
                        <Col>
                            <img src='https://i.ebayimg.com/images/g/X94AAOSwcLxYCp6e/s-l500.jpg' className='card' height='300px'/>
                            <h5 className='page-title'>Ashleigh's Pick</h5>
                            <p>Title: Set It Off</p>
                            <p>Release Year: 1996</p> 
                            <p>Ashleigh's Review:</p>
                        </Col>
                        <Col>
                            <img src='https://i.pinimg.com/originals/bf/93/bd/bf93bd7b361b9a43b54c59161966cb18.png' className='card' height='300px'/>
                            <h5 className='page-title'>Turner's Pick</h5>
                            <p>Title: Pulp Fiction</p>
                            <p>Release Year: 1994</p>
                            <p>Turner's Review:</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;


{/* <CardDeck xs='3' className='card'>
      <Card>
        <CardImg top width="100%" src="https://images-na.ssl-images-amazon.com/images/I/81E911hVDAL._AC_SL1500_.jpg" alt="Return of the Jedi" />
        <CardBody>
          <CardTitle tag="h5">Max's Pick</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Title: Return of the Jedi</CardSubtitle>
          <CardText>
              Release Year: 1983
              Max's Review: “Do you think they’ll make a fourth one?”
            </CardText>
          <Button Link=''>Movie Info</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://i.ebayimg.com/images/g/X94AAOSwcLxYCp6e/s-l500.jpg" alt="Set It Off" />
        <CardBody>
          <CardTitle tag="h5">Ashleigh's Pick</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Title: Set It Off</CardSubtitle>
          <CardText>
              Release Year: 1996
              Ashleigh's Review:  
            </CardText>
          <Button Link>Movie Info</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck> */}

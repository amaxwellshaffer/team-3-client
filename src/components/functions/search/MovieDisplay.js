import React from 'react'; 
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardDeck, Container, Button
  } from 'reactstrap'; 
import AddReview from './AddReview'; 


const MovieDisplay = ({movie}) => {
    
    return (
        <Container>
            <CardDeck>
                <Card>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                    <CardBody>
                        <CardTitle tag="h5">{movie.title}</CardTitle>
                        {/* <CardText>{movie.overview}</CardText> */}
                        <AddReview className="btn btn-primary" movie={movie} >Add Movie Review</AddReview>
                        {/* <Button>Add Movie Review</Button> */}
                    </CardBody>
                </Card>
            </CardDeck>
      </Container> 
    )
}

export default MovieDisplay; 


import React from 'react'; 
import {
    Card, CardText, CardBody,
    CardTitle, CardDeck,  
  } from 'reactstrap'; 
import AddReview from './AddReview'; 

const MovieDisplay = ({movie}) => {
    
    return (
        <CardDeck>
            <Card className='card' body inverse color="primary" >
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                <CardBody>
                    <CardTitle tag="h6">{movie.title}</CardTitle>
                    {/* <CardText>{movie.overview}</CardText> */}
                    <AddReview className="btn btn-primary" movie={movie}>Add Movie Review</AddReview>
                </CardBody>
            </Card>
        </CardDeck>       
    )
}

export default MovieDisplay; 


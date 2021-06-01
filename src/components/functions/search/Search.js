import React, { useState } from "react";
import MovieDisplay from "./MovieDisplay";
import {  Container, Row, Col } from 'reactstrap';

const baseURL = 'https://api.themoviedb.org/3/discover/movie';
// const API_KEY = process.env.MOVIE_DB_KEY;

const Search = () => {
    const [query, setQuery] = useState(''); 
    const [data, setData] = useState();
    
    // let url = `${baseURL}?api_key=6b58dcdfa373912ad3062ec3929db37c&year=${query}`;
    let url = `${baseURL}?api_key=6b58dcdfa373912ad3062ec3929db37c&primary_release_year=${query}&sort_by=popularity.desc&include_adult=false`;
    // &sort_by=vote_average.desc`;
    
    
    
    const fetchMovies = () => {
        fetch(url)
        .then (res => {
            if (res.status !==200) {
                throw new Error('fetch error');
            } else return res.json();
        })
        .then(json => {
            if (json.results.length === 0) {
                throw new Error('No Results');
            } else { 
                const data = json.results; 
                setData(data); 
                console.log(json.results);
            }
        })
        .catch(err => console.log(err))
    }

    
    return (
        <div className="main">
            <div className="search-container">
                <Container fluid>
                    <Row>
                        <Col>
                            <h1>Discover Movies</h1>
                            <input 
                            value={query} 
                            onChange={(e) => setQuery(e.target.value)}
                            />
                            <button onClick={fetchMovies}>Enter Year to Find Movies</button>
                        </Col>
                    </Row>
                    <Row>
                        {!data ? null : data.map((i) => {
                            return (
                                <Col sm="4">
                                    <MovieDisplay movie={i}/>
                                </Col>
                            );
                        })}
                    </Row> 
                </Container>
            </div>
        </div>
    );
};

export default Search;


 {/* {data?.results?.map((movie) => {
    return (
    <MovieDisplay key={movie.title}/>
    ); 
})} */}
import React, { useState } from "react";
import MovieDisplay from "./MovieDisplay";
import { Container, Row, Col, CardGroup, Button, Input } from 'reactstrap';

const baseURL = 'https://api.themoviedb.org/3/discover/movie';
// const API_KEY = process.env.MOVIE_DB_KEY;

const Search = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);

    let url = `${baseURL}?api_key=6b58dcdfa373912ad3062ec3929db37c&primary_release_year=${query}&sort_by=popularity.desc&include_adult=false&page=3`;

    const fetchMovies = () => {
        fetch(url)
            .then(res => {
                if (res.status !== 200) {
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

    const dropDown = () => {
        let years = [];

        for(var i=1980; i<=1999; i++){
            years.push(i)
        };
        return(
        years.map((year) => {
            return (<option value={year}> {year}</option>)
        } )
        )
    }

    return (
        <div className="main">
            <div className="search-container">
                <Container fluid>
                    <Row>
                        <Col>
                            <br />
                            <h2 className='page-title'>Discover Movies from the 80's and 90's!</h2>

                            <h6>Enter a year between 1980 and 1999 below to see what movies topped the charts in that year!</h6>
                
                            <select class="form-select" value={query} onChange={(e) => setQuery(e.target.value)}>
                               
                               {dropDown()}
                              
                            </select>

                            <Button color='primary' onClick={fetchMovies}>Enter Year to Find Movies</Button>
                        </Col>
                    </Row>
                    <Row>

                        {!data ? null : data.map((i) => {
                            return (
                                <Col sm="6" md="4" lg="3">

                                    <MovieDisplay movie={i} />

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



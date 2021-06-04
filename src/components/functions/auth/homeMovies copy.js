import React, { useState } from "react";
import {  Container, Row, Col } from 'reactstrap';

const baseURL = 'https://api.themoviedb.org/3/discover/movie';
// const API_KEY = process.env.MOVIE_DB_KEY;

const HomeMovies = () => {
    const [query, setQuery] = useState(''); 
    const [data, setData] = useState();
    
    // let url = `${baseURL}?api_key=6b58dcdfa373912ad3062ec3929db37c&year=${query}`;
    let url = `${baseURL}?api_key=6b58dcdfa373912ad3062ec3929db37c&primary_release_year=${query}&release_date.gte=1980-01-01&release_date.lte=1999-12-31&include_adult=false`;
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
        
            <div className="search-container">
               
               <Row>
                        {!data ? null : data.map((i) => {
                            return (
                                <col>
                                <img src={`https://image.tmdb.org/t/p/w500/${i.poster_path}`}/>
                                </col>
                            );
                        })}
                    </Row> 
               
            </div>
        
    );
};

export default HomeMovies;
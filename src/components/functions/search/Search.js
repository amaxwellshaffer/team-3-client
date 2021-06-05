import React, { useState, useEffect, useRef } from "react";
import MovieDisplay from "./MovieDisplay";
import { Container, Row, Col, CardGroup, Button, Input, PaginationItem } from 'reactstrap';


const baseURL = 'https://api.themoviedb.org/3/discover/movie';
// const API_KEY = `${process.env.REACT_APP_API_KEY}`;


const Search = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
     let [pageNumber, setPageNumber] = useState(1);

     const didMount = useRef(false);

     useEffect(() => {
        if (didMount.current) fetchMovies();
        else didMount.current = true;
          
      }, [pageNumber])
    
    // let pageNumber = 1;

    
    const fetchMovies = () => {

        let url = `${baseURL}?api_key=6b58dcdfa373912ad3062ec3929db37c&primary_release_year=${query}&page=${pageNumber}&sort_by=revenue.desc&include_adult=false`;

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
                    console.log(url);
                    console.log('PN:',pageNumber);
                }
            })
            .catch(err => console.log(err))
    }

    const dropDown = () => {
        let years = [];

        for (var i = 1980; i <= 1999; i++) {
            years.push(i)
        };
        return (
            years.map((year) => {
                return (<option value={year}> {year}</option>)
            })
        )
    }

    const pageUp = () => {
        setPageNumber((page) => page + 1);          // page number gets sent to the url
        // fetchMovies();       // next results are fetched usint the updated page number
        console.log('Page Number:', pageNumber);
    };
   
   

    const pageDn = () => {

        console.log('PN:', pageNumber);
        if(pageNumber > 1){    //only allows you to decrease page number to 0
            setPageNumber((page) => page - 1);
        }else{                 // if page number is already 0, return ends the function here, will not fetch new results
            return;
        };
        
        fetchMovies()       // gets new results with decreased page number in url
        console.log('Page Number:', pageNumber);
    };

   


    const paginate = () => {

    

        return(
            <Row class="row justify-content-between">
                <Col>
                <Button  color="primary" size="sm" onClick={pageDn} >Prev</Button>
                </Col>
                <Col>
                <p>{`Page ${pageNumber}`}</p>
                </Col>
                <Col>
                <Button  color="primary" size="sm" onClick={pageUp}>Next</Button>
                </Col>
               
            </Row>
        )
    }

   

    return (
        <div className="main">
            <div className="search-container">
                <Container fluid>
                    <Row>
                        <Col>
                            <br />
                            <h2 className='page-title'>Discover Movies from the 80's and 90's</h2>


                            <h6>Select a year between 1980 and 1999 to rewind!</h6>


                            <select className="form-select" value={query} onChange={(e) => setQuery(e.target.value)}>
                            <option selected value="">Select A Year</option>
                                {dropDown()}
                            </select>
                           
                            <Button color='primary' onClick={() => { setPageNumber(1); if(query !== ''){fetchMovies()} } }>Go!</Button>



                        </Col>
                    </Row>

                       <br />
                       <Row> {data =="" ? null : paginate()}</Row>
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



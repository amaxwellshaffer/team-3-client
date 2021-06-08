import React from "react";
import { Row } from "reactstrap";
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


const Footer = (props) => {

    return(
        <footer className='footer'>
            <Row>
                <p>&copy; Throwback Theater 2021    
                <a href="/" onClick={props.clickLogout} className='logout'>Logout</a> </p>
            </Row>
            </footer>
    )
}

export default Footer;

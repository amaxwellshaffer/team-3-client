import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";
import Home from './Home';
import Search from '../functions/search/Search';
import Profile from '../functions/profile/Profile';
import Login from '../functions/auth/Login';
import Register from '../functions/auth/Register';

const Navigation = (props) => {

    const Indoor = () => {
        return (
            <Nav className="inside-links" navbar>
    
                <NavItem >
                    <NavLink tag={Link} to="/search">Search</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={Link} to="/profile">Profile</NavLink>
                </NavItem>

            </Nav>
        )
    }

    // className=" collapse navbar-collapse"
    const Outdoor = () => {
        return (
            <Nav className="auth-links" navbar>
                <NavItem>
                    <NavLink tag={Link} to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/register">Register</NavLink>
                </NavItem>
            </Nav>
        )

    }

    const protectedNav = () => {
        return (props.token === localStorage.getItem('token') ? Indoor()
            : Outdoor())
    }

    return (
        <div className="site-container">

            <Navbar color="light" light expand="sm">
                <NavbarBrand href="/">Throwback Theater</NavbarBrand>
                {protectedNav()}
            </Navbar>

            <div className="content-area">
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/search"><Search /></Route>
                    <Route exact path="/profile"><Profile /></Route>
                    <Route exact path="/login"><Login updateToken={props.updateToken} /></Route>
                    <Route exact path="/register"><Register updateToken={props.updateToken} /></Route>
                </Switch>

            </div>


        </div>

    )
}

export default Navigation
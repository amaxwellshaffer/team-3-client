import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="main">
            <div className="home-container">

                <h1>Welcome to Throwback Theater</h1>
                <p>
                    remember, reminisce, and review your favorite 90's movies in classic blockbuster fashion!
                </p>
                <p><Link to="/register">Become a member</Link> to get started! <br />
                Already a member?<Link to="/login">Login</Link> </p>


            </div>
        </div>
    );
};

export default Home;
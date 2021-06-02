import React, { useState, useEffect } from 'react';

import {
  Table,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardHeader,
  Container,
  Row,
  Col,
} from "reactstrap";

const Profile = (props) => {

  const [reviewList, setReviewList] = useState([]);
  let APIURL = "http://localhost:8080";


  const fetchReviews = (e) => {
    // e.preventDefault();

    fetch(`${APIURL}/movies/profile`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem('token'),
        // Authorization: token,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setReviewList(json);
        console.log(json);
      });
  };

  // const reviewMapper = (props) => {
  //     return reviewList.map((review, index) => {
  //         console.log(review.id)

  //         return (
  //             <div>
  //                 <Card>
  //                     <CardHeader className="cardHeader">{review.title}</CardHeader>
  //                     <CardImg src={review.posterPath} alt="Movie Poster"/>
  //                     <CardBody>
  //                         <CardTitle tag="h4">
  //                             Released: {review.year}
  //                         </CardTitle>
  //                         <CardText>
  //                             <p className="userReview">
  //                                 {review.comment}
  //                             </p>
  //                         </CardText>
  //                     </CardBody>
  //                 </Card>
  //             </div>
  //         )
  //     })
  // }

  return (
    <div className="main">
      <div className="profile-container">
        <h1>My Profile</h1>

        <Button className="listButton" onClick={fetchReviews} style={{color: "black", backgroundColor: "orange"}}>View my reviews</Button>

        {/* <Row className="divCont">{reviewMapper()}</Row> */}
      </div>
    </div>
  );
};

export default Profile;

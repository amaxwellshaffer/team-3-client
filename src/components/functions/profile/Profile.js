import React, { useState, useEffect } from "react";

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
        Authorization: localStorage.getItem("token"),
        // Authorization: token,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setReviewList(json.reviews);
        console.log(json);
      });
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const deleteReview = (review) => {
    fetch(`${APIURL}/movies/remove/${review.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      }),
    })
      .then(() => fetchReviews())
      .catch((err) => console.log(err));
  };


  console.log(reviewList);

  const reviewMapper = () => {
    return reviewList.map((review, index) => {
      console.log(review.id);

      return (
        <div>
          <Card>
            <CardHeader className="cardHeader" tag="h4">
              {review.title}
            </CardHeader>
            <CardImg src={review.posterPath} alt="Movie Poster" />
            <CardBody>
              <CardTitle tag="h6">Released: {review.year}</CardTitle>
              <CardText>
                <p className="userReview">{review.comment}</p>
              </CardText>
              <Button color="danger" size="sm" onClick={() => deleteReview(review)}>Delete Review</Button>
            </CardBody>
          </Card>
        </div>
      );
    });
  };

  return (
    <div className="main">
      <div className="profile-container">
        <h1>My Profile</h1>

        <Row className="divCont">{reviewMapper()}</Row>
      </div>
    </div>
  );
};

export default Profile;

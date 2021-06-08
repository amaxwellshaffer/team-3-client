import React, { useState, useEffect } from "react";
import EditComment from './EditComment';
import APIURL from '../../../helpers/environment';

import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";

const Profile = (props) => {
  const [reviewList, setReviewList] = useState([]);
  

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
  
  const reviewMapper = () => {

    return reviewList.map((review) => {
      let reviewId = review.id;
      console.log(review.id);

      return (
        <Col sm="6" md="4" lg="3">
            <Card className='card' body inverse color="primary" >
            <CardImg className="justify-content-md-center" src={`https://image.tmdb.org/t/p/w500/${review.posterPath}`} alt="Movie Poster" />
            <CardBody>
            <CardTitle className="cardTitle" tag="h5">
              Title: {review.title}
            </CardTitle>
              <CardTitle tag="h6">Released: {review.year}</CardTitle>
              <CardText>
                <div>
                  <h5>My Review:</h5>
                <p className="userReview">{review.comment}</p>
                </div>
              </CardText>

              <div className="reviewButtons">
              {/* <Button color="warning" size="sm" onClick={() => {editOn()}}> {(editComment) ? <EditComment APIURL={APIURL} reviewList={reviewList} fetchReviews={fetchReviews} review={review} reviewId={reviewId} setEditComment={setEditComment}/> : null}Edit Comment</Button> */}

              {/* <Button color="warning" size="sm" onClick={() => editReview(review)}>Edit Review</Button> */}

              <Button color="danger" size="sm" onClick={() => deleteReview(review)}>Delete Review</Button>
              </div>
            </CardBody>
          </Card>
          </Col>   
      );
    });
  };

  return (
    <div className="main">
      <div className="profile-container">
      <h1>My Profile</h1>

      <Container className="profileCards">
        <Row className="divCont">
          {reviewMapper()}
          </Row>
      </Container>
      </div>
    </div>
  );
};

export default Profile;

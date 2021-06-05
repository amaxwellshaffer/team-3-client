import React, { useState, useEffect } from "react";
import './Profile.css';
import EditComment from './EditComment';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardHeader,
  CardFooter,
  CardDeck,
  Container,
  Row,
  Col,
} from "reactstrap";

const Profile = (props) => {
  const [reviewList, setReviewList] = useState([]);
  const [editComment, setEditComment] = useState(false);
  const [commentEdit, setCommentEdit] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const APIURL = "http://localhost:8080";

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

  const editOn = () => {
    setEditComment(true);
  }

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


  // console.log(reviewList);

  const reviewMapper = () => {
    const EditingComment = EditComment;

    return reviewList.map((review) => {
      console.log(review.id);

      return (
        <div>
          <CardDeck style={{display: "flex", flexDirection: "row"}}>
            <Card className='card' body inverse color="primary" >
            <CardImg className="justify-content-md-center" /*id="reviewImg"*/ src={`https://image.tmdb.org/t/p/w500/${review.posterPath}`} alt="Movie Poster" />
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
              {/* <EditComment APIURL={APIURL} reviewId={review.id} fetchReviews={fetchReviews}></EditComment> */}
              {/* <Button color="warning" size="sm" <EditComment APIURL={APIURL} reviewId={review.id} fetchReviews={fetchReviews}></EditComment> >Edit Comment</Button> */}
              
              <div className="reviewButtons">
              <Button color="warning" size="sm" onClick={() => {editOn()}}> {(editComment) ? <EditingComment APIURL={APIURL} reviewList={reviewList} fetchReviews={fetchReviews} review={review} reviewId={review.id} setEditComment={setEditComment}/> : null}Edit Comment</Button>

              <Button color="danger" size="sm" onClick={() => deleteReview(review)}>Delete Review</Button>
              </div>
            </CardBody>
          </Card>
          </CardDeck>  
        </div>
      );
    });
  };

  return (
    <div className="main">
      <div className="profile-container">
      <h1>My Profile</h1>

      <Container className="profileCards">
      <Col xs="6" sm="3">
        <Row className="divCont">
          {reviewMapper()}
          </Row>
          </Col>
          </Container>
      </div>
    </div>
  );
};

export default Profile;

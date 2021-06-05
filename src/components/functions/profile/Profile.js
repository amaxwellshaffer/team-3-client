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

  // const handleShow = () => {
  //   setIsOpen(false);
  //   editOff();
  // };

  // const editOff = () => {
  //     setEditComment(false);
  // }

  // const updateComment = (review) => {
  //   // event.preventDefault();

  //   fetch(`${APIURL}/movies/edit/${review.id}`, {
  //     method: "PUT",
  //     body: JSON.stringify({ comment: commentEdit }),
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //       Authorization: localStorage.getItem("token"),
  //     }),
  //   })
  //     .then(() => {
  //       fetchReviews();
  //       commentModal();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const commentModal = () => {
  //   return (
  //     <Modal isOpen={isOpen} onKeyDown={onkeydown}>
  //     <ModalHeader>Edit Comment</ModalHeader>
  //     <ModalBody>
  //       <Form onSubmit={updateComment}>
  //         <FormGroup>
  //           <Label>New Comment:</Label>
  //           <Input
  //             value={commentEdit}
  //             onChange={(e) => setCommentEdit(e.target.value)}
  //           />
  //           <Button color="warning" size="sm">
  //             Submit
  //           </Button>
  //           <Button color="secondary" size="sm" onClick={handleShow}>Close</Button>
  //         </FormGroup>
  //       </Form>
  //     </ModalBody>
  //   </Modal>
  //   )
  // }

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
          <Container className="profileCards">
            <CardDeck>
          <Card>
            <CardHeader className="cardHeader" tag="h4">
              {review.title}
            </CardHeader>
            <CardImg className="profilePosters" src={`https://image.tmdb.org/t/p/w500/${review.posterPath}`} alt="Movie Poster" />
            <CardBody>
              <CardTitle tag="h6">Released: {review.year}</CardTitle>
              <CardText>
                <p className="userReview">{review.comment}</p>
              </CardText>
              {/* <EditComment APIURL={APIURL} reviewId={review.id} fetchReviews={fetchReviews}></EditComment> */}
              {/* <Button color="warning" size="sm" <EditComment APIURL={APIURL} reviewId={review.id} fetchReviews={fetchReviews}></EditComment> >Edit Comment</Button> */}


              <Button color="warning" size="sm" onClick={() => {editOn()}}> {(editComment) ? <EditingComment APIURL={APIURL} reviewList={reviewList} fetchReviews={fetchReviews} review={review} reviewId={review.id} setEditComment={setEditComment}/> : null}Edit Comment</Button>

              {/* <Button color="warning" size="sm" onClick={() => updateComment(review)}>Edit Review</Button> */}
              <Button color="danger" size="sm" onClick={() => deleteReview(review)}>Delete Review</Button>
            </CardBody>
          </Card>
          </CardDeck>
          </Container>
        </div>
      );
    });
  };

  return (
    <div className="main">
      <h1>My Profile</h1>
      <div className="profile-container">

        <Row className="divCont">{reviewMapper()}</Row>
      </div>
    </div>
  );
};

export default Profile;

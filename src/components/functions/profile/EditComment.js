import React, { useState, useEffect } from "react";

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
} from "reactstrap";

const EditComment = (props) => {
  const [commentEdit, setCommentEdit] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleShow = () => {
    setIsOpen(false);
    editOff();
  };

  const editOff = () => {
      props.setEditComment(false);
  }

  const onKeyDown = (e) => {
      if (e.key === "Enter"){
          {updateComment(e)}
      }
  }

  const updateComment = (event) => {
    event.preventDefault();

    fetch(`${props.APIURL}/movies/edit/${props.reviewId}`, {
      method: "PUT",
      body: JSON.stringify({ comment: commentEdit }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      }),
    })
      .then((res) => {
        props.fetchReviews();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal isOpen={isOpen} onKeyDown={onKeyDown}>
      <ModalHeader>`{props.review.title}`</ModalHeader>
      <ModalBody>
        <Form onSubmit={updateComment}>
          <FormGroup>
            <Label>New Comment:</Label>
            <Input
              value={commentEdit}
              onChange={(e) => setCommentEdit(e.target.value)}
            />
            <Button color="success" size="sm">
              Submit
            </Button>
            <Button color="secondary" size="sm" onClick={handleShow}>Close</Button>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default EditComment;

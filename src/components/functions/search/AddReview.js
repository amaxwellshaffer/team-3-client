import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';

const AddReview = (props) => {
    const [review, setReview] = useState(''); 
    const [modal, setModal] = useState(false);
    const toggle = () => {
        !localStorage.getItem('token') ? alert('You mussed be logged in to leave a comment') 
        : setModal(!modal);}
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/movies/review', {
            method: 'POST', 
            body: JSON.stringify({
                title:props.movie.title,
                year: props.movie.release_date,
                comment: review,
                posterPath: props.movie.poster_path
            }),
            headers: new Headers({ 
                'Content-Type': 'application/json', 
                'Authorization': localStorage.getItem('token')
            }),
        })
        .then((res) => res.json())
        .then((logReview) => {
            console.log(logReview);
        })
        .catch((err) => err);
    }

    return (
        <div>
            <Button outline color="info" onClick={toggle} >Add Review</Button>
            
            <Modal returnFocusAfterClose isOpen={modal} toggle={toggle} unmountOnClose={true} className={modal}>
                
                <ModalHeader toggle={toggle} close={closeBtn}>Movie Review</ModalHeader>
                <ModalBody>
                Add a rad review for {props.movie.title}: 
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <FormGroup>
                            <Input type="textarea" name="review" id="reviewText" maxlength="140"
                            value={review}
                            onChange={(e) =>setReview(e.target.value)}/>
                        </FormGroup>
                        <ModalFooter>
                        
                        <Button color="primary" type='submit' onClick={toggle}>Add Comment</Button>{' '}

                        <Button color="primary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </ModalBody> 
            </Modal>
        </div>
    );
}

export default AddReview;


